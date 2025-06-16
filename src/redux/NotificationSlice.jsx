import { createSlice } from "@reduxjs/toolkit";

const notificationSlice = createSlice({
    name:"notifications",
    initialState:{
        notifications:[]
    },
    reducers:{
        //actions
        //state --> initialState
        //action -->1)type,payload
        //payload --> notifaction call -->data
        addNotification:(state,action)=>{
            //console.log(state)
            //console.log(action)
            //notification array
            state.notifications.push(action.payload)
        }
    }
})

export const {addNotification} = notificationSlice.actions
export default notificationSlice.reducer