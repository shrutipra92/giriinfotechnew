import { createSlice } from '@reduxjs/toolkit'

export const NavbarSubItemsShow = createSlice({
    name:"NavbarSubItemsShow",  // Here user is the name of the slice
    initialState: 0,
    reducers:{
        // Here we are defining reducers for the slice.
        disableNavbarSubItemsShow: (state,action)=>{
            return state+=1
        }
    }
})

// Exporting the actions
export const { disableNavbarSubItemsShow } = NavbarSubItemsShow.actions;
// Exporting the reducers to use in store
export default NavbarSubItemsShow.reducer