import React, { useState, useEffect } from 'react';
import { recipes, ingredientEmojis } from '../data/recipes';
import { Link, useLocation } from 'react-router-dom'; // Добавили useLocation
import '../styles/SmartChef.css';

const SmartChef = () => {
  const [selected, setSelected] = useState([]);
  const [history, setHistory] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [strictMode, setStrictMode] = useState(false);
  
  const location = useLocation(); // Слушаем URL

  // НОВЫЙ ЭФФЕКТ: Ловим ингредиент из ссылки
  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const searchIng = params.get('search');

    if (searchIng) {
      const ing = searchIng.toLowerCase();
      // Добавляем в список, если его там еще нет
      setSelected(prev => prev.includes(ing) ? prev : [...prev, ing]);
      
      // Чистим URL, чтобы при обновлении страницы он снова не добавлялся
      window.history.replaceState({}, '', '/');
    }
  }, [location]);

  useEffect(() => {
    const viewed = JSON.parse(localStorage.getItem('viewed_history') || '[]');
    const historyRecipes = recipes.filter(r => viewed.includes(r.id));
    setHistory(historyRecipes.reverse().slice(0, 5));
  }, []);

  const allIngredients = [...new Set(recipes.flatMap(r => r.ingredients))].sort();

  const filteredIngredients = allIngredients.filter(ing => 
    ing.toLowerCase().includes(searchTerm.toLowerCase()) && !selected.includes(ing)
  );

  const toggle = (ing) => {
    if (navigator.vibrate) navigator.vibrate(40);
    setSelected(prev => 
      prev.includes(ing) ? prev.filter(i => i !== ing) : [...prev, ing]
    );
    setSearchTerm('');
  };

  const possibleRecipes = selected.length > 0 
    ? recipes.filter(r => {
        if (strictMode) {
          return selected.every(ing => r.ingredients.includes(ing));
        } else {
          return r.ingredients.some(ing => selected.includes(ing));
        }
      })
    : [];

  const getEmoji = (name) => ingredientEmojis[name.toLowerCase().replace(/\s/g, '')] || "🛒";

  return (
    <div className="page">
      <h1>Smart Chef 👨‍🍳</h1>

      <div className="search-container">
        <input 
          type="text" 
          placeholder="Search ingredients..." 
          className="ing-search-input"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      <div className="filter-options">
        <label className="checkbox-container">
          <input 
            type="checkbox" 
            checked={strictMode} 
            onChange={() => setStrictMode(!strictMode)} 
          />
          <span className="checkmark"></span>
          Strict match (must have ALL selected)
        </label>
      </div>

      {selected.length > 0 && (
        <section>
          <p className="section-label">Selected ingredients:</p>
          <div className="ingredients-horizontal">
            {selected.map(ing => (
              <button key={ing} className="ing-button active" onClick={() => toggle(ing)}>
                <span className="ing-emoji">{getEmoji(ing)}</span> {ing} ✕
              </button>
            ))}
          </div>
        </section>
      )}

      {searchTerm && (
        <div className="search-results-chips">
          {filteredIngredients.map(ing => (
            <button key={ing} className="ing-button" onClick={() => toggle(ing)}>
              <span className="ing-emoji">{getEmoji(ing)}</span> + {ing}
            </button>
          ))}
        </div>
      )}

      <hr className="divider" />

      <section>
        <h2>{strictMode ? "Perfect Matches" : "Suggested Recipes"} ({possibleRecipes.length})</h2>
        {possibleRecipes.length > 0 ? (
          <div className="recipe-list-horizontal">
            {possibleRecipes.map(r => (
              <Link to={`/recipe/${r.id}`} key={r.id} className="recipe-card-mini">
                <h3>{r.title}</h3>
                <p>⏱ {r.prepTime} • {r.category}</p>
                <span className="match-badge">{strictMode ? "Full Match" : "Partial Match"}</span>
              </Link>
            ))}
          </div>
        ) : (
          <p className="no-recipes-text">
            {selected.length > 0 ? "No recipes match these exact criteria." : "Add ingredients to see recipes."}
          </p>
        )}
      </section>

      {history.length > 0 && (
        <section>
          <h2>Recently Viewed</h2>
          <div className="recipe-list-horizontal">
            {history.map(r => (
              <Link to={`/recipe/${r.id}`} key={r.id} className="recipe-card-mini recently-viewed-card">
                <h3>{r.title}</h3>
                <p>{r.category}</p>
              </Link>
            ))}
          </div>
        </section>
      )}
    </div>
  );
};

export default SmartChef;