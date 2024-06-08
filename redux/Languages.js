import { createSlice } from '@reduxjs/toolkit'

export const Languages = createSlice({
    name:"Languages",  // Here user is the name of the slice
    initialState: {
        activeLanguage: "English"
    },
    reducers:{
        // Here we are defining reducers for the slice.
        updateLanguages: (state,action)=>{
            state.activeLanguage = action.payload
        }
    }
})

// Exporting the actions
export const { updateLanguages } = Languages.actions;
// Exporting the reducers to use in store
export default Languages.reducer