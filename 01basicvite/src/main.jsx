import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx'

const reactElement = {
    type: 'a', 
    props: {
        href: "https://google.com", 
        target: '_blank'
    },
    children: 'Click me to visit google'
} 


//HTML Element
const AnotherElement = (
    <a href="http://google.com" target ="_blank">Visit Google</a>
)

function MyApp(){
    return (
    <div>
        <h1>Custom React App</h1>
    </div>
    )
}


// React element
const areactElement = React.createElement(
    'a',
    {
        href:'https://google.com', target:'_blank'
    },
    'click on visit google'
)

ReactDOM.createRoot(document.getElementById('root')).render(
  
    // AnotherElement
    
    //areactElement

    App()
  
)
