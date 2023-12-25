import { configureStore } from "@reduxjs/toolkit";
import scrollSliceReducer from "./features/slices/scrollSlice";
export const store = configureStore({
    reducer:{
        scrollPosition:scrollSliceReducer
    }
})