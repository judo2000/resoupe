import React from "react";
import { Link } from "react-router-dom";

function RecipeCard({ recipe }) {
  return (
    <div>
      <Link to={`/recipeDetails/${recipe.recipe.uri.split("#recipe_")[1]}`}>
        <div className='mb-2 rounded-md card bg-yellow-800 hover:bg-yellow-900'>
          <div className='card-body'>{recipe.recipe.label}</div>
          <p>
            <img src={recipe.recipe.images.THUMBNAIL.url} alt='recipe' />
          </p>
        </div>
      </Link>
    </div>
  );
}

export default RecipeCard;
