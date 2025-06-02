import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

function Home() {

    const navigate= useNavigate();
    const a = 10;

    const data = {
        color:['red' , 'green' , 'blue' , 'yellow' , 'black'],
        users:[
            {id:1, name:'om' , phone:12354},
            {id:2, name:'shiv' , phone:12354},
            {id:3, name:'rudra' , phone:12354},
            {id:4, name:'hari' , phone:12354},
            {id:5, name:'neel' , phone:12354},

        ]
    }

    const handleSubmit = () => {
        console.log('form submitted')
        navigate('/con' , {state:data})
    }
  return (
    <div>
        <h2>Home_Page</h2>
     <p>
         <Link to="/">Home</Link>
     </p>
     <p>
         <Link to="/about" state={a}>About</Link>
     </p>
     <p>
         <Link to="/con" state={data}>Contact</Link>
     </p>

     <p>
        <button onClick={() => handleSubmit()}>Click Here</button>
     </p>
    </div>
  )
}

export default Home
