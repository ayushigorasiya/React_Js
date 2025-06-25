import { createStore, combineReducers, applyMiddleware } from "redux";
import { recipeReducer } from "./Reducers/recipeReducer";
import { productReducer } from "./Reducers/productReducer";
import { thunk } from "redux-thunk";

const rootReducer = combineReducers({
  recipes: recipeReducer,
  product: productReducer,
});

const store = createStore(rootReducer, applyMiddleware(thunk));
export default store;
