import { use } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { increment ,decrement} from "./Redux/Action/CounterAction";
function App() {
  const no = useSelector((state) => state.counter);
  const dispatch = useDispatch();
  return (
    <>
      <h1>counter App</h1>
      no :{no}
      <button onClick={() => dispatch(increment())}>+</button>
      <button onClick={() => dispatch(decrement())}>-</button>
    </>
  );
}

export default App;