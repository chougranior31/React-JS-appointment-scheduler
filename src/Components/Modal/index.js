import React, { useState, useRef } from "react";

import style from "./modal.module.css";
import closeIcon from "../../assets/icons/close.svg";
import useOutSideClick from "../../utils/outside-click";

export default function useModal() {
  const [isOpen, open] = useState(false);
  const popover = useRef();
  useOutSideClick(popover, () => open(false));

  const Modal = ({ children }) =>
    isOpen ? (
      <div className={style.overlay}>
        <div ref={popover} className={style.modalContainer}>
          <img
            className={style.closeBtn}
            alt="close "
            src={closeIcon}
            onClick={() => open(false)}
          />
          <div className={style.modalContent}>{children}</div>
        </div>
      </div>
    ) : (
      <div />
    );
  return { Modal, open: () => open(true) };
}
