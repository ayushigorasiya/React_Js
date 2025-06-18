import { BrowserRouter, Route, Routes } from "react-router-dom"
import View from "./Pages/View"

function App() {

  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<View/>}/>
      <Route></Route>
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
