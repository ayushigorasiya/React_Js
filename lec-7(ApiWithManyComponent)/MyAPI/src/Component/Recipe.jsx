// import React from 'react'

// const Recipe = ({ recipe }) => {
//     return (
//         <div align='center'>
//             <h1>My Recipe API</h1>
//             <table border={1} >
//                 <thead>
//                     <tr>
//                         <th>Id</th>
//                         <th>UserId</th>
//                         <th>Image</th>
//                         <th>Ingredients</th>
//                         <th>Instruction</th>
//                         <th>Name</th>
//                         <th>Tags</th>
//                         <th>Rating</th>
//                     </tr>
//                 </thead>
//                 <tbody>
//                     {
//                         recipe.map((r, i) => {
//                             return (
//                                 <tr key={i}>
//                                     <td>{r.id}</td>
//                                     <td>{r.userId}</td>
//                                     <td>
//                                         <img src={r.image} width={100} alt="" />
//                                     </td>
//                                     <td>
//                                         {
//                                             r.ingredients.map((i, idx) => {
//                                                 return (
//                                                     <ul key={idx}>
//                                                         <li>{i}</li>
//                                                     </ul>

//                                                 )
//                                             })
//                                         }
//                                     </td>
//                                     <td>
//                                         {
//                                             r.instructions.map((ins, ind) => {
//                                                 return (
//                                                     <ul key={ind}>
//                                                         <li>{ins}</li>
//                                                     </ul>
//                                                 )
//                                             })
//                                         }
//                                     </td>
//                                     <td>{r.name}</td>
//                                     <td>
//                                         {
//                                             r.tags.map((tag, indx) => {
//                                                 return (
//                                                     <ul key={indx}>
//                                                         <li>{tag}</li>
//                                                     </ul>
//                                                 )
//                                             })
//                                         }
//                                     </td>
//                                     <td>{r.rating}</td>
//                                 </tr>
//                             )
//                         })
//                     }
//                 </tbody>
//             </table>
//         </div>
//     )
// }

// export default Recipe  


import React from 'react'
import '../App.css';


const Recipe = ({ recipe }) => {
    return (
        <div className="container">
            <h1>My Recipe API</h1>
            <div className="cards">
                {
                    recipe.map((r, i) => {
                        return (
                            <div className="card" key={i}>
                                <img src={r.image} className="card-img" alt={r.name} />
                                <div className="card-content">
                                    <h3>{r.name}</h3>
                                    <div className="rating">
                                        <span><strong>Rating:</strong> {r.rating}</span>
                                    </div>
                                    <div className="section">
                                        <p><strong>Ingredients:</strong></p>
                                        <ul>
                                            {r.ingredients.map((i, idx) => <li key={idx}>{i}</li>)}
                                        </ul>
                                    </div>
                                    <div className="section">
                                        <p><strong>Instructions:</strong></p>
                                        <ul>
                                            {r.instructions.map((ins, ind) => <li key={ind}>{ins}</li>)}
                                        </ul>
                                    </div>
                                    <div className="tags">
                                        <p><strong>Tags:</strong></p>
                                        <div className="tags-list">
                                            {r.tags.map((tag, indx) => <span className="tag" key={indx}>{tag}</span>)}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default Recipe