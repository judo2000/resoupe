import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import RecipeCard from "../components/RecipeCard";

function RecipeDetails() {
  const params = useParams();

  const id = params.id;

  const url = `https://api.edamam.com/api/recipes/v2/${id}?type=public&app_id=eeb26e4a&app_key=e5fe80eaf283e5c29c518c34b7a65c94%09&field=uri&field=label&field=image&field=images&field=source&field=url&field=shareAs&field=yield&field=dietLabels&field=healthLabels&field=cautions&field=ingredientLines&field=ingredients&field=calories&field=glycemicIndex&field=totalCO2Emissions&field=co2EmissionsClass&field=totalWeight&field=totalTime&field=cuisineType&field=mealType&field=dishType&field=totalNutrients&field=totalDaily&field=digest`;
  const [recipe, setRecipe] = useState("");
  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(url);
      const data = await response.json();
      setRecipe(data);
      console.log(data);
    };

    fetchData();
  }, [url]);

  return (
    <div className='grid grid-cols-4 gap-4'>
      <h1>Recipe</h1>
      <RecipeCard recipe={recipe} />
    </div>
  );
}

export default RecipeDetails;
