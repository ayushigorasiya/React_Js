import React from 'react'
import { Link } from 'react-router-dom'

function View() {
  return (
    <div align="center">
        <h2>View User</h2>

        <Link to={`/add`}>Add_User</Link>

    </div>
  )
}

export default View
