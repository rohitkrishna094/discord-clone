import { combineReducers } from 'redux';
import mockReducer from './mockReducer';

const rootReducer = combineReducers({
  mock: mockReducer
});

export default rootReducer;
