import React, { useState } from "react";
import styles from "./style.module.scss";
import { Link } from "react-router-dom";

export default function Header() {
  const [modalResponsive, setModalResponsive] = useState(true);

  return (
    <header className={styles.Header}>
      <Link to="/">
        <h1>Bons Drinks</h1>
      </Link>

      <button
        className={styles.buttonMobile}
        onClick={() => setModalResponsive(!modalResponsive)}
      >
        <img src="./menu.svg" alt="" />
      </button>

      <nav className={modalResponsive ? styles.navDesktop : styles.navMobile}>
        <ul className={styles.Ul}>
          <li>
            <Link to="drinks" onClick={() => setModalResponsive(true)}>
              Drinks
            </Link>
          </li>
          <li>
            <Link to="sobre" onClick={() => setModalResponsive(true)}>
              About Us
            </Link>
          </li>
          <li>
            <Link to="nosso_time" onClick={() => setModalResponsive(true)}>
              Our Team
            </Link>
          </li>
          <li>
            <Link to="contato" onClick={() => setModalResponsive(true)}>
              Contact
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
