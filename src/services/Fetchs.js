const api = "https://www.thecocktaildb.com/api/json/v1/1/";

export const getSubtypes = async (type) => {
  const response = await (await fetch(`${api}list.php?${type}=list`)).json();
  return response.drinks;
};

export const getFilteredDrinks = async (subtype) => {
  const response = await (
    await fetch(api + `filter.php?${localStorage.getItem("type")}=${subtype}`)
  ).json();
  return response.drinks;
};
