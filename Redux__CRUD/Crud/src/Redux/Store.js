import rootCrud from "./Reducer/CrudReducer";
import { createStore } from "redux";
const store = createStore(rootCrud) 

export default store