const initialState = { isAuthenticated: false };
export default function authReducer(state = initialState, action) {
  switch (action.type) {
    case 'LOGIN': return { isAuthenticated: true };
    case 'LOGOUT': return { isAuthenticated: false };
    default: return state;
  }
}