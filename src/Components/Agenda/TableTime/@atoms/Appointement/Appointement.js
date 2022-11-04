import React from "react";
import styles from "./Appointment.module.css";

function Appointment({ appointment }) {
  return (
    <div
      className={`${styles.appointment} ${
        appointment.time.from_time.slice(3, 4) == 0 && styles.borderBottom
      }`}
    >
      <span>{appointment.time.from_time.slice(0, 5)}</span>
      <span>Mm.m Bounedjah</span>
      <span>Urgence</span>
    </div>
  );
}

export default Appointment;
