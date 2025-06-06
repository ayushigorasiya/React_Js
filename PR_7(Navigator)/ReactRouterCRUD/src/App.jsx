import { BrowserRouter, Route, Routes } from "react-router-dom"
import View from "./Pages/View"
import Add from "./Pages/Add"
import Edit from "./Pages/Edit"
import './App.css'

function App() {

  return (
    <>

      <BrowserRouter>
      <Routes>
        <Route path="/" element={<View/>}></Route>
        <Route path="/add" element={<Add/>}></Route>
        <Route path="/edit/:editid" element={<Edit/>}></Route>
      </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
