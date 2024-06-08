import { createSlice } from "@reduxjs/toolkit";

export const HireComponentShow = createSlice({
  name: "HireComponentShow",

  initialState: false,

  reducers: {

    updateHireComponentShowToFalse: () => {
      return false; // Toggle the state between true and false
    },
    updateHireComponentShowToTrue: () => {
      return true; // Toggle the state between true and false
    },

  },
  
});

export const { updateHireComponentShowToFalse, updateHireComponentShowToTrue } = HireComponentShow.actions;

export default HireComponentShow.reducer;