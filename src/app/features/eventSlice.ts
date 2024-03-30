import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const URL = 'http://localhost:8000';

export const getAllEvents = createAsyncThunk(
  'events/getAllEvents',
  async () => {
    try {
      const response = await axios.get(`${URL}/events`);
      return response.data;
    } catch (error) {
      console.error(error);
    }
  }
);

const eventSlice = createSlice({
  name: 'event',
  initialState: {
    events: [],
    loading: false,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getAllEvents.pending, (state) => {
        state.loading = true;
      })
      .addCase(getAllEvents.fulfilled, (state, action) => {
        state.loading = false;
        state.events = action.payload;
      })
      .addCase(getAllEvents.rejected, (state) => {
        state.loading = false;
        state.events = [];
      });
  },
});

export default eventSlice.reducer;
