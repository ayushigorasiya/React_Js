import { useState } from "react"
import Form from "./form/Form"
import Table from "./table/Table"

function App() {

  const [allrecord ,setAllRecord] = useState(JSON.parse(localStorage.getItem('user')) || []); 
  const changeInput = (e) => {
    const {name , value} = e.target;
  }

  const handleSubmitBtn = (input) => {
  
    let oldrecord = [...allrecord, input];
    localStorage.setItem('user', JSON.stringify(oldrecord));
  }

  return (
    <>
    <Form
      handleSubmitBtn={handleSubmitBtn}
    changeInput={changeInput}
    />
    <br />
    <br />
    <br />
    <br />
    <Table
      allrecord={allrecord}
    />
    </>
  )
}
export default App
