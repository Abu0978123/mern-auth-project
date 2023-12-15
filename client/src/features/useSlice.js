// create slice 
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    currentUser: null,
    loading: false,
    error: false,
}

const authSlice = createSlice({
    name: 'user',
    initialState, 
    reducers: { 
        signInStart: (state) => {
            state.loading = true
        },
        signInSuccess: (state, action) => { 
            state.currentUser = action.payload
            state.loading = false
            state.error = false
        },
        signInFailure: (state, action) => {
            state.loading = false
            state.error = action.payload
        },
     }
});

export const { signInStart, signInSuccess, signInFailure } = authSlice.actions;

export default authSlice.reducer;
