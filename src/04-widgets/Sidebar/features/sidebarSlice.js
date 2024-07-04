import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    rangeScaleFirst: 0,
    rangeScaleSecond: 500,
    valueId: null,
};

const sidebarSlice = createSlice({
    name: "sidebar",
    initialState,
    reducers: {
        setRangeScaleFirst(state, action) {
            state.rangeScaleFirst = action.payload;
        },
        setRangeScaleSecond(state, action) {
            state.rangeScaleSecond = action.payload;
        },
        setValueId(state, action) {
            state.valueId = action.payload;
        },
    },
});

export const { setRangeScaleFirst, setRangeScaleSecond, setValueId } = sidebarSlice.actions;
export default sidebarSlice.reducer;
