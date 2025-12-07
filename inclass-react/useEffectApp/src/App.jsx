import './App.css'
import { useEffect, useState } from 'react'
import Add from './Add.jsx'



function App() {

  const [counter, setCounter] = useState(0);

  useEffect(() => {
    console.log(counter);
    setTimeout(() => {
      setCounter((counter) => counter + 1);
    }, 1000)
  }, [counter])


 

  return (
    <>
      <h2>{counter}</h2>
      <button onClick={() => setCounter(counter + 1)}>Increment</button>
      <Add counter={counter} />
    </>
  )
}

export default App
