import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function RecipeDetails() {
  const params = useParams();

  const id = params.id;

  const url = `https://api.edamam.com/api/recipes/v2/${id}?type=public&app_id=eeb26e4a&app_key=e5fe80eaf283e5c29c518c34b7a65c94%09&field=uri&field=label&field=image&field=images&field=source&field=url&field=shareAs&field=yield&field=dietLabels&field=healthLabels&field=cautions&field=ingredientLines&field=ingredients&field=calories&field=glycemicIndex&field=totalCO2Emissions&field=co2EmissionsClass&field=totalWeight&field=totalTime&field=cuisineType&field=mealType&field=dishType&field=totalNutrients&field=totalDaily&field=digest`;
  const [recipe, setRecipe] = useState("");
  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(url);
      const data = await response.json();
      setRecipe(data.recipe);
      console.log(data.recipe.ingredients[0].text);
    };

    fetchData();
  }, [url]);

  return (
    <div className='container mx-auto px-4'>
      <h1>Recipe</h1>
      <div>
        <div className='mb-2 rounded-md card bg-yellow-800 hover:bg-yellow-900'>
          <div className='card-header text-cente'>
            <h1 className='text-white text-6xl mb-4 text-center'>
              {recipe.label}
            </h1>
          </div>
          <div className='card-body'>
            <div>
              <img src={recipe.image} className='float-left pr-4' alt='alt' />
              <ul>
                {recipe.ingredients?.map((ingredient, index) => (
                  <li key={index}>{ingredient.text}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RecipeDetails;
