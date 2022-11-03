import React from "react";
import styles from "./emptyslot.module.css";

function EmptySlot({ slot }) {
  return (
    <div
      className={`${styles.emptySlot} ${
        slot.start_time.slice(3, 4) == 0 && styles.borderBottom
      }`}
      onClick={() => console.log({ slot })}
    />
  );
}

export default EmptySlot;
