const initialState = {
  loading: false,
  data: [],
  error: null,
};

export const recipeReducer = (state = initialState, action) => {
  switch (action.type) {
    case "RECIPE_REQUEST":
      return { ...state, loading: true };
    case "RECIPE_SUCCESS":
      return { ...state, loading: false, data: action.payload };
    case "RECIPE_FAIL":
      return { ...state, loading: false, error: action.error };
    default:
      return state;
  }
};
