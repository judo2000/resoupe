import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const url =
  "https://api.edamam.com/api/recipes/v2?type=public&q=chicken&app_id=eeb26e4a&app_key=e5fe80eaf283e5c29c518c34b7a65c94%09";

// const singleRecipe_url =
//   "https://api.edamam.com/api/recipes/v2/b79327d05b8e5b838ad6cfd9576b30b6?type=public&app_id=eeb26e4a&app_key=e5fe80eaf283e5c29c518c34b7a65c94%09&field=uri&field=label&field=image&field=images&field=source&field=url&field=shareAs&field=yield&field=dietLabels&field=healthLabels&field=cautions&field=ingredientLines&field=ingredients&field=calories&field=glycemicIndex&field=totalCO2Emissions&field=co2EmissionsClass&field=totalWeight&field=totalTime&field=cuisineType&field=mealType&field=dishType&field=totalNutrients&field=totalDaily&field=digest";

function Outside() {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(url);
      const data = await response.json();
      setRecipes(data.hits);
    };

    fetchData();
  }, []);

  return (
    <>
      <h1 className='text-6xl mb-4'>Outside API</h1>
      <ul>
        {recipes.map((recipe, index) => (
          <li key={recipe.recipe.uri.split("#recipe_")[1]}>
            <Link to={`/singlePage/${recipe.recipe.uri.split("#recipe_")[1]}`}>
              {recipe.recipe.label}
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
}

export default Outside;
