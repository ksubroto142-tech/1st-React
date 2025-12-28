import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Counter from './assets/Counter'
import State from './assets/State'

function App() {

  function handleClick(){
    alert("I am Clicked.")
  }

  const handleClick3 = () =>{
    alert('Click 3')
  }

  return (
    <>
     
      <h3>Vite + React</h3>
      <State></State>

      <Counter />

      <button onClick={handleClick}>Click me</button>
      <button onClick={() => alert('click 2')}>Click me</button>
      <button onClick={handleClick3}>Click me</button>
    </>
  )
}

export default App
