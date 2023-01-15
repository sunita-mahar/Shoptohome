
// import {  createStore, combineReducers, applyMiddleware } from 'redux';
// import thunk from 'redux-thunk';
// import loginDetails from './reducer';
// // import { legacy_createStore as createStore } from 'redux';
// // import { legacy_createStore } from 'redux';

// const rootReducer = combineReducers({ loginDetails });

// export const Store = createStore(rootReducer , applyMiddleware(thunk));


import { createStore, combineReducers } from "redux";
import AuthReducer from "./reducer";
const RootReducer = combineReducers({
    //reducers
    AuthReducer,
});
console.log(AuthReducer)
export const store = createStore(RootReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__() );