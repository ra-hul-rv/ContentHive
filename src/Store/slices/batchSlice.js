import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    columnName: '',
    columnOrder: 'asc',
    filter: '',
};
const batchSlice = createSlice({
    name: 'batches',
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
export const { tableSortValues, tableFilter } = batchSlice.actions;
export default batchSlice.reducer;
