import {createSlice} from '@reduxjs/toolkit';
import type {PayloadAction} from '@reduxjs/toolkit';

// Define a type for the slice state
interface IUser {
  name: string;
  email: string;
  password: string;
}

// Define the initial state using that type
const initialState: IUser = {
  name: '',
  email: '',
  password: '',
};

export const userSlice = createSlice({
  name: 'counter',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    addUser: (state, action: PayloadAction<IUser>) => {
      const {email, name, password} = action.payload;
      state.email = email;
      state.name = name;
      state.password = password;
    },
    // incrementByAmount: (state, action: PayloadAction<number>) => {
    //   state.value += action.payload;
    // },
  },
});

export const {addUser} = userSlice.actions;

export default userSlice.reducer;
