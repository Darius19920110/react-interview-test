import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const API_URL = "https://jsonplaceholder.typicode.com/users";

// TODO: Complete this async thunk to fetch users from API_URL
// It should return the response data as JSON
export const fetchUsers = createAsyncThunk("users/fetchUsers", async () => {
  // your code here
});

const usersSlice = createSlice({
  name: "users",
  initialState: {
    list: [],
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchUsers.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchUsers.fulfilled, (state, action) => {
        state.loading = false;
        state.list = action.payload;
      })
      .addCase(fetchUsers.rejected, (state) => {
        state.loading = false;
        state.error = "Something went wrong.";
      });
  },
});

export default usersSlice.reducer;
