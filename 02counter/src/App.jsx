import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  // const [count, setCount] = useState(0)

  let  [counter, setCounter] = useState(9)

  // let counter  = 15

  const addValue = () => {
    // counter++
    // console.log("Clicked", counter);
    setCounter(++counter)
  }

  const removeValue = () => {
    setCounter(--counter)
  }

  return (
    <>
      <h1>React From Kalyug!</h1>
      <h2>Counter value : {counter}</h2>
      <button onClick={addValue}>Add Value ➕</button>
      <br />
      <button onClick={removeValue}>Remove Value ➖</button>
      <p>Footer</p>
    </>
  )
}

export default App
