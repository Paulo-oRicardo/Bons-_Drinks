import React from "react";
import useFetch from "../../hooks/useFetch";

export default function Drinks() {
  const allDrinks = useFetch();
  return (
    <div>
      <h1>Drinks</h1>
      {allDrinks.map((drink) => {
        return <div key={drink.id}>{drink.strDrink}</div>;
      })}
    </div>
  );
}
