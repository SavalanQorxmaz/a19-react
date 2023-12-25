import { createSlice } from "@reduxjs/toolkit";


interface scrollToTopType{
    scrollToTop:number
}

const initialState:scrollToTopType ={
    scrollToTop: 0
}

const scrollToTopSlice = createSlice({
    name: 'scrollPosition',
    initialState,
    reducers:{
        scrollYPosition: (state, action)=>{
            state.scrollToTop = action.payload
        }
    }
})


export const {scrollYPosition} = scrollToTopSlice.actions

export const selectScrollPosition = (state:{scrollPosition:scrollToTopType})=>state.scrollPosition.scrollToTop

export default scrollToTopSlice.reducer