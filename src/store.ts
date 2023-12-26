import { configureStore } from "@reduxjs/toolkit";
import scrollSliceReducer from "./features/slices/scrollSlice";
import screenSliceReducer from "./features/slices/screenSlice";
import sectionReducer from './features/slices/activeSectionSlice'

export const store = configureStore({
    reducer:{
        scrollPosition:scrollSliceReducer,
        screenMode: screenSliceReducer,
        activeSection: sectionReducer
    }
})