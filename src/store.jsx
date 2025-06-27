// import { configureStore } from "@reduxjs/toolkit";
// import cartReducer from "./redux/cartSlice"
// import bankReducer from "./redux/bankSlice"
import contentReducer from "./redux/ContentSlice"
import notificationreducer from "./redux/NotificationSlice"

// export const store  = configureStore({
//     reducer:{
//         cart:cartReducer,
//         bank:bankReducer,
//         content:contentReducer,
//         notification:notificationreducer
//     }
// })


import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./redux/cartSlice"
import bankReducer from "./redux/bankSlice"

import { combineReducers } from "@reduxjs/toolkit";
import storage from "redux-persist/lib/storage"
import { persistReducer, persistStore, PURGE } from "redux-persist";
import authReducer from "./redux/AuthSlice"
import searchReducer from "./redux/SearchSlice"
import createSagaMiddleware from "redux-saga";
import rootSaga from "./redux/sagas";


// export const store = configureStore({
//     reducer:{
//         cart:cartReducer,
//         bank:bankReducer
//     }
// })

const rootReducer = combineReducers({
    cart:cartReducer,
    bank:bankReducer,
    content:contentReducer,
    notification:notificationreducer,
    auth:authReducer,
    search:searchReducer

})

const persistConfig ={
    key:"root",
    storage,
    whitelist:['bank','auth']
}
const sagaMiddleware = createSagaMiddleware()

export const store = configureStore({
    reducer: persistReducer(persistConfig,rootReducer),
     middleware:(getDefault)=>{
      return getDefault({thunk:false}).concat(sagaMiddleware)
     } 

    // middleware: (getDefaultMiddleware) =>
    // getDefaultMiddleware({
    //   serializableCheck: {
    //     ignoredActions: [PURGE],
    //   },
    // }),

})
sagaMiddleware.run(rootSaga)
export const persistor = persistStore(store)

