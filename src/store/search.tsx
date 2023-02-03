import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export const SearchSlice = createSlice({
  name: "search",
  initialState: {
    doctorType: "",
    city: "",
    bimeh: "",
  },
  reducers: {
    setDoctorType(state, payload: PayloadAction<string>) {
      state.doctorType = payload.payload;
    },
    setCity(state, action: PayloadAction<string>) {
      state.city = action.payload;
    },
    setBimeh(state, action: PayloadAction<string>) {
      state.bimeh = action.payload;
    },
  },
});
export const { setDoctorType, setCity, setBimeh } = SearchSlice.actions;
export default SearchSlice.reducer;
