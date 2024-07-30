import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    activeModal: false,
};

export const productCheckoutFormSlice = createSlice({
    name: "productCheckoutFormSlice ",
    initialState,
    reducers: {
        setActiveModal(state, action) {
            state.activeModal = action.payload;
        },
    },
});
export const { setActiveModal } = productCheckoutFormSlice.actions;
export default productCheckoutFormSlice.reducer;
