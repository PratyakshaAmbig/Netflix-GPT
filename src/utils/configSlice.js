import { createSlice } from "@reduxjs/toolkit";

const configSlice = createSlice({
    name:'config',
    initialState :{
    langaugePreference : localStorage.getItem('langaugePreference')
},
    reducers:{
        toggleLanguage:(state,action)=>{
            state.langaugePreference=action.payload;
            localStorage.setItem('langaugePreference', state.langaugePreference)
        }
    }
})

export const {toggleLanguage} = configSlice.actions;

export default configSlice.reducer;