import { useState, useCallback, useEffect, useRef } from 'react'
import toast, { Toaster } from 'react-hot-toast';


import './App.css'

function App() {
   const [color, setColor] = useState('olive')
   const [length, setLength] = useState(8)
   const [numberAllowed, setNumberAllowed] = useState(false) 
   const [charAllowed, setCharAllowed] = useState(false) 
   const [password, setPassword]=useState('')
   const passwordRef = useRef(null)
   const [isCopied, setIsCopied] = useState(false);

   const generatePassword = useCallback(() => {
    let pass=""
    let str = "ABCDEFGHIJKLMNOPQRSTWXYZabcdefghijklmnopqrstuvwxyz"
    if(numberAllowed) str += "0123456789"
    if(charAllowed) str += "!@#$%^&*()_+"
    for (let i = 0; i < length; i++) {
      const char = Math.floor(Math.random() * str.length + 1)
      pass += str.charAt(char)            
    }
    setPassword(pass)
   }, [length, numberAllowed, charAllowed])  
  

  const copyPasswordToClipboard = () => {
  // Prevent clicking if already in progress
  if (isCopied) return; 

  window.navigator.clipboard.writeText(password)
    .then(() => {
      setIsCopied(true); // Set state to true
      toast.success("Password copied!");
      
      // Reset back to false after 2 seconds
      setTimeout(() => setIsCopied(false), 2000); 
    })
    .catch(() => {
      toast.error("Failed to copy.");
    });
};


   useEffect(() => {
    generatePassword()
   }, [length, numberAllowed, charAllowed])


  return (   
    <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 bg-gray-800 text-orange-500 hover:shadow-xl 
    hover:scale-[1.09] transition-all duration-300'>    
      <h1 className='text-white text-center my-3'>
        Password Generator
      </h1>
      <div className='flex shadow rounded-lg overflow-hidden mb-4'>
        <input
         type="text"
         value ={password}
         className= ' bg-white outline-none w-full py-1 px-3 text-amber-900'
         placeholder='Password'
         readOnly
         />
         <button
         className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0'
         onClick={copyPasswordToClipboard}
         >Copy</button>
         <Toaster />
      </div>
      <div className='flex text-sm gap-2'>
        <div className=' flex items-center gap-x-1'>
          <input
           type="range"
           min={6}
           max={100}
           value={length}
           className='cursor-pointer text-red-700'
           onChange={(e) => setLength(e.target.value)}
           name=''
           id=''
          />
          <label htmlFor="length"> Length : {length}</label>

        </div>
        <div className='flex items-center gap-x-1'>
          <input
           type='checkbox'
           defaultChecked = {numberAllowed}
           onChange={() => {
            setNumberAllowed((prev) => !prev)
           }
           }
          />
          <label htmlFor="number">Numbers</label>

        </div>

        <div className=' flex items-center gap-x-1'>
          <input
           type='checkbox'
           defaultChecked = {charAllowed}
           onChange={() => {
            setCharAllowed((prev) => !prev)
           }
           }
          />
          <label htmlFor="charInput">Characters</label>

        </div>
      </div>
    </div>
  )
}

export default App
