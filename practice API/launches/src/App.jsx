import { useEffect, useState } from "react"

function App() {

  let [launch, setLaunch] = useState([])

  let getLaunches = () => {
    fetch(`https://api.spacexdata.com/v4/launches`)
      .then(res => res.json())
      .then((data) => {
        setLaunch(data)
        console.log(data);
      }).catch((err) => {
        console.log(err);
        return false;
      })
  }

  useEffect(() => {
    getLaunches();
  }, [])

  return (
    <>
      <div align="center">
        <h2>Flight Launche API</h2>
        <table border={1}>
          <thead>
            <tr>
              <th>No</th>
              <th>Id</th>
              <th>Name</th>
              <th>Cores</th>
              <th>Details</th>
              <th>Image</th>
            </tr>
          </thead>
          <tbody>
            {
              launch.map((l, i) => {
                return (
                  <tr key={i}>
                    <td>{++i}</td>
                    <td>{l.id}</td>
                    <td>{l.name}</td>
                    <td>
                      {
                        l.cores.map((c, no) => {
                          return (
                            <tr key={no}>
                              <td>Cors : {c.core}</td>
                              <td>Flight : {c.flight}</td>
                            </tr>
                          )
                        })
                      }
                    </td>
                    <td>{l.details}</td>
                    <td>
                      <img src={l.links.petch.small} alt="" />
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
