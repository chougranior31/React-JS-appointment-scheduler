import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";







const AgendaSlice = createSlice({
    name: 'agenda',
    initialState : {
        agenda: '',
        isLoading: false,
        error: null,
    },
    reducers: {
    },
    extraReducers: {
    },
});


// export const { somefunc } = AgendaSlice.actions;

export default AgendaSlice.reducer;



