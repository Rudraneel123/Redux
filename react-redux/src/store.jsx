// This file is where we create the Redux store, 
// which holds the state of our entire application.


import {configureStore} from '@reduxjs/toolkit'
// This file is where we create the Redux store,
//  which holds the state of our entire application.


import counterReducer from './CounterSlice';


const store=configureStore({
    reducer:{
        counter:counterReducer
        // user: userReducer, if another state is there(just an example)
    }
})
// The reducer property of this object defines the slices of the state 
// and their corresponding reducers.
//  In this case, 
// we are saying that the counter slice of the state will be managed by counterReducer.
export default store;
