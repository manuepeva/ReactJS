import React,{useEffect, useState} from 'react';
import Recipe from './Recipe';
import './App.css';



const App = () =>{
  const APP_ID = 'eeb49e85';
  const APP_KEY = 'a5989873b45a162872d2203f19ac0390';

  const [recipes, setRecipes] = useState([]);

  const [search, setSearch] = useState("");

  const [query, setQuery] = useState('chicken');

  useEffect(() => {
      getRecipes();
  }, []);

  const getRecipes = async () =>{
        const response = await fetch(`https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`);
        const data = await response.json();
        setRecipes(data.hits);
        console.log('data.hits');
  };

  const updateSearch = e => {
        setSearch(e.target.value);
        console.log(search);
      };

      const getSearch = e => {
        e.preventDefault();
        setQuery(search);
      };

  return(
    <div className="App">
      <form className="search-form">
        <input type="text" className="search-bar" value={search} 
        onChange={updateSearch}
        />
          <button type="submit" className="search-button">Search</button>
      </form>
      {recipes.map(recipe => (
          <Recipe key={recipe.recipe.label} title={recipe.recipe.label} calories={recipe.recipe.calories}
          image={recipe.recipe.image}
          />
      ))};
       </div>
  );
  };


export default App;
