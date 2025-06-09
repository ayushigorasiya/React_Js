import counter from "./CounterReducers";
import { combineReducers  } from "redux";
const rootCounter = combineReducers ({ counter })

export default rootCounter