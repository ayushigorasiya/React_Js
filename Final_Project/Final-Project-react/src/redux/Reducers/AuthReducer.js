let initialState ={
    users :[],
    err :null
}

const AuthReducer = (state = initialState  , action) => {
    switch(action.type) {
        case 'register':
            return{
                ...state,
                users:[...state.users , action.payload]
            } 
        
            default:
                return state;
    }
}

export default AuthReducer