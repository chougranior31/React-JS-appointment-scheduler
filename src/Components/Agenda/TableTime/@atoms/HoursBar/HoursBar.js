import React from "react";
import { getHours } from "../../Utils";
import styles from "./Hoursbar.module.css";

function HoursBar({ header, side }) {
  const hours = getHours(["00"], "");

  return (
    <div className={styles.hoursBar}>
      <div
        className={`${styles.hourSlot} ${styles[side]} ${styles.hoursBarHeader}`}
      >
        {header}
      </div>
      {hours.map((hour, index) => (
        <div className={`${styles.hourSlot} ${styles[side]}`} key={index}>
          {hour}
        </div>
      ))}
    </div>
  );
}

export default HoursBar;
