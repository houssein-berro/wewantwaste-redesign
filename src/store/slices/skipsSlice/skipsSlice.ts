import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "../../store";

import { Skip, initialSkipsState } from "../../../constants/skips";

const skipsSlice = createSlice({
  name: "skips",
  initialState: initialSkipsState,
  reducers: {
    fetchSkipsStart(state) {
      state.loading = true;
      state.error = null;
    },
    fetchSkipsSuccess(state, action: PayloadAction<Skip[]>) {
      state.items = action.payload;
      state.loading = false;
    },
    fetchSkipsFailure(state, action: PayloadAction<string>) {
      state.loading = false;
      state.error = action.payload;
    },
    clearSkips(state) {
      state.items = [];
      state.loading = false;
      state.error = null;
    },
  },
});

export const {
  fetchSkipsStart,
  fetchSkipsSuccess,
  fetchSkipsFailure,
  clearSkips,
} = skipsSlice.actions;

export default skipsSlice.reducer;