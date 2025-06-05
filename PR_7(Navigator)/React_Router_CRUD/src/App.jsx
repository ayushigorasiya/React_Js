import { BrowserRouter, Route, Routes } from "react-router-dom"
import View from "./pages/View"
import Add from "./pages/Add"
import Edit from "./pages/Edit"

function App() {

  return (
    <>
      <div align="center">
        <h2>React_Router_Crud</h2>
        <hr />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<View />} />
            <Route path="/add" element={<Add />} />
            <Route path="/edit/:editid" element={<Edit />} />
          </Routes>
        </BrowserRouter>

      </div>
    </>
  )
}

export default App
