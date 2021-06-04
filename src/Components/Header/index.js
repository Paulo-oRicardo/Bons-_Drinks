import React from "react";
import styles from "./style.module.scss";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className={styles.Header}>
      <Link to="/">
        <h1>Bons Drinks</h1>
      </Link>
      <nav className={styles.nav}>
        <ul className={styles.Ul}>
          <li>
            <Link to="drinks">Drinks</Link>
          </li>
          <li>
            <Link to="sobre">About Us</Link>
          </li>
          <li>
            <Link to="nosso_time">Our Team</Link>
          </li>
          <li>
            <Link to="contato">Contact</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
