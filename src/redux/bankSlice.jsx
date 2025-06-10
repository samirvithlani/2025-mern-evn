import { createSlice } from "@reduxjs/toolkit";

const bankSlice = createSlice({
    name:"bank",
    initialState:{
        balance:0,
    },
    reducers:{
        depositAction:(state,action)=>{
            state.balance = state.balance + action.payload;
        }
    }
})

export const { depositAction } = bankSlice.actions;
export default bankSlice.reducer;