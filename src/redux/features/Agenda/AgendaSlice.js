import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";




export const getAppoitment = createAsyncThunk('agenda/getAppoitment',
  async (_, thunkAPI) => {
    const {rejectWithValue} = thunkAPI;
    try {
      const res = await fetch('/api/appointment/listappoitment/', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json; charset=utf',
          "Accept": "application/json",
        },
      });
      const data = await res.json();
      return data
    } catch (error) {
        return rejectWithValue(error.message);
    }
  }
)





const AgendaSlice = createSlice({
    name: 'agenda',
    initialState : {
        appoitment: [],
        agenda: '',
        isLoading: false,
        error: null,
    },
    reducers: {
    },
    extraReducers: {
      // get appoitment
    [getAppoitment.pending]: (state, action) => {
        state.isLoading = true;
        state.error = null;
    },
    [getAppoitment.fulfilled]: (state, action) => {
        state.isLoading = false;
        state.appoitment = action.payload;
    },
    [getAppoitment.rejected]: (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
    },
    },
});


// export const { somefunc } = AgendaSlice.actions;

export default AgendaSlice.reducer;



