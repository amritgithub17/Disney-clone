import { createSlice } from "@reduxjs/toolkit";
const initialStateValue = {name : "", email : "" , photo: ""}

export const userSLice = createSlice({
    name : "user",
    initialState : {value : initialStateValue },
    reducers : 
    {
        addUser : (state,action) =>{
            state.value = action.payload;
        },
        addUser : (state,action) =>{
            state.value = action.payload;
        },
        signOutUser : (state) =>{
            state.value = initialStateValue
        }


    }
})

export const {addUser,signOutUser,addAdmin} = userSLice.actions;
export default userSLice.reducer;