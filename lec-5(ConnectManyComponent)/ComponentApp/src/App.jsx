import { useState } from "react"
import Counter from "./Counter"
import Todo from "./Todo";

function App() {
let[no ,setNumber]=useState(0);

const plus = () => {
  setNumber(no +1);
}

const minus = () => {
  setNumber(no-1);
}

const reset =()=> {
  setNumber(0)
}


let [todolist, setTodoList] = useState([
  { id: 1, name: "Writing" },
  { id: 2, name: "Listning" },
  { id: 3, name: "Swimming" },
])
  return (
    <>
      <Counter
        num ={no}
        Plus ={plus}
        Minus={minus}
        Reset ={reset}
        
      />

      <Todo
      tList={todolist}
      />
    </>
  )
}

export default App





//   return (
//       <Todo
//         todoList={todolist}
//       />
//     </>
//   )
// }
// export default App

