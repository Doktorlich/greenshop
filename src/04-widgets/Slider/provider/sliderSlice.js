import { createSlice } from "@reduxjs/toolkit";
const initialState = {
    slide: 0,
};

export const sliderSlice = createSlice({
    name: "carousel",
    initialState,
    reducers: {
        setSlide(state, action) {
            state.slide = action.payload;
        },
    },
});
export const { setSlide } = sliderSlice.actions;
export default sliderSlice.reducer;
