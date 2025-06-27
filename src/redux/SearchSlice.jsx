import { createSlice } from "@reduxjs/toolkit"


const searchSlice = createSlice({
    name:"search",
    initialState:{
        term:"",
        triggred:""
    },
    reducers:{
        searchTerm:(state,action)=>{
            state.term = action.payload
        },
        searchTriggered:(state,action)=>{
            state.triggred = action.payload
        }
    }
})
export const {searchTerm,searchTriggered} = searchSlice.actions
export default searchSlice.reducer