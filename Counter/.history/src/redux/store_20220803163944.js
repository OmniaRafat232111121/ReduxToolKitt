
import { configureStore } from '@reduxjs/toolkit';
//import { createStore,applyMiddleware } from 'redux'
import reduxThunk from'redux-thunk'
import reducers from './reducers';
const enhancer=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__

const store= configureStore({
    reducers:{
        count
    }
});
export default store;