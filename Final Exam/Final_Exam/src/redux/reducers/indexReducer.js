import { combineReducers } from "redux";
import { roomReducer } from './roomReducer';
import { reservationReducer } from './reservationReducer';
const rootReducer = combineReducers({
    room : roomReducer,
    reservation : reservationReducer
})

export default rootReducer ;