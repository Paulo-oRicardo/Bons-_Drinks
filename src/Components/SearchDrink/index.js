/* eslint-disable jsx-a11y/img-redundant-alt */
import React, { useState } from "react";
import Button from "../Button";
import styles from "./search.module.scss";
import Modal from "../Modal";
import { getSubtypes, getFilteredDrinks } from "../../services/Fetchs";
const Search = () => {
  const [drinks, setDrinks] = useState([]);
  const [modal, setModal] = useState(false);
  const [domal, setDomal] = useState({});
  const [categoria, setCategoria] = useState(null);
  const returnModal = () => {
    if (modal) return <Modal dados={domal} closeDrink={setBoolean} />;
  };

  const setBoolean = () => {
    return setModal(!modal);
  };

  const handleClick = async (e) => {
    e.preventDefault();
    const dados = await fetch(
      `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${e.target.drink.value}`
    );
    const response = await dados.json();
    setDrinks(response.drinks);
  };

  const changeFilter = async (e) => {
    e.preventDefault();
    const type = e.target.value;
    const data = await getSubtypes(type);
    console.log(data);
    localStorage.setItem("type", type);
    setCategoria(data);
  };

  const filterDrinks = async (e) => {
    e.preventDefault();
    let select = e.target.value;
    let subtype = select.replaceAll(" ", "_");
    const data = await getFilteredDrinks(subtype);
    setDrinks(data);
  };

  return (
    <section className={styles.contentSearch}>
      <select onChange={changeFilter}>
        <option value="" select disabled>
          Selecione
        </option>
        <option value="a">Alcóolico</option>
        <option value="c">Categoria</option>
        <option value="c">Copo</option>
      </select>
      <select onChange={filterDrinks}>
        <option value="" select disabled>
          Selecione
        </option>
        {categoria
          ? categoria.map((category) => {
              let type = Object.keys(category)[0];
              let index = localStorage.getItem("type");
              return (
                <option key={category[type]} id={index} value={category[type]}>
                  {category[type]}
                </option>
              );
            })
          : () => {
              return;
            }}
      </select>
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
                <button
                  onClick={() => {
                    setBoolean();
                    setDomal(drink);
                  }}
                >
                  know more
                </button>
              </li>
            );
          })
        ) : (
          <img src="https://neilpatel.com/wp-content/uploads/2019/05/ilustracao-panda-com-problema-error-404-not-found.jpeg" />
        )}
      </ul>
      {returnModal()}
    </section>
  );
};

export default Search;
