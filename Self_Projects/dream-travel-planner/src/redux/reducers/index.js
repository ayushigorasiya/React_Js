import { combineReducers } from 'redux';
import destinationReducer from './destinationReducer';
import authReducer from './authReducer';

const rootReducer = combineReducers({
  destinations: destinationReducer,
  auth: authReducer,
});

export default rootReducer;
