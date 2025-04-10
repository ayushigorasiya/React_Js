import React from 'react'

const Object = ({ obj }) => {
    return (
        <>
            <div align="center">
                <h1>My Object API</h1>

                {/* <table border={1}>
                    <thead>
                        <tr>
                            <th>Id</th>
                            <th>Name</th>
                            <th>Data</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            obj.map((o, i) => {
                                return (
                                    <tr key={i}>
                                        <td>{o.id}</td>
                                        <td>{o.name}</td>
                                        <td>{o.data.capacity}</td>
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </table> */}

                <ul>
                    {obj.map(o => (
                        <li key={o.id}>
                            <h3>{o.name}</h3>
                            <div>
                                {/* Default product.data to an empty object */}
                                {Object.entries(product.data || {}).map(([key, value]) => (
                                    <p key={key}>
                                        <strong>{key}:</strong> {value}
                                    </p>
                                ))}
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        </>
    )
}

export default Object
