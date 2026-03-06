import { useState } from 'react'
import Card from '../components/Card'

import './App.css'

function App() { 
  return (
    <>
    <h1 className='text-2xl bg-green-500 p-3 rounded-md w-full'>Wel come to Tailwind...</h1>    
    <Card username="Sushil Kumar Mishra"/>
    <Card username='Vishal' post='QA'/>
    <Card username='Vishal' post='Not assinged any role yet'/>
    
    </>
    )
}
export default App
