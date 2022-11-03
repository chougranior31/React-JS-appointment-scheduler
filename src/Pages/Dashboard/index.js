import React from "react";
import Agenda from "./Agenda";

import style from "./dashboard.module.css";

export default function Dashboard() {
  return (
    <>
      <div className={style.dashboard}>
        <div className={style.sidebar}>sidebar</div>
        <div className={style.agenda}>
          <Agenda />
        </div>
      </div>
    </>
  );
}
