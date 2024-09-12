import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    themeMode: 'dark',
    
};
const globalSlice = createSlice({
    name: 'global',
    initialState,
    reducers: {
        themeChange: (state, action) => {
            state.themeMode = action.payload;
        },
       
    },
});
export const {
    themeChange,
  
} = globalSlice.actions;
export default globalSlice.reducer;
