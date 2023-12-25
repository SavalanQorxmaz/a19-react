import { configureStore } from "@reduxjs/toolkit";
import scrollSliceReducer from "./features/slices/scrollSlice";
import screenSlice from "./features/slices/screenSlice";

export const store = configureStore({
    reducer:{
        scrollPosition:scrollSliceReducer,
        screenMode: screenSlice
    }
})