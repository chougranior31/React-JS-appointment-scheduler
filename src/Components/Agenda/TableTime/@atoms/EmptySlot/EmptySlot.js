import React from "react";
import useModal from "../../../../Modal/Modal";
import styles from "./Emptyslot.module.css";

function EmptySlot({ slot }) {
  const { Modal, open } = useModal();

  return (
    <>
      <Modal>put your form here : {slot.start_time}</Modal>
      <div
        className={`${styles.emptySlot} ${
          slot.start_time.slice(3, 4) == 0 && styles.borderBottom
        }`}
        onClick={open}
      />
    </>
  );
}

export default EmptySlot;
