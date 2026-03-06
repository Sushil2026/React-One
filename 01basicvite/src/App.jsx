
import Youtube from "./Youtube"


const username = "Sushil";
const application = "My Application for testing";
function App() {
  
  return (
    <>
    <h1> Vite React App : 2 + 2 is {2+2}</h1>
    <h1> Application Name : {application}</h1>
    <h1> Vite React App for username : {username}</h1>
    <Youtube/>
    </>
    // can only return one element
  )
}

export default App
