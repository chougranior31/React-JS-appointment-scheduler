import * as React from "react";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { StaticDatePicker } from "@mui/x-date-pickers/StaticDatePicker";

export default function DatePicker({ startDate, onStartDateChange }) {
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <StaticDatePicker
        displayStaticWrapperAs="desktop"
        value={startDate}
        onChange={(date) => {
          onStartDateChange(date);
        }}
        renderInput={() => {}}
      />
    </LocalizationProvider>
  );
}
