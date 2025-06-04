import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

function View() {
  const [allrecord , setAllrecord]=useState([]);
  const navigate = useNavigate();
  return (
    <div>
      <Link to="/add">Add</Link>
    </div>
  )
}

export default View
