import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name : "cart",  // slice ka naam 
    initialState :[], // starting state empty array

    reducers :{
        AddItems : (state , action) =>{
            state.push(action.payload)
        },
        RemoveItem :(state , action)=>{
            return state.filter((item)=>item.id!== action.payload)
        }
    }
})

export const {AddItems, RemoveItem} = cartSlice.actions
export default cartSlice.reducer;