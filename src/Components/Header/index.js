import React from "react";
import styles from "./style.module.scss";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className={styles.Header}>
      <nav>
        <ul className={styles.Ul}>
          <li>
            <Link to="drinks">Drinks</Link>
          </li>
          <li>
            <Link to="sobre">Sobre Nós</Link>
          </li>
          <li>
            <Link to="/">
              <h1>Bons Drinks</h1>
            </Link>
          </li>
          <li>
            <Link to="nosso_time">Nosso</Link>
          </li>
          <li>
            <Link to="contato">Contato</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
