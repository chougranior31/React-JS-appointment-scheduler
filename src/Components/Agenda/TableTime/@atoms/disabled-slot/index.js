import React from "react";
import styles from "./disabledslot.module.css";

function DisabledSlot({ slot }) {
  return (
    <div
      className={`${styles.disabledSlot} ${
        slot.time.from_time.slice(3, 4) == 0 && styles.borderBottom
      }`}
      onClick={() => console.log({ slot })}
    />
  );
}

export default DisabledSlot;
