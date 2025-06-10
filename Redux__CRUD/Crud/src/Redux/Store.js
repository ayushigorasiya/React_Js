import rootCounter from "./Reducer/CrudReducer";
import { createStore } from "redux";
const store = createStore(rootCounter) 

export default store