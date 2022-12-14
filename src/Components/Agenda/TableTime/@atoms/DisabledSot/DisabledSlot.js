import React from "react";
import useModal from "../../../../Modal/Modal";
import styles from "./Disabledslot.module.css";

function DisabledSlot({ slot }) {
  const { Modal, open } = useModal();

  return (
    <>
      <Modal>content : {slot.time.from_time}</Modal>
      <div
        className={`${styles.disabledSlot} ${
          slot.time.from_time.slice(3, 4) == 0 && styles.borderBottom
        }`}
        onClick={open}
      />
    </>
  );
}

export default DisabledSlot;
