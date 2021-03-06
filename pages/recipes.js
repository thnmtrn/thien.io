import Container from "@/components/Container";
import { useEffect, useState } from "react";

import Recipe from "../components/RecipeCard";

export default function App() {
  const APP_KEY = "2853e9ccf22f104dab4034e2f9766207";
  const APP_ID = "6957ebee";

  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState("");
  const [query, setQuery] = useState("kale");

  const url = `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`;

  useEffect(() => {
    getRecipes();
  }, [query]);

  const getRecipes = async () => {
    const response = await fetch(url);
    const data = await response.json();
    setRecipes(data.hits);
    console.log(data.hits);
  };

  const updateSearch = (e) => {
    setSearch(e.target.value);
  };

  const getSearch = (e) => {
    e.preventDefault();
    setQuery(search);
  };

  return (
    <Container>
      <div className="bg-white text-gray-900">
        <p
          style={{
            textAlign: "center",
            color: "#222",
            opacity: "0.8",
            fontSize: "12px",
            padding: "0px",
            margin: "0px",
            lineHeight: "18px"
          }}
        >
          we're limited to <b>5 API requests a minute</b>
        </p>
        <div>
          <h1 className="hero-title">Recipe app</h1>
          <p className="subtitle">
            Search for recipes, type a dish or an ingredient
          </p>
          <p className="Superscript">
            e.g. ramen, banana, carrot cake, avacado, salmon, tofu...
          </p>
        </div>

        <form onSubmit={getSearch} className="">
          <input
            className=""
            value={search}
            onChange={updateSearch}
          />
          <button className="" type="submit">
            search
          </button>
        </form>
      </div>
      <div className="">
        {recipes.map((recipe) => (
          <Recipe
            key={recipe.recipe.calories}
            title={recipe.recipe.label}
            cal={recipe.recipe.calories}
            image={recipe.recipe.image}
            ingredients={recipe.recipe.ingredients}
            time={recipe.recipe.totalTime}
            source={recipe.recipe.url}
            servings={recipe.recipe.yeild}
          />
        ))}
      </div>
    </Container>
  );
}
