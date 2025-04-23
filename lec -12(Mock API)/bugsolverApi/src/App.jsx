import { useEffect, useState } from "react"
import './App.css';

function App() {

  let [bug, setBug] = useState([])

  let getBugs = () => {
    fetch(`http://localhost:9999/bugs`)
      .then(res => res.json())
      .then((data) => {
        setBug(data);
        console.log(data);
      })
  }
  useEffect(() => {
    getBugs();
  }, [])
  return (
    <>
      <div align="center">
        <h2>Bug Solver API</h2>

        <table border={1}>
          <thead>
            <tr>
              <th>Id</th>
              <th>Title</th>
              <th>Priority</th>
              <th>Status</th>
              <th>Description</th>
              <th>Project</th>
              <th>Assigned_To</th>
            </tr>
          </thead>
          <tbody>
            {
              bug.map((b, i) => {
                return (
                  <tr key={i}>
                    <td>{b.id}</td>
                    <td>{b.title}</td>
                    <td>{b.priority}</td>
                    <td>{b.status}</td>
                    <td>{b.description}</td>
                    <td>
                    <ul>
                      <li>Id : {b.project.id}</li>
                      <li>Name : {b.project.name}</li>
                      <li>Description : {b.project.description}</li>
                    </ul>
                    </td>
                    <td>
                      <ul>
                      <li>Id : {b.assignedTo.id}</li>
                      <li>Name : {b.assignedTo.name}</li>
                      <li>Email : {b.assignedTo.email}</li>
                      </ul>
                    </td>
                  </tr>
                )
              })
            }
          </tbody>
        </table>
      </div>
    </>
  )
}

export default App
