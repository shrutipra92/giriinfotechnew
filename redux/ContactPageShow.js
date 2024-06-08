import { createSlice } from '@reduxjs/toolkit'

export const ContactPageShow = createSlice({
    name:"ContactPageShow",  // Here user is the name of the slice
    initialState: {
        show: false
    },
    reducers:{
        // Here we are defining reducers for the slice.
        updateContactPageShow: (state,action)=>{
            // state.show = !state.show
            if (state.show){
                state.show = false
            } else {
                state.show = true
            }
            console.log(state.show)
        }
    }
})

// Exporting the actions
export const { updateContactPageShow } = ContactPageShow.actions;
// Exporting the reducers to use in store
export default ContactPageShow.reducer