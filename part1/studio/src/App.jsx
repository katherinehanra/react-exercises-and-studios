import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import RecipeDescription from "./components/Description.jsx";
import RecipeIngredients from "./components/Ingredients.jsx";
import RecipePhoto from "./components/Photos.jsx";

function App() {
  return (
    <div>
      <div className="App">
        <div className="recipePhotoBlock">
          <RecipePhoto />
        </div>
        <div>
          <RecipeDescription />
          <RecipeIngredients />
        </div>
      </div>
    </div>
  );
}

export default App;
