import { createSlice } from "@reduxjs/toolkit";

export const SelectLanguageComShow = createSlice({
  name: "SelectLanguageComShow",

  initialState: false,

  reducers: {

    updateSelectLanguageComShowToFalse: () => {
      return false; // Toggle the state between true and false
    },
    updateSelectLanguageComShowToTrue: () => {
      return true; // Toggle the state between true and false
    },

  },
  
});

export const { updateSelectLanguageComShowToFalse, updateSelectLanguageComShowToTrue } = SelectLanguageComShow.actions;

export default SelectLanguageComShow.reducer;