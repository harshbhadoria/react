import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  // const [count, setCount] = useState(0)

  let  [counter, setCounter] = useState(9)

  // if(){

    // if(counter > 0 && counter < 20){
    //   var addValue = () => {
    //     setCounter(++counter)
    //     console.log("clicked for add", counter);
        
    //   }

    //   var removeValue = () => {
    //     setCounter(--counter)
    //     console.log("clicked for add", counter);
    //   }
    // }else if (counter == 0) {
    //   var addValue = () => {
    //     setCounter(++counter)
    //     console.log("clicked for add", counter);
        
    //   }
    // } else if (counter == 20) {
    //   var removeValue = () => {
    //     setCounter(--counter)
    //     console.log("clicked for add", counter);
    //   }
    // }
    if (counter >= 0 && counter <= 20) {
      var updateCounter = (increment) => { 
        if (increment) {
          if (counter < 20) {
            setCounter(++counter);
            console.log("clicked for add", counter);
          }
        } else {
          if (counter > 0) {
            setCounter(--counter);
            console.log("clicked for remove", counter);
          }
        }
      };
    
      var addValue = () => updateCounter(true);
      var removeValue = () => updateCounter(false);
    }

  // }

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
