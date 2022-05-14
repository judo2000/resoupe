import { Route, Routes, BrowserRouter as Router } from "react-router-dom";
import Recipes from "./pages/Recipes";
import RecipeDetails from "./pages/RecipeDetails";

function App() {
  return (
    <div className='App'>
      <Router>
        <Routes>
          <Route exact path='/recipes' element={<Recipes />} />
          <Route exact path='/recipeDetails/:id' element={<RecipeDetails />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
