import React from "react";
import { Fragment } from "react";
import { Outlet } from "react-router-dom";
import Agenda from "./Agenda/Agenda";

import style from "./Dashboard.module.css";

export default function Dashboard() {
  return (
    <Fragment>
      <div className={style.dashboard}>
        <div className={style.sidebar}>sidebar</div>
        <div className={style.agenda}>
          <Agenda />
        </div>
      </div>
    </Fragment>
  );
}
