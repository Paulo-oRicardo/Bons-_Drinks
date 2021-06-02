import { useEffect, useState } from "react";
export default function useFetch() {
  const [drinks, setDrinks] = useState([]);
  useEffect(() => {
    const funcao = async () => {
      const dados = await fetch(
        "https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=Cocktail&limit=10"
      );
      const response = await dados.json();
      console.log(response.drinks);
      setDrinks(response.drinks);
    };
    funcao();
  }, []);
  return drinks;
}
