const GET_USER = () => {
    return async (dispatch) => {
        try {
            let data = await fetch(`https://dummyjson.com/users`)
            let res = await data.json()
            console.log(res.data);
            
        }catch(err){
            console.log(err);
            return false;
        }
    }
}
export default GET_USER;