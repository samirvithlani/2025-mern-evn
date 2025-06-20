import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
    name:"auth",
    initialState:{
        id:undefined
    },
    reducers:{
        addIdToStore:(state,action)=>{
            state.id = action.payload
        }
    }
})

export const {addIdToStore}=authSlice.actions
export default authSlice.reducer