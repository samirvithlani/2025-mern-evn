import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./redux/cartSlice"
import bankReducer from "./redux/bankSlice"
import contentReducer from "./redux/ContentSlice"
import notificationreducer from "./redux/NotificationSlice"

export const store  = configureStore({
    reducer:{
        cart:cartReducer,
        bank:bankReducer,
        content:contentReducer,
        notification:notificationreducer
    }
})