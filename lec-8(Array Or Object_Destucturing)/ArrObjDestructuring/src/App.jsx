import Object from './Object'
function App() {

  let arr = [10, 20, 30, 40, 50];
  let obj = {
    id: 1, name: "Om", age: 15
  }
  console.log(obj);

  const { id, name, age } = obj
  console.log(id);
  console.log(name);
  console.log(age);

  const [a, b, c, d, e] = arr;
  console.log(arr);

  console.log(`Destructuring arr
      A:-${a}
      B:-${b}
      C:-${c}
      D:-${d}
      E:-${e}
    `)

  console.log(`For loop se print`);

  for (let i = 0; i < arr.length; i++) {
    console.log(arr[i] + 1);
  }

  console.log(`map se print `);

  arr.map((val, i) => {
    console.log(val + 1);
  })

  return (
    <>
      <div align="center">
        <h1>Destucturing Of Array</h1>
        <p> A : {a}</p>
        <p> B : {b}</p>
        <p> C : {c}</p>
        <p> D : {d}</p>
        <p> E : {e}</p>
      </div>

      <Object
        name={name}
        id={id}
        age={age}
      />
    </>
  )
}

export default App
