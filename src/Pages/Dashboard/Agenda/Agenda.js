import React from "react";
import { Fragment } from "react";
import { useState } from "react";
import TableTime from "../../../Components/Agenda/TableTime/TableTime";

import moment from "moment";

import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

import { getWeek } from "../../../Components/Agenda/TableTime/Utils";

import style from "./Agenda.module.css";
import DatePicker from "../../../Components/Agenda/Calendar/Calendar";

export default function Agenda() {
  const [startDate, onStartDateChange] = useState("");

  return (
    <Fragment>
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
    </Fragment>
  );
}

const slots = [
  {
    id: 9,
    created_at: "2022-11-02",
    time_slot: {
      id: 11,
      from_time: "08:00:00",
      to_time: "08:30:00",
      created_at: "2022-10-13",
      created_by: 2,
    },
  },
  {
    id: 10,
    created_at: "2022-11-05",
    time_slot: {
      id: 12,
      from_time: "14:00:00",
      to_time: "14:30:00",
      created_at: "2022-10-13",
      created_by: 1,
    },
  },
];
const appointments = [
  {
    id: 72,
    date: "2022-11-03",
    created_at: "2022-10-26T17:12:21.020034Z",
    alerte: true,
    time: {
      id: 11,
      from_time: "08:00:00",
      to_time: "08:30:00",
      created_at: "2022-10-13",
    },
    patient: {
      id: 3,
      nom: "bounedjah",
      prenom: "mouad",
      sexe: "homme",
      nom_de_naissance: "bounedjah",
      date_de_naissance: "1997-01-01",
      pays_de_naissance: "Algérie",
      ville_de_naissance: "oran",
      email: "mouad@gmail.com",
      phone_number: "0555667788",
    },
  },
  {
    id: 73,
    date: "2022-11-03",
    created_at: "2022-10-31T11:50:46.220782Z",
    alerte: false,
    time: {
      id: 10,
      from_time: "08:30:00",
      to_time: "10:30:00",
      created_at: "2022-10-13",
    },
    patient: {
      id: 3,
      nom: "bounedjah",
      prenom: "mouad",
      sexe: "homme",
      nom_de_naissance: "bounedjah",
      date_de_naissance: "1997-01-01",
      pays_de_naissance: "Algérie",
      ville_de_naissance: "oran",
      email: "mouad@gmail.com",
      phone_number: "0555667788",
    },
  },
];
