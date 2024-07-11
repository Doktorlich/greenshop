import { createSlice } from "@reduxjs/toolkit";
const initialState = {
    imageDetailsProductId: 0,
    sizeParamsId: 0,
};

export const goodsSlice = createSlice({
    name: "productDetails",
    initialState,
    reducers: {
        setImageDetailsProductId(state, action) {
            state.imageDetailsProductId = action.payload;
        },
        setSizeParamsId(state, action) {
            state.sizeParamsId = action.payload;
        },
    },
});
export const { setImageDetailsProductId, setSizeParamsId } = goodsSlice.actions;
export default goodsSlice.reducer;
