import { useState, useEffect } from "react";
import RecipeCard from "../components/RecipeCard";

function Recipes({ recipe }) {
  const [text, setText] = useState("");

  const handleChange = (e) => {
    setText(e.target.value);
    console.log(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (text === "") {
      alert("Please enter a search");
    }
  };

  const [recipes, setRecipes] = useState([]);

  const url = `https://api.edamam.com/api/recipes/v2?type=public&q=${text}&app_id=eeb26e4a&app_key=e5fe80eaf283e5c29c518c34b7a65c94%09`;

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(url);
      const data = await response.json();
      setRecipes(data.hits);

      console.log(data.hits);
    };

    fetchData();
  }, [url]);

  return (
    <div className='container mx-auto'>
      <h1 className='text-primary text-6xl mb-4'>Outside API</h1>
      <form onSubmit={handleSubmit}>
        <input
          type='text'
          placeholder='Search...'
          value={text}
          onChange={handleChange}
        />
        <button type='submit'>Search</button>
      </form>
      <br />
      <br />

      <div className='grid grid-cols-4 gap-4'>
        {recipes.map((recipe) => (
          <RecipeCard
            recipe={recipe}
            key={recipe.recipe.uri.split("#recipe_")[1]}
          />
        ))}
      </div>
    </div>
  );
}

export default Recipes;
