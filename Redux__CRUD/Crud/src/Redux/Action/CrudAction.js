const ADD_USER = (data) => {
    console.log(data);
    return{
        type :'adduser',
        payload : data
    }
    
}
export{ADD_USER}