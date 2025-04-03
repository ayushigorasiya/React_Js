const Home = ({abc,color}) => {
    return (
        <>
            <h1>A Value is :{abc}</h1>

            {color.map((c)=>{
                return (
                    <p style={{color:c}}>{c}</p>
                )
            })}
        </>
    )
}

export default Home