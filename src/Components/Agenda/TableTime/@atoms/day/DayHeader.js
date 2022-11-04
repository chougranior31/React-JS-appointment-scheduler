import React from "react";
import style from "./Day.module.css";

function DayHeader({ day }) {
  return (
    <div className={style.day}>
      <p className={style.name}>
        {new Date(day?.date).toLocaleDateString("fr-us", {
          weekday: "short",
        })}
      </p>
      <p className={style.number}>{new Date(day?.date).getDate()}</p>
    </div>
  );
}

export default DayHeader;
