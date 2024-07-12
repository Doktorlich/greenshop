import { createSlice } from "@reduxjs/toolkit";
const initialState = {
    imageDetailsProductId: 0,
    sizeParamsId: 0,
    starCurrent: null,
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
        setStarCurrent(state, action) {
            state.starCurrent = action.payload;
        },
    },
});
export const { setImageDetailsProductId, setSizeParamsId, setStarCurrent } = goodsSlice.actions;
export default goodsSlice.reducer;
