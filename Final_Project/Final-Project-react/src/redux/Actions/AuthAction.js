const REGISTER_USER = (val) => {
    return async (dispatch) => {
        try{
            const res = await fetch(`http://localhost:8080/users` , {
                method :'POST',
                headers:{
                    "contentType":"application/json"
                },
                body: JSON.stringify(val)
            })
            const authData = await res.json();
            dispatch({
                type :"register",
                payload:authData
            })
        }
        catch(err){
            console.log(err);
            return false;
        }
    }
}

export { REGISTER_USER }