import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "./Pages/Home"
import About from "./Pages/About"
import Contact from "./Pages/Contact"


function App() {

  return (
    <>
    <div align="center">
      <hr />
       <h2>Router</h2>
       <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home/>} ></Route>
            <Route path="/about" element={<About/>}></Route>
            <Route path="/con" element={<Contact/>}></Route>
          </Routes>
       </BrowserRouter>
      <hr />
    </div>
    </>
  )
}

export default App
