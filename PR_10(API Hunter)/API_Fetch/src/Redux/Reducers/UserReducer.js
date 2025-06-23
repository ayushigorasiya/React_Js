let initialState = {
    user:[]
}
const userReducer = (state = initialState , action) => {
    switch (action.type) {
        case 'getUser':
            return{
                ...state ,
                user:action.payload
            }
    }
}

export default userReducer;