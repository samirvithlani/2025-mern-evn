import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./redux/cartSlice"
import bankReducer from "./redux/bankSlice"

export const store  = configureStore({
    reducer:{
        cart:cartReducer,
        bank:bankReducer
    }
})