import React from "react";
import styles from "./modal.module.scss";
const Modal = ({ dados, switchDrink }) => {
  const getIngredients = (drink) => {
    const drinkEntries = Object.entries(drink);
    return drinkEntries
      .filter(
        ([key, value]) =>
          key.startsWith("strIngredient") && value && value.trim()
      )
      .map(([key, value]) => value)
      .join(", ");
  };

  return (
    <section className={styles.container}>
      <div className={styles.modalBox}>
        <button onClick={() => switchDrink()}>X</button>
        <div className={styles.information}>
          <img src={dados.strDrinkThumb} alt={dados.strDrink} />
          <div className={styles.description}>
            <h3>{dados.strDrink}</h3>
            <p> Drink: {dados.strGlass}</p>
            <p> IBA: {dados.strIBA}</p>
            <p> Ingredients: {`${getIngredients(dados)}`}</p>
            <p> Instructions {dados.strInstructions}</p>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Modal;
