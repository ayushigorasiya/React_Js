import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Login from './pages/login'
import Todo from './Todo'

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Login/>}/>
          <Route path='/todo' element={<Todo/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
