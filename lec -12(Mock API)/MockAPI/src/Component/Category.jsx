import React from 'react'
import '../App.css'


const Category = ({cate}) => {
  return (
    <div align="center">
        <h2>My Category Details</h2>
      <table>
        <thead>
            <tr>
                <th>Id</th>
                <th>Name</th>
                <th>Type</th>
                <th>Icon</th>
            </tr>
        </thead>
        <tbody>
            {
                cate.map((c , i ) => {
                    let{id , name , type , icon} = c;
                    return(
                        <tr key={i}>
                            <td>{id}</td>
                            <td>{name}</td>
                            <td>{type}</td>
                            <td>{icon}</td>
                        </tr>
                    )
                })
            }
        </tbody>
      </table>
    </div>
  )
}

export default Category
