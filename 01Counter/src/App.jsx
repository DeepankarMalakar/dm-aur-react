import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  let [counter, deepuCounter] = useState(15)
  
  // let counter = 15;
  
  const addValue = () => {
    // counter = counter + 1;
    if (counter === 20) return 20
    deepuCounter(counter + 1);
  }

  const removeValue = () => {
    if (counter === 0) return 0
    deepuCounter(counter - 1);
  }

  return (
    <>
      <h1>DM aur react</h1>
      <h2>Counter value : {counter}</h2>

      <button onClick={addValue}>Increment : {counter}</button>
      <br />
      <button onClick={removeValue}>Decrement : {counter}</button>
    </>
  )
}

export default App
