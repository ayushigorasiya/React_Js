// import React from 'react'

// const Users = ({ usersdata }) => {


//     return (
//         <div align="center">
//             <h1>My Users Api</h1>
//             <table border={1}>
//                 <thead>
//                     <tr>
//                         <th>Id</th>
//                         <th>Firstname</th>
//                         <th>Age</th>
//                         <th>Gender</th>
//                         <th>Email</th>
//                         <th>Image</th>
//                         <th>Hair</th>
//                         <th>Address</th>
//                         <th>Company</th>
//                         <th>Role</th>
//                         <th>Crypto</th>
//                     </tr>
//                 </thead>
//                 <tbody>
//                     {
//                         usersdata.map((u, index) => {
//                             console.log(u);
//                             return (
//                                 <tr key={index}>
//                                     <td>{u.id}</td>
//                                     <td>{u.firstName}</td>
//                                     <td>{u.age}</td>
//                                     <td>{u.gender}</td>
//                                     <td>{u.email}</td>
//                                     <td>
//                                         <img src={u.image} alt="" />
//                                     </td>
//                                     <td>
//                                         <ul align="left">
//                                             <li> Hair_Color : {u.hair.color}</li>
//                                             <br />
//                                             <li> Type : {u.hair.type}</li>
//                                         </ul>
//                                     </td>
//                                     <td>
//                                         <table border={1}>
//                                             <thead>
//                                                 <tr>
//                                                     <th>Address</th>
//                                                     <th>City</th>
//                                                     <th>Country</th>
//                                                     <th>Cordinates</th>
//                                                 </tr>
//                                             </thead>
//                                             <tbody>
//                                                 <tr>
//                                                     <td>{u.address.address}</td>
//                                                     <td>{u.address.city}</td>
//                                                     <td>{u.address.country}</td>
//                                                     <td>
//                                                         <ul align="left">
//                                                             <li>Lat : {u.address.coordinates.lat}</li>
//                                                             <li>Lng : {u.address.coordinates.lng}</li>
//                                                         </ul>
//                                                     </td>
//                                                 </tr>
//                                             </tbody>
//                                         </table>
//                                     </td>
//                                     <td>
//                                         <tr>
//                                             <td>Company_name:- {u.company.name}</td>
//                                         </tr>
//                                         <tr>
//                                             <td>Company_Department:-{u.company.department}</td>
//                                         </tr>
//                                         <tr>
//                                             <td>Company_title:-{u.company.title}</td>
//                                         </tr>

//                                     </td>
//                                     <td>{u.role}</td>
//                                     <td>
//                                         <tr>
//                                             <td>Coin:- {u.crypto.coin}</td>
//                                         </tr>
//                                         <tr>
//                                             <td>Network:-{u.crypto.network}</td>
//                                         </tr>
//                                         <tr>
//                                             <td>Wallet:-{u.crypto.wallet}</td>
//                                         </tr>
//                                     </td>
//                                 </tr>
//                             )

//                         })
//                     }
//                 </tbody>
//             </table>
//         </div>
//     )
// }

// export default Users


import React from 'react';
import '../App.css';

const Users = ({ usersdata }) => {
    return (
        <div className="users-container">
            <h1 className="heading">My Users Api</h1>
            <div className="cards-container">
                {usersdata.map((u, index) => {
                    return (
                        <div key={index} className="user-card">
                            <div className="card-header">
                                <img src={u.image} alt={`${u.firstName}'s Image`} className="user-image" />
                                <h2>{u.firstName} {u.id}</h2>
                            </div>
                            <div className="card-body">
                                <p><strong>Age:</strong> {u.age}</p>
                                <p><strong>Gender:</strong> {u.gender}</p>
                                <p><strong>Email:</strong> {u.email}</p>
                                <div className="hair-info">
                                    <p><strong>Hair:</strong></p>
                                    <ul>
                                        <li>Color: {u.hair.color}</li>
                                        <li>Type: {u.hair.type}</li>
                                    </ul>
                                </div>
                                <div className="address-info">
                                    <p><strong>Address:</strong></p>
                                    <ul>
                                        <li>{u.address.address}</li>
                                        <li>{u.address.city}, {u.address.country}</li>
                                        <li>Coordinates: Lat: {u.address.coordinates.lat}, Lng: {u.address.coordinates.lng}</li>
                                    </ul>
                                </div>
                                <div className="company-info">
                                    <p><strong>Company Info:</strong></p>
                                    <ul>
                                        <li>Name: {u.company.name}</li>
                                        <li>Department: {u.company.department}</li>
                                        <li>Title: {u.company.title}</li>
                                    </ul>
                                </div>
                                <div className="crypto-info">
                                    <p><strong>Crypto Info:</strong></p>
                                    <ul>
                                        <li>Coin: {u.crypto.coin}</li>
                                        <li>Network: {u.crypto.network}</li>
                                        <li>Wallet: {u.crypto.wallet}</li>
                                    </ul>
                                </div>
                            </div>
                            <div className="card-footer">
                                <p><strong>Role:</strong> {u.role}</p>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default Users;
