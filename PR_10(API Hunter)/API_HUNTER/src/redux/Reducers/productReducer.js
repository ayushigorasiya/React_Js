const initialState = {
  loading: false,
  data: [], // ✅ Must be an array to support .map()
  error: null,
};

export const productReducer = (state = initialState, action) => {
  switch (action.type) {
    case "PRODUCT_REQUEST":
      return { ...state, loading: true };
    case "PRODUCT_SUCCESS":
      return { ...state, loading: false, data: action.payload };
    case "PRODUCT_FAIL":
      return { ...state, loading: false, error: action.error };
    default:
      return state;
  }
};
