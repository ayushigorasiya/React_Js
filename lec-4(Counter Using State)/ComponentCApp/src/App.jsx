import { useState } from 'react';
import './App.css'
import Counter from './Counter'
function App() {
let[cnt,setCnt]= useState(0);
const plus = () => {
  setCnt(cnt+1)
 }  
 const minus = () => {
  setCnt(cnt > 0 ? cnt-1 : 0)
 }  
 const reset = () => {
  setCnt(0)
 }  
 return (
    <>
     <div align="center">
     <Counter
      no={cnt}
      plus={plus}
      minus={minus}
      reset={reset}
      />
     </div>
    </>
  )
}

export default App
