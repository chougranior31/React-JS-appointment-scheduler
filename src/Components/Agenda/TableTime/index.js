import React, { useState, useEffect } from "react";
import { normalize, getWeek } from "./Utils";
import styles from "./TableTime.module.css";
import HoursBar from "./@atoms/hours-bar";
import Day from "./@atoms/day";

function TableTime({ appointments, slots, startDate }) {
  // eslint-disable-next-line no-undef
  const [week, onWeekChange] = useState([]);

  useEffect(() => {
    onWeekChange(getWeek(normalize(appointments, slots), startDate));
  }, [appointments, slots, startDate]);

  const Header = (
    <>
      <p>EST</p>
      <p>GMT-5</p>
    </>
  );

  return (
    <div className={styles.container}>
      <HoursBar header={" "} side="left" />
      {week.map((day, index) => (
        <Day day={day} key={index} />
      ))}
      <HoursBar header={Header} side="right" />
    </div>
  );
}

export default TableTime;
{
  /* <Day day={day} key={index} /> */
}
