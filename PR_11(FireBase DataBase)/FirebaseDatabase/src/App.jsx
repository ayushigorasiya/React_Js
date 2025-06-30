import { BrowserRouter,Route, Routes } from 'react-router-dom'
import View from './Pages/View'
import Add from './Pages/Add'

function App() {
  return (
    <>
      <div align="center">
        <BrowserRouter>
        <Routes>
          <Route path='/' element={<View/>}  />
          <Route path='/add' element={<Add/>}/>
        </Routes>
        </BrowserRouter>
      </div>
    </>
  )
}

export default App
