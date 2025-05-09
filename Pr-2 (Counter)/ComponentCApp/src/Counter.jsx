const Counter=({no,plus,minus,reset})=> {
   return(
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
        <h1> --:) Counter App (:--</h1>
        <h2>Count:- {no}</h2>
        <button onClick ={() => plus()} style={{ fontSize: '20px', padding: '10px', margin: '10px', backgroundColor: '#4CAF50', color: 'white', border: 'none', borderRadius: '5px' }}>+</button>
        <button onClick ={() => reset()}  style={{ fontSize: '20px', padding: '10px', margin: '10px', backgroundColor: '#f44336', color: 'white', border: 'none', borderRadius: '5px' }}>Reset</button>
        <button onClick ={() => minus()} style={{ fontSize: '20px', padding: '10px', margin: '10px', backgroundColor: '#ff9800', color: 'white', border: 'none', borderRadius: '5px' }}>-</button>
    </div>
   )
}

export default Counter