import React from "react";
import styles from "./styles.module.scss";
export default function Button(props) {
  const { clickButton } = props;
  return (
    <button className={styles.neonButton} onClick={clickButton}>
      Enviar
    </button>
  );
}
