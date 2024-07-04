import { configureStore } from "@reduxjs/toolkit";
import sidebar from "../../04-widgets/Sidebar/features/sidebarSlice";
export const store = configureStore({
    reducer: {
        sidebar,
    },
});
