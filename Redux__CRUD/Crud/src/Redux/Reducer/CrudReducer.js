let initialState = {
    users: JSON.parse(localStorage.getItem('users')) || []
}

const Crud = (state = initialState , action) => {
    switch(action.type){
        
        case 'adduser':
            let oldrecord = [...state.users , action.payload]
            localStorage.setItem('users' , JSON.stringify(oldrecord));
            return{
                ...state,
                users:oldrecord
            }
        case 'deleteuser':
            console.log(action.payload);

            let deletedata = state.users.filter(val => val.userid != action.payload)
            console.log(deletedata);
            
            localStorage.setItem('users' , JSON.stringify('deletedata'));

            return{
                ...state,
                users:deletedata
            }
            
        default:
            return state;
            
    }
}
export default Crud