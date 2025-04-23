import React from 'react'
import '../App.css'


const Accounts = ({account}) => {
  return (
    <>
        <div align="center">
            <h2>My Account Details</h2>
        <table>
            <thead>
                <tr>
                    <th>Id</th>
                    <th>Name</th>
                    <th>Type</th>
                    <th>Balance</th>
                    <th>Currency</th>
                </tr>
            </thead>
            <tbody>
                    {
                        account.map((a , i) => {
                            let{ id , name , type , balance , currency} = a;
                            return(
                                <tr key={i}>
                                    <td>{id}</td>
                                    <td>{name}</td>
                                    <td>{type}</td>
                                    <td>{balance}</td>
                                    <td>{currency}</td>


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

export default Accounts
