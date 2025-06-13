import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./redux/cartSlice"
import bankReducer from "./redux/bankSlice"
import contentReducer from "./redux/ContentSlice"

export const store  = configureStore({
    reducer:{
        cart:cartReducer,
        bank:bankReducer,
        content:contentReducer
    }
})