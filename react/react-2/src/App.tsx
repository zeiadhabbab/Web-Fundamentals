import Desc from "./components/Description"
import { Footer, Header } from "./components/Lib"
import Title from "./components/Title"
import './App.css'

function App() {

  return (
    <>
      <Header/>
        <Title text="Hello, Vite + React! My component 2"/>
        <Desc />
        <Title text="Hello, Vite + Rnt 3"/>
        <Title text="Bye"/>
        <Title classTag="class-tag" text="Hiiiiii"/>
      <Footer/>
    </>
  )
}

export default App
