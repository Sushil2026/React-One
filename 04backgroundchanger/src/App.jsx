import { useState } from 'react'

import './App.css'

function App() {
  const [color, setColor] = useState('olive')
  return (
    <div className='w-full h-screen duration-200' style={{backgroundColor: color}}>     
      <div className='fixed bottom-12 inset-x-0 flex justify-center items-center px-2'>
        <div className='flex flex-wrap justify-center gap-3 shadow-lg bg-gray-700 px-3 py-2 rounded-3xl'>
          <button className='bg-red-600 outline-none px-4 py-1 rounded-full shadow-lg text-black'
          onClick={() => setColor('red')}>Red</button>
          <button className='bg-green-600 outline-none px-4 py-1 rounded-full shadow-lg text-black'
          onClick={() => setColor('green')}>Green</button>
          <button className='bg-blue-600 outline-none px-4 py-1 rounded-full shadow-lg text-black' 
          onClick={() => setColor('blue')}>Blue
          </button>
          <button className='bg-orange-600 outline-none px-4 py-1 rounded-full shadow-lg text-black' 
          onClick={() => setColor('orange')}>Orange
          </button>
          <button className='bg-pink-600 outline-none px-4 py-1 rounded-full shadow-lg text-black' 
          onClick={() => setColor('pink')}>Pink
          </button>
        </div>
      </div>


    </div>
  )
}
export default App
