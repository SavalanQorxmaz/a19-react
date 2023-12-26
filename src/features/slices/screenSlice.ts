import { createSlice } from "@reduxjs/toolkit";

interface screenModeType {
    screenMode: 'mobile' | 'tablet' | 'desktop',
    screenHeight:number
}

const initialState = {
    screenMode: 'mobile',
    screenHeight:0
}

const screenSlice = createSlice({
    name: 'screenMode',
    initialState,
    reducers: {
        screenMode: (state,action)=>{
            switch(true){
               case action.payload < 768: {state.screenMode = 'mobile';}
               break;
               case action.payload >=768 && action.payload < 992: {state.screenMode = 'tablet';}
               break;
               case action.payload >=992 : {state.screenMode = 'desktop';}
               break;
            }
        },
        screenHeight: (state,actions) =>{
            state.screenHeight = actions.payload
        }
    }
})


export const {screenMode,screenHeight} = screenSlice.actions;


export const selectScreenMode = (state:{screenMode:screenModeType}) => state.screenMode.screenMode;
export const selectScreenHeight = (state:{screenMode:screenModeType}) => state.screenMode.screenHeight;

export default screenSlice.reducer