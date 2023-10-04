import { configureStore } from "@reduxjs/toolkit";
import { userSlice } from "../Redux/UserSlice";


export default configureStore({
    reducer: {
        user:userSlice.reducer,
        loggedIn:userSlice.reducer,
    }
})
// export default configureStore({
//     reducer: {
//       user: userReducer, // Make sure the reducer key matches the slice name
//     },
//   });