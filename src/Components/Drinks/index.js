import React from "react";
import useFetch from "../../hooks/useFetch";
import styles from "./drinks.module.scss";
import { Link } from "react-router-dom";
export default function Drinks() {
  const allDrinks = useFetch();
  return (
    <section className={styles.drinks}>
      <div className={styles.header}>
        <h1>Drinks</h1>
        <Link to="search">Search</Link>
      </div>
      <div className={styles.contentDrinks}>
        {allDrinks.slice(0, 12).map((drink) => {
          return (
            <div className={styles.contentDrinksOnly} key={drink.idDrink}>
              <img
                className={styles.drinkImg}
                src={drink.strDrinkThumb}
                alt="Drinks"
              />
              <h2>{drink.strDrink}</h2>
            </div>
          );
        })}
      </div>
    </section>
  );
}
