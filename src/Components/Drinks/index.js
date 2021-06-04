import React from "react";
import styles from "./drinks.module.scss";
import { Link } from "react-router-dom";
import { Switch, BrowserRouter as Router, Route } from "react-router-dom";
import DrinkPop from "../DrinksPop";

import Search from "../SearchDrink";
export default function Drinks() {
  return (
    <Router>
      <section className={styles.drinks}>
        <h1>Drinks</h1>
        <div className={styles.header}>
          <Link className={styles.Search} to="/drinks/search">
            Search <img src="./lupa.svg" alt="lupa" />
          </Link>
          <Link to="/drinks/Drinkspop">Populares</Link>
        </div>

        <div className={styles.containerData}>
          <Switch>
            <Route path="/drinks/DrinksPop">
              <DrinkPop />
            </Route>
            <Route path="/drinks/search">
              <Search />
            </Route>
          </Switch>
        </div>
      </section>
    </Router>
  );
}
