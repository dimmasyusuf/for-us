import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../app/features/counterSlice';
import eventReducer from '../app/features/eventSlice';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    event: eventReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
