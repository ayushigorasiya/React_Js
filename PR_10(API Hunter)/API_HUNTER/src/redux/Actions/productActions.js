import axios from "axios";

export const fetchProduct = () => async (dispatch) => {
  dispatch({ type: "PRODUCT_REQUEST" });
  try {
    const res = await axios.get(`https://dummyjson.com/products`);
    dispatch({ type: "PRODUCT_SUCCESS", payload: res.data.products }); // ✅ Array of products
  } catch (error) {
    dispatch({ type: "PRODUCT_FAIL", error: error.message });
  }
};
