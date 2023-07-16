import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
  loading: false,
  userInfo: [],
  error: "",
};

const backendUrl = "http://localhost:4030";

export const userLogin = createAsyncThunk(
  "auth/login",
  async ({ email, password }, { rejectWithValue }) => {
    try {
      const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };

      const { data } = await axios.post(
        `${backendUrl}/auth/login`,
        { email, password },
        config
      );
      //option set userToken in localStorage
      return data;
    } catch (error) {
      if (error?.response && error?.response?.data?.message) {
        return rejectWithValue({
          message: "Error in fetching user login",
          error: response.data.message,
        });
      } else {
        return rejectWithValue({
          message: "Error in fetching user login",
          error: error.message,
        });
      }
    }
  }
);

const loginSlice = createSlice({
  name: "login",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(userLogin.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(userLogin.fulfilled, (state, action) => {
      state.loading = false;
      state.userInfo = action.payload;
      state.error = "";
    });
    builder.addCase(userLogin.rejected, (state, action) => {
      state.loading = false;
      state.userInfo = "";
      state.error = action.error.message;
    });
  },
});

export default loginSlice.reducer;
