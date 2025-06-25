export const fetchRecipes = () => async (dispatch) => {
  dispatch({ type: "RECIPE_REQUEST" });
  try {
    const res = await fetch(`https://dummyjson.com/recipes`);
    const data = await res.json();
    dispatch({ type: "RECIPE_SUCCESS", payload: data.recipes });
  } catch (error) {
    dispatch({ type: "RECIPE_FAIL", error: error.message });
  }
};
