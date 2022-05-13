import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../../index";

export type TimerState = {

};

const initialState: TimerState = {

};

export const timerSlice = createSlice({
  name: "timer",
  initialState,
  reducers: {
  }
});

export const selectTimer = (state: RootState) => state.timer;
