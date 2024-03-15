import { createStore, combineReducers } from 'redux';
import themeReducer from './theme'; 

const rootReducer = combineReducers({
  theme: themeReducer
});

const initialState = {};

const store = createStore(rootReducer, initialState);

export default store;