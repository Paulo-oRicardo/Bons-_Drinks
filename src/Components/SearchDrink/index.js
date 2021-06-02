/* eslint-disable jsx-a11y/img-redundant-alt */
import React, { useState } from "react";
import Button from "../Button";
import styles from "./search.module.scss";
const Search = () => {
  const [drinks, setDrinks] = useState([]);

  const handleClick = async (e) => {
    e.preventDefault();
    console.log(e.target.drink.value);
    const dados = await fetch(
      `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${e.target.drink.value}`
    );
    const response = await dados.json();
    console.log(response.drinks);
    setDrinks(response.drinks);
  };
  return (
    <section className={styles.contentSearch}>
      <form onSubmit={handleClick}>
        <label htmlFor="">Pesquisa</label>
        <input type="text" name="drink" />
        <Button />
      </form>
      <ul>
        {drinks ? (
          drinks.slice(0, 14).map((drink) => {
            return (
              <li key={drink.idDrink} className={styles.listDrink}>
                <img src={drink.strDrinkThumb} alt="image do drink" />
                <p>{drink.strDrink}</p>
              </li>
            );
          })
        ) : (
          <p>Error ao errar o erro errado dar error</p>
        )}
      </ul>
    </section>
  );
};

export default Search;
