import { createSlice } from "@reduxjs/toolkit";


interface activeSectionType {
   
  
        sectionName: string,
       
    
}




const initialState:activeSectionType = {
    
        sectionName:'section1',
       
    
}

const sectionSlice  = createSlice({
    name: 'activeSection',
    initialState,
    reducers: {
        activeSection: (state,action)=>{
    state.sectionName = action.payload
            
        }

    }
})


export const {activeSection} = sectionSlice.actions

export const selectActiveSection = (state:{activeSection:activeSectionType})=>state.activeSection.sectionName



export default sectionSlice.reducer