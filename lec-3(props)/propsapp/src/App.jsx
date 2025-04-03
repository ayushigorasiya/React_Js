import Home from "./Home"

function App() {
  let a = 10;
let color=["red" , "green", "blue", "skyblue", "pink"];

  return (
    <>
      <Home abc={a} color={color}
      />
    </>
  )
}

export default App
