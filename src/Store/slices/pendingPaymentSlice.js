import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    columnName: '',
    columnOrder: 'asc',
    filter: '',
};
const pendingPaymentSlice = createSlice({
    name: 'pendingPayment',
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
export const { tableSortValues, tableFilter } = pendingPaymentSlice.actions;
export default pendingPaymentSlice.reducer;
