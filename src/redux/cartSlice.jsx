import { createSlice } from "@reduxjs/toolkit";

//action --> reducer --> rootReduce --
//coomponent --> container
const cartSlice = createSlice({
    name:"cart",
    initialState:{
        cart:[]
    },
    reducers:{
        //actoins... : js function
        addToCart:(state,action)=>{
            //state --> initalState
            //action -> type -> "cart/addToCart"
            //payload===>{object} --> 100,100
            console.log("action", action);
            console.log("state", state.cart);
            state.cart.push(action.payload); //push the payload to the cart array
        }
    }
})

export const {addToCart} = cartSlice.actions // component
export default cartSlice.reducer // store...