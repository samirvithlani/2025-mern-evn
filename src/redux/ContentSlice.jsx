import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import axios from "axios"

//const { createSlice, createAsyncThunk } = require("@reduxjs/toolkit")

const initialState={
    content:[],
    isError:null,
    isLoading:false
}

export const fetchApi = createAsyncThunk(
    "content/fetchContent",
    async()=>{
        console.log("fetch api called....",)
        const res  = await axios.get("https://node5.onrender.com/user/user")
        const data = res.data.data
        return data;
    }
)

const contentSlice = createSlice({
    name:"content",
    initialState,
    reducers:{},
    extraReducers:(builder)=>{
        builder.addCase(fetchApi.pending,(state)=>{
            state.isLoading = true
        })
        builder.addCase(fetchApi.fulfilled,(state,action)=>{
            state.isLoading = false
            state.content = action.payload
        })
        builder.addCase(fetchApi.rejected,(state,action)=>{
            state.isLoading = false
            state.isError = action.error
        })
        
    }   
})

export default contentSlice.reducer