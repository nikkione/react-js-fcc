import { useState } from 'react'

import './App.css'

function App() {

  const [counter, setCounter] = useState(0);

  const increment = () => {
    setCounter(counter + 1)
  }
  const decrement = () => {
    setCounter(counter - 1)
  }
  const reset = () => {
    setCounter(0)
  }
  return (
    <>
     <h1>Simple counter {counter}</h1>
      <button onClick={increment}>Increment</button>{" "}
      <button onClick={decrement}>Decrement</button><br/><br/>
      <button onClick={reset}>Reset counter</button>
     <p>footer: {counter}</p>
    </>
  )
}

export default App
