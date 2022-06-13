import { createSlice } from '@reduxjs/toolkit'

const initialState = {

}

const clinic = createSlice({
  name: "clinic",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase()
  }
});


export default clinic.reducer