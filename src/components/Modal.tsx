import React from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Modal.module.css";

function Modal({ children }: { children: React.ReactNode }) {
  const navigate = useNavigate();

  function closeHandler() {
    navigate("..");
  }

  return (
    <>
      <div className={styles.backdrop} onClick={closeHandler}>
        <dialog
          open
          className={styles.modal}
          onClick={(e) => e.stopPropagation()}
        >
          {children}
        </dialog>
      </div>
    </>
  );
}

export default Modal;
