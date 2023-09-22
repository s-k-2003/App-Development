import { configureStore } from "@reduxjs/toolkit";
import { userSlice } from "../Redux/UserSlice";


export default configureStore({
    reducer: {
        user:userSlice.reducer,
    }
})