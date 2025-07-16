// redux/reducers/index.js
import { combineReducers } from 'redux';
import authReducer from './authReducer';
import destinationReducer from './destinationReducer';

const rootReducer = combineReducers({
  auth: authReducer,
  destinations: destinationReducer
});

export default rootReducer;
