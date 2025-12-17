import "./App.css";
import { useEffect, useState } from "react";
import Add from "./Add.jsx";

function App() {
  const [counter, setCounter] = useState(0);
  const [name, setName] = useState("");
  const [data, setData] = useState({});


  useEffect(() => {
    console.log("use effect called");
    renderUI(data);
  }, [counter, name, data]);

  async function callAPI() {
    setName("Loading...");
    try {
      const response = await fetch(`https://api.github.com/users/zeiadhabbab`);
      if (!response.ok) {
        throw new Error("User not found" + response.status);
      } else {
        let data = await response.json();
        localStorage.setItem("user-data", JSON.stringify(data));
        setData(data);
      }
    } catch (err) {
      console.log(err.message);
    }
  }

  function renderUI(data) {
    if (data.login) {
      setName(data.login);
    }
  }

  return (
    <>
      <h2>{counter}</h2>
      <h2>{name}</h2>
      <button onClick={() => setCounter(counter + 1)}>Increment</button>

      <button onClick={() => setName("Zeyad" + counter)}>Set Name</button>

      <button onClick={callAPI}>Call Profile Api </button>
    </>
  );
}

export default App;
