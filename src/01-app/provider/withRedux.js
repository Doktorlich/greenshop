import { configureStore } from "@reduxjs/toolkit";
import sidebar from "../../04-widgets/Sidebar/features/sidebarSlice";
import sorting from "../../04-widgets/Sorting/features/sortingSlice";
import pizzaSlice from "../../07-shared/api/store/apiSlice";
export const store = configureStore({
    reducer: {
        sidebar,
        sorting,
        pizzaSlice,
    },
});
