import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
    name:'user',
    initialState:null,
    reducers:{
        addUser : (state,action)=>{
            // Save user data to local storage when adding a user
            localStorage.setItem('user', JSON.stringify(action.payload));
            return action.payload;
        },
        removeUser : ()=>{
             // Remove user data from local storage when logging out
            localStorage.removeItem("user");
            localStorage.removeItem("langaugePreference");
            localStorage.removeItem("showGptSearch")
            return null;
        }
    }
});

export const {addUser,removeUser} = userSlice.actions;
export default userSlice.reducer;