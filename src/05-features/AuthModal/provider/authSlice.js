import { createSlice } from "@reduxjs/toolkit";
const initialState = {
    valueMail: "",
    valuePassword: "",
};

const authSlice = createSlice({
    name: "authSlice",
    initialState,
    reducers: {
        setValueMail(state, action) {
            state.valueMail = action.payload;
        },
        setValuePassword(state, action) {
            state.valuePassword = action.payload;
        },
    },
});

export const { setValueMail, setValuePassword } = authSlice.actions;
export default authSlice.reducer;
