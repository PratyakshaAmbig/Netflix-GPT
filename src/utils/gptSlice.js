import { createSlice } from "@reduxjs/toolkit";

// Create slice is a function which will take the object and object is the slice of the configuaration

// Value in localStorage       Result of === "true"           Final Redux state
//  "true"                        true                           true
//  "false"                       false                          false
//   null                         false                          false
const gptSlice = createSlice({
    name:'gpt',
    initialState :{
    showGptSearch :localStorage.getItem('showGptSearch') === 'true'
},
    reducers:{
        toggleGptSearchView : (state)=>{
            state.showGptSearch=!state.showGptSearch
            localStorage.setItem('showGptSearch',state.showGptSearch);
        }
    }
})

export const {toggleGptSearchView} = gptSlice.actions

export default gptSlice.reducer