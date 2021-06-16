import React from "react";
import styles from "./modal.module.scss";
const Modal = ({ dados, closeDrink }) => {
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
    <section
      className={styles.container}
      onClick={(e) => {
        if (e.target.className === styles.container) closeDrink();
      }}
    >
      <div className={styles.modalBox}>
        <button onClick={() => closeDrink()}>X</button>
        <div className={styles.information}>
          <img src={dados.strDrinkThumb} alt={dados.strDrink} />
          <div className={styles.description}>
            <h3>{dados.strDrink}</h3>
            <p>
              <strong> Drink: </strong> {dados.strGlass}
            </p>
            <p>
              <strong>IBA: </strong> {dados.strIBA}
            </p>
            <p>
              <strong>Ingredients: </strong> {`${getIngredients(dados)}`}
            </p>
            <p>
              <strong>Instructions: </strong> {dados.strInstructions}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Modal;
