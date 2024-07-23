import { configureStore } from "@reduxjs/toolkit";

//import the cartReducer from the slice
import cartReducer from "./cartSlice";

const appStore = configureStore({
    //reducer of the appStore
    reducer : {
        //small reducer from slices
        cart : cartReducer,
    },
});

export default appStore;