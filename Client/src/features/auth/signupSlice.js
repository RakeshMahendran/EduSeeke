 import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";


const initialState = {
    loading: false,
    error: null,
    message:''
}

export const signup = createAsyncThunk('auth/signup',async(userData, {rejectWithValue}) =>{
    try {
     const response = await axios.post(
       "http://localhost:4030/auth/signup",
       userData
     );
     return response.data
    }
    catch (error){
     return rejectWithValue(error.response.data)
    }
})

const signupSlice = createSlice({
  name: "signup",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(signup.pending, (state) => {
        state.loading = true;
        state.error = null;
        state.message = "";
      })
      .addCase(signup.fulfilled, (state, action) => {
        state.loading = false;
        state.message = action.payload.message;
      })
      .addCase(signup.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload.message;
      });
  },
});

export const { reducer: signupReducer } = signupSlice;
export default signupSlice;