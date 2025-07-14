const initialState = { loading: false, data: [], error: null };
export default function roomReducer(state = initialState, action) {
  switch (action.type) {
    case 'ROOMS_LOADING': return { ...state, loading: true };
    case 'ROOMS_SUCCESS': return { ...state, loading: false, data: action.payload };
    case 'ROOMS_ERROR': return { ...state, loading: false, error: action.error };
    default: return state;
  }
}