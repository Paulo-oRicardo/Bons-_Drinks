import React from "react";
import styles from "./modal.module.scss";
const Modal = (props) => {
  const { className, modalRef } = props;
  return (
    <div ref={modalRef} className={(`${className}`, styles.contentModal)}>
      <h1>Fui clicado aí</h1>
    </div>
  );
};
export default Modal;
