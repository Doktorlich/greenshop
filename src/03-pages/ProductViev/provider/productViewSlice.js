import { createSlice } from "@reduxjs/toolkit";
const initialState = {
    valueData: [],
};

export const goodsSlice = createSlice({
    name: "productView",
    initialState,
    reducers: {
        setValueData(state, action) {
            state.valueData = action.payload;
        },
    },
});
export const { setValueData } = goodsSlice.actions;
export default goodsSlice.reducer;
