const initialState = { loading: false, data: [], error: null };
export default function reservationReducer(state = initialState, action) {
  switch (action.type) {
    case 'RES_LOADING': return { ...state, loading: true };
    case 'RES_SUCCESS': return { ...state, loading: false, data: action.payload };
    case 'ADD_RESERVATION': return { ...state, data: [...state.data, action.payload] };
    case 'UPDATE_RESERVATION': return {
      ...state,
      data: state.data.map(r => r.id === action.payload.id ? action.payload : r)
    };
    case 'DELETE_RESERVATION': return {
      ...state,
      data: state.data.filter(r => r.id !== action.payload)
    };
    case 'RES_ERROR': return { ...state, loading: false, error: action.error };
    default: return state;
  }
}