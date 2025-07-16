// redux/reducers/destinationReducer.js
const initialState = {
  loading: false,
  data: [],
  error: null,
};

export default function destinationReducer(state = initialState, action) {
  switch (action.type) {
    case 'DESTINATIONS_LOADING':
      return { ...state, loading: true };
    case 'DESTINATIONS_SUCCESS':
      return { loading: false, data: action.payload, error: null };
    case 'DESTINATIONS_ERROR':
      return { loading: false, data: [], error: action.error };
    case 'ADD_DESTINATION':
      return { ...state, data: [...state.data, action.payload] };
    case 'DELETE_DESTINATION':
      return { ...state, data: state.data.filter(dest => dest.id !== action.payload) };
    default:
      return state;
  }
}
