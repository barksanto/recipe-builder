import React, { useEffect, useState } from "react";
import './App.css';
import Recipe from "./Recipe";


const App = () => {
  const APP_ID = 'c7e77fe5';
  const APP_KEY = '275dbeadaa5f29f80e32e61261c24bd5';

  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    getRecipes();
  }, []) // request runs once once app gets mounted - now when counter changes thats when useEffect runs

  const getRecipes = async () => {
    const response = await fetch(`https://api.edamam.com/search?q=chicken&app_id=${APP_ID}&app_key=${APP_KEY}`);
    const data = await response.json();
    setRecipes(data.hits);
  }

  return (
    <div className="App">
      <form className="search-form">
        <input className="search-bar" type="text" />
        <button className="search-button" type="submit">Search</button>
      </form>
      <Recipe/>
    </div>

  )
}

export default App;
