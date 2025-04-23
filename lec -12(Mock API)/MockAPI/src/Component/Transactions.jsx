import React from 'react'
import '../App.css'


const Transactions = ({trans}) => {
  return (
    <>
    <div align="center">
      <h2>My Transaction Details</h2>

      <table>
        <thead>
            <tr>
                <th>Id</th>
                <th>Amount</th>
                <th>Type</th>
                <th>CategoryId</th>
                <th>AccountId</th>
                <th>Note</th>
                <th>Date</th>
            </tr>
        </thead>

        <tbody>
            {
                trans.map((t , i) => {
                    let{id , amount , type , categoryId , accountId , note , date} = t;
                    return(
                        <tr key={i}>
                            <td>{id}</td>
                            <td>{amount}</td>
                            <td>{type}</td>
                            <td>{categoryId}</td>
                            <td>{accountId}</td>
                            <td>{note}</td>
                            <td>{date}</td>
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

export default Transactions
