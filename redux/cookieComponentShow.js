import { createSlice } from "@reduxjs/toolkit";

export const cookieComponentShow = createSlice({
  name: "cookieComponentShow",

  initialState: true,

  reducers: {

    updateCookieComponentShowToFalse: () => {
      return false; // Toggle the state between true and false
    },
    updateCookieComponentShowToTrue: () => {
      return true; // Toggle the state between true and false
    },

  },
  
});

export const { updateCookieComponentShowToFalse, updateCookieComponentShowToTrue } = cookieComponentShow.actions;

export default cookieComponentShow.reducer;