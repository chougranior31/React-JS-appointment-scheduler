import { configureStore } from "@reduxjs/toolkit";


import agenda from './features/Agenda/AgendaSlice'

export default configureStore({
  reducer: {
    agenda,
  },
});