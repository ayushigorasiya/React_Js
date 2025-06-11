const ADD_USER = (data) => {
    console.log(data);
    return{
        type :'adduser',
        payload : data
    }   
}

const DELETE_USER = (id) => {
    console.log(id);
    
    return{
        type: 'deleteuser',
        payload : id
    }
}
export{ADD_USER  , DELETE_USER}