import React from "react";
import { useState } from "react";
import TableTime from "./TableTime/TableTime";
import style from "./Agenda.module.css";
import DatePicker from "./Calendar/Calendar";

export default function Agenda({ appointments, slots }) {
  const [startDate, onStartDateChange] = useState("");

  return (
    <>
      <div className={style.agendaContainer}>
        <div className={style.calendarContainer}>
          <DatePicker
            currentDate={startDate}
            onStartDateChange={onStartDateChange}
          />
        </div>
        <div className={style.TabelTimeContainer}>
          <TableTime
            appointments={appointments}
            slots={slots}
            startDate={startDate}
          />
        </div>
      </div>
    </>
  );
}
