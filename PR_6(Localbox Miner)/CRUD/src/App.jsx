function App() {


const handleSubmit = () => {

}

  return (
    <>
      <div align="center">
          <h2>Property Listing Dashboard</h2>
          <hr />
          <hr />

          <form action="">
           <table border={1} cellPadding={6} cellSpacing={3}>
              <tbody>
                <tr>
                  <td>Agent_name</td>
                  <td>
                    <input type="text" name="agent" placeholder="Enter Agent Name...!" />
                  </td>
                </tr>
                 <tr>
                  <td>Type</td>
                  <td>
                    <input type="radio" name="type" value="rent" />Rent
                    <input type="radio" name="type" value="sale" />
                    Sale
                  </td>
                </tr>
                <tr>
                  <td>Address</td>
                  <td>
                     <input type="text" name="address" placeholder="Enter Property Address...!" />
                  </td>

                  {/* value , onchange , require aapvanu baki che badha ma */}
                </tr>
                <tr>
                  <td>Price</td>
                  <td>
                    <input type=" number" name="price" placeholder="Enter Property Price...!" />
                  </td>
                </tr>
               
                <tr>
                  <td>Status</td>
                  <td>
                    <select name="status" >
                      <option value="available">Available</option>
                      <option value="sold">Sold</option>
                    </select>
                  </td>
                </tr>
                
                <tr>
                  <td></td>
                  <td>
                    <input type="button" value="Submit" onClick={handleSubmit} />
                  </td>
                </tr>
              </tbody>
           </table>
          </form>
      </div>
    </>
  )
}

export default App
