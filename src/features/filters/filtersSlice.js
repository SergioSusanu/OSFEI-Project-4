import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    activeFilter:'all',
    settingFilterUI:'buttons'
}

export const filtersSlice = createSlice({
    name:"filters",
    initialState,
    reducers:{
        setActiveFilter: (state, action) =>{
            state.activeFilter = action.payload
        },
        setSettingFilterUI:(state, action) =>{
            state.settingFilterUI = action.payload
        }
    }
})

export const {setActiveFilter, setSettingFilterUI} = filtersSlice.actions
export default filtersSlice.reducer