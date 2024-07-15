import { createSlice } from "@reduxjs/toolkit";
const initialState = {
    showPass: false,
    modalTab: true,
    activeModal: false,
};

const headerSlice = createSlice({
    name: "headerSlice",
    initialState,
    reducers: {
        setShowPass(state, action) {
            state.showPass = action.payload;
        },
        setModalTab(state, action) {
            state.modalTab = action.payload;
        },
        setActiveModal(state, action) {
            state.activeModal = action.payload;
        },
    },
});

export const { setShowPass, setModalTab, setActiveModal } = headerSlice.actions;
export default headerSlice.reducer;
