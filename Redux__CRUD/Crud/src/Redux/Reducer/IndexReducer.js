import Crud from "./CrudReducer";
import { combineReducers  } from "redux";
const rootCounter = combineReducers ({ Crud })

export default rootCounter