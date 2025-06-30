import React from 'react'
import { Link } from 'react-router-dom'

function View() {
  return (
    <div align="center">
        <h2>View User</h2>
        <hr />
        <hr />
        <Link to={`/add`}>Add</Link>
    </div>
  )
}

export default View
