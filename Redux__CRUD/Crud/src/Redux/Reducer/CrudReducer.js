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

        default:
            return state;
            
    }
}
export default Crud