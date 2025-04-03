import React from 'react'

const Todo = ({ tList }) => {
    return (
        <>
            <h1>Todo list</h1>
            <table border={1}>
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Task</th>
                    </tr>
                </thead>

            </table>
        </>
    )
}

export default Todo


//     < tbody >
// {
//     todoList.map((todo) => {
//         return (
//             <tr>
//                 <td>{todo.id}</td>
//                 <td>{todo.name}</td>
//             </tr>
//         )
//     })
// }
//     </tbody >