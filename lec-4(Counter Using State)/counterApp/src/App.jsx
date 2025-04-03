import { useState } from 'react'
import './App.css'

function App() {
  let[cnt,setCnt]=useState(0);
  const Add =() => {
    setCnt(cnt+1);
  }
  const Min =() => {
    setCnt(cnt-1)
  }00

  return (
    <>
      <div align="center">
        <h1>--:) Counter App (:--</h1>
        <h2>Count:- {cnt} </h2>

        <button onClick={() => Add()}>+</button>
        <button onClick={() => Min()}>-</button>
      </div>
    </>
  )
}

export default App
