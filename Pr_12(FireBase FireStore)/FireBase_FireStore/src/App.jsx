import { BrowserRouter, Route, Routes } from "react-router-dom"
import Add from "./pages/Add"
import View from "./pages/View"
function App() {

  return (
    <>
    <div align="center">
      <h1>Todo List</h1>
      <hr />
      <hr />
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<View />}/>
      <Route path="/add" element={<Add/>}/>
      
    </Routes>
    </BrowserRouter>
    </div>
    </>
  )
}

export default App
