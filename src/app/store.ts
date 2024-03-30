import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../app/features/counterSlice';
import eventReducer from '../app/features/eventSlice';
import cartReducer from '../app/features/cartSlice';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    event: eventReducer,
    cart: cartReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
