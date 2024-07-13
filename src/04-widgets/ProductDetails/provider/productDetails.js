import { createSlice } from "@reduxjs/toolkit";
const initialState = {
    imageDetailsProductId: 0,
    sizeParamsId: 0,
    starCurrent: null,
    activeTab: 0,
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
        setActiveTab(state, action) {
            state.activeTab = action.payload;
        },
    },
});
export const { setImageDetailsProductId, setSizeParamsId, setStarCurrent, setActiveTab } = goodsSlice.actions;
export default goodsSlice.reducer;
