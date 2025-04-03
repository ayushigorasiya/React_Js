import React from 'react'

const Counter = ({num, Plus,Minus,Reset}) => {
  return (
    <>
       <div align="center">
       <h1>My Counter App</h1>
       <h2>Count_No:- {num}</h2>
       <button onClick={() => Plus()}>+</button>
       <button onClick={() => Minus()}>-</button>
       <button onClick={() => Reset()}>Reset</button>
       </div>
    </>
  )
}

export default Counter


// import React, { useState } from 'react'
// import Color from './Color';
// const Counter = ({ number, increment, decrement }) => {
//     const [color, setColor] = useState(["red", "green", "blue", "pink"]);
//    
// export default Counter
