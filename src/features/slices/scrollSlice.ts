import { createSlice } from "@reduxjs/toolkit";


interface scrollToTopType{
    scrollHeight:number,
    scrollToTop:number
}

const initialState:scrollToTopType ={
    scrollHeight:0,
    scrollToTop: 0
}

const scrollToTopSlice = createSlice({
    name: 'scrollPosition',
    initialState,
    reducers:{
        scrollYPosition: (state, action)=>{
            state.scrollToTop = action.payload
        },
        scrollHeight: (state, actions)=>{
            state.scrollHeight = actions.payload
        }
    }
})


export const {scrollYPosition, scrollHeight} = scrollToTopSlice.actions

export const selectScrollPosition = (state:{scrollPosition:scrollToTopType})=>state.scrollPosition.scrollToTop
export const selectScrollHeight = (state:{scrollPosition:scrollToTopType})=>state.scrollPosition.scrollHeight

export default scrollToTopSlice.reducer