import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    columnName: '',
    columnOrder: 'asc',
    filter: '',
};
const paymentSlice = createSlice({
    name: 'payment',
    initialState,
    reducers: {
        tableSortValues: (state, action) => {
            state.columnName = action.payload.columnName;
            state.columnOrder = action.payload.columnOrder;
        },
        tableFilter: (state, action) => {
            state.filter = action.payload;
        },
    },
});
export const { tableSortValues, tableFilter } = paymentSlice.actions;
export default paymentSlice.reducer;
