import React from "react";

function RecipeCard({ recipe }) {
  return (
    <div>
      <div className='mb-2 rounded-md card bg-yellow-800 hover:bg-yellow-900'>
        <div className='card-body'>{recipe.recipe.label}</div>
        <p>
          <img src={recipe.recipe.images.THUMBNAIL.url} alt='recipe' />
        </p>
      </div>
    </div>
  );
}

export default RecipeCard;
