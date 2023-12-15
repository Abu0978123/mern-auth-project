// redux store 
import {configureStore} from '@reduxjs/toolkit';
import userReducer from '../features/useSlice.js';

export const store = configureStore({
    reducer: {
         user: userReducer
    },
    middleware: (getDefaultMiddleware) =>  getDefaultMiddleware({
        serializableCheck : false
    })
})
