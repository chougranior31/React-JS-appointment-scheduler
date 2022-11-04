import React from "react";
import Agenda from "../../Components/Agenda/Agenda";

import style from "./Dashboard.module.css";

export default function Dashboard() {
  return (
    <>
      <div className={style.dashboard}>
        <div className={style.sidebar}>sidebar</div>
        <div className={style.agenda}>
          <Agenda appointments={appointments} slots={slots} />
        </div>
      </div>
    </>
  );
}

const slots = [
  {
    id: 9,
    created_at: "2022-11-06",
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
      from_time: "11:00:00",
      to_time: "14:30:00",
      created_at: "2022-10-13",
      created_by: 1,
    },
  },
  {
    id: 10,
    created_at: "2022-11-04",
    time_slot: {
      id: 12,
      from_time: "14:30:00",
      to_time: "14:30:00",
      created_at: "2022-10-13",
      created_by: 1,
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
  {
    id: 10,
    created_at: "2022-11-05",
    time_slot: {
      id: 12,
      from_time: "14:00:00",
      to_time: "14:00:00",
      created_at: "2022-10-13",
      created_by: 1,
    },
  },
  {
    id: 10,
    created_at: "2022-11-08",
    time_slot: {
      id: 12,
      from_time: "14:00:00",
      to_time: "15:30:00",
      created_at: "2022-10-13",
      created_by: 1,
    },
  },
];
const appointments = [
  {
    id: 72,
    date: "2022-11-05",
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
    date: "2022-11-09",
    created_at: "2022-10-31T11:50:46.220782Z",
    alerte: false,
    time: {
      id: 10,
      from_time: "08:00:00",
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
  {
    id: 73,
    date: "2022-11-09",
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

  {
    id: 73,
    date: "2022-11-07",
    created_at: "2022-10-31T11:50:46.220782Z",
    alerte: false,
    time: {
      id: 10,
      from_time: "13:00:00",
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
  {
    id: 73,
    date: "2022-11-07",
    created_at: "2022-10-31T11:50:46.220782Z",
    alerte: false,
    time: {
      id: 10,
      from_time: "13:30:00",
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
