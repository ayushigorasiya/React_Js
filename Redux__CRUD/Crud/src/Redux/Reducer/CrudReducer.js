let initialState = {
    user: JSON.parse(localStorage.getItem('users')) || []
}

const Crud = (state = initialState , action) => {
    switch(action.type){
        case 'adduser':
            console.log(action.payload);
            let oldrecord = [...state,  users , action.payload];
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