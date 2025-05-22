import React from 'react';

const Table = ({ allrecord }) => {
  return (
    <>
        <div align="center">
            <h2>My User's Data</h2>
            <table border={1}>
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Password</th>
                        <th>Gender</th>
                        <th>Courses</th>
                        <th>City</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        allrecord.map((i , no) => {
                            return(
                                <tr key={no}>
                                    <td>{no+1}</td>
                                    <td>{i.name}</td>
                                    <td>{i.email}</td>
                                    <td>{i.password}</td>
                                    <td>{i.gender}</td>
                                    <td>{i.courses.join(" || ")}</td>
                                    <td>{i.city}</td>
                                    <td>
                                        <button>Delete</button>&nbsp;&nbsp;||&nbsp;&nbsp; <button>Edit</button>
                                    </td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
        </div>
    </>
  );
}

export default Table;
