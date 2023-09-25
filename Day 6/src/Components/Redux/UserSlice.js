import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
    name :"user",
    initialState:{
        user:null,
        loggedIn:false,
    },

    reducers:{
        login:(state,action) =>{
            state.user = action.payload;
            state.loggedIn = true;
        },
        logout: (state) => {
            state.user =null;
            state.loggedIn=false;
        },

    },

});

export  const {login ,logout} = userSlice.actions;
export const selectUser = (state) => ({
    user: state.user.user,
    loggedIn: state.user.loggedIn,
});

export default userSlice.reducer;