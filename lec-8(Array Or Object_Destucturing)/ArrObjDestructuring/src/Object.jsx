import React from 'react'

const Object = ({name,age,  id }) => {
    return (
        <>
            <br />
            <br />
            <br />
            <div align="center">
                <h1>Destructuring Of Ovject</h1>
                <h3>{id}</h3>
                <h3>{age}</h3>
                <h3>{name}</h3>
            </div>
        </>
    )
}

export default Object
