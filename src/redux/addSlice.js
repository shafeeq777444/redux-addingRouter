import { createSlice } from "@reduxjs/toolkit";
const addSlice=createSlice({
    name:"add",
    initialState:{
        value1:0,
        value2:0
    },
    reducers:{
        setValue1:(prestate,action)=>{
            prestate.value1=action.payload;
        },
        setValue2:(prestate,action)=>{
            prestate.value2=action.payload;
        }

    }
})
export const {setValue1,setValue2}=addSlice.actions
export default addSlice.reducer