import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  const [counter, setCounter] = useState(0);
  const [name, setName] = useState("Vite");

  function addCounter() {
    //counter + 1;

    setCounter(counter + 1);

    if(counter >= 10 ){
      setName("Adam");
    }
  }

  function resetCounter() {
    setCounter(0);
  }

  return (
    <>
    <h2>Hello {name}</h2>
    <div>{counter}</div>
    <button onClick={addCounter}>Increment</button>
    <button onClick={resetCounter}>Reset</button>
    </>
  )
}

export default App
