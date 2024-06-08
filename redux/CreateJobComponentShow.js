import { createSlice } from "@reduxjs/toolkit";

export const CreateJobComponentShow = createSlice({
  name: "CreateJobComponentShow",

  initialState: false,

  reducers: {

    updateCreateJobComponentShowToFalse: () => {
      return false; // Toggle the state between true and false
    },
    updateCreateJobComponentShowToTrue: () => {
      return true; // Toggle the state between true and false
    },

  },
  
});

export const { updateCreateJobComponentShowToFalse, updateCreateJobComponentShowToTrue } = CreateJobComponentShow.actions;

export default CreateJobComponentShow.reducer;