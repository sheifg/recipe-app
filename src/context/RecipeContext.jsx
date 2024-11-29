import axios from "axios";
import { createContext, useContext, useEffect, useState } from "react";
import { toast } from "react-toastify";

const RecipeContext = createContext();

export const RecipeProvider = ({ children }) => {
  const [recipes, setRecipes] = useState([]);
  const mealTypes = ["", "Breakfast", "Lunch", "Dinner", "Snack", "Teatime"];

  // It is better to use the .env instead of btoa to encrypt your sensitive data
  const APP_ID = import.meta.env.VITE_APP_ID;
  const APP_KEY = import.meta.env.VITE_APP_KEY;
  // console.log(APP_ID, APP_KEY);

  //! create react app template you need to use below syntax
  // const APP_ID = process.env.REACT_APP_ID;
  // const APP_KEY = process.env.REACT_APP_KEY;

  const baseUrl = "https://api.edamam.com";

  const getData = async (query, meal) => {
    let url = `${baseUrl}/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`;
    if (meal) url += `&mealType=${meal}`;

    if (query != "") {
      // Fetch the recipes
      const { data } = await axios.get(url);
      if (data.count === 0) {
        // If nothing comes, it is just being notified to the user that nothing is found.It is converted in an error, but it is not an error from API
        toast.error(`No recipe with name ${query}`);
        getData("any");
      }

      setRecipes(data.hits);
      console.log(data.hits);
    } else {
      toast.error("Please fill in the search input");
    }
  };

  useEffect(() => {
    // Get the recipes with "any" in the title/label
    getData("any");
  }, []);

  return (
    <RecipeContext.Provider value={{ mealTypes, recipes, getData }}>
      {children}
    </RecipeContext.Provider>
  );
};

export const useRecipe = () => useContext(RecipeContext);
