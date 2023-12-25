import { createSlice } from "@reduxjs/toolkit";

interface screenModeType {
    screenMode: 'mobile' | 'tablet' | 'desktop'
}

const initialState = {
    screenMode: 'mobile'
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
        }
    }
})


export const {screenMode} = screenSlice.actions;


export const selectScreenMode = (state:{screenMode:screenModeType}) => state.screenMode.screenMode;

export default screenSlice.reducer