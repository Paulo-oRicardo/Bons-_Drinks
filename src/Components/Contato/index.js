import React from "react";
import Button from "../Button";
import styles from "./styles.module.scss";
export default function Contato() {
  return (
    <section className={styles.containerContato}>
      <h1>Contato</h1>
      <div className={styles.divContact}>
        <img src="./contact-pic.jpg" alt="Maquinha de escrever" />

        <form className={styles.contactForm} action="">
          <label htmlFor="">Nome:</label>
          <input type="text" />

          <label htmlFor="">E-mail:</label>
          <input type="text" />

          <label htmlFor="mensagem">Mensagem:</label>
          <textarea name="mensagem" id="" cols="20" rows="8" />

          <Button />
        </form>
      </div>
    </section>
  );
}
