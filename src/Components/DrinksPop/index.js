import React, { useState } from "react";
import UseFetch from "../../hooks/useFetch";
import styles from "./drinksPop.module.scss";
import { Link } from "react-router-dom";
import Modal from "../Modal";
export default function Drinks() {
  const [modal, setModal] = useState(false);
  const [domal, setDomal] = useState({});
  const [id, setId] = useState({});
  const [drinkModal, setDrinkModal] = useState({});

  const returnModal = () => {
    if (modal) return <Modal dados={domal} modal={setBoolean} />;
  };

  const setBoolean = () => {
    setModal(!modal);
  };
  const allDrinks = UseFetch(`filter.php?c=Cocktail`);
  const dataModal = UseFetch(`lookup.php?i=${id}`);

  return (
    <section className={styles.drinks}>
      <div className={styles.contentDrinks}>
        {allDrinks.slice(85, 100).map((drink) => {
          return (
            <div className={styles.contentDrinksOnly} key={drink.idDrink}>
              <img
                className={styles.drinkImg}
                src={drink.strDrinkThumb}
                alt="Drinks"
              />

              <h2>{drink.strDrink}</h2>
              <button
                onClick={() => {
                  setBoolean();
                  setDomal(dataModal.length === 0 ? drink : dataModal[0]);
                  setId(drink.idDrink);
                  setDrinkModal(dataModal[0]);
                  console.log(dataModal);
                }}
              >
                About as
              </button>
            </div>
          );
        })}
        {returnModal()}
      </div>
    </section>
  );
}
