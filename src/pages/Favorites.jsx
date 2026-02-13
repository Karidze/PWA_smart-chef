import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { recipes } from '../data/recipes';

const Favorites = () => {
  const [favRecipes, setFavRecipes] = useState([]);

  // Загружаем список из localStorage при открытии страницы
  useEffect(() => {
    const favorites = JSON.parse(localStorage.getItem('favorites') || '[]');
    // Фильтруем нашу базу рецептов по сохраненным ID
    const filtered = recipes.filter(r => favorites.includes(r.id));
    setFavRecipes(filtered);
  }, []);

  return (
    <div className="page">
      <h1>Your Favorites ⭐</h1>
      
      {favRecipes.length > 0 ? (
        <div className="recipe-list">
          {favRecipes.map(r => (
            <Link to={`/recipe/${r.id}`} key={r.id} className="recipe-card-link">
              <div className="recipe-card">
                <h3>{r.title}</h3>
                <div className="card-meta">
                  <span>⏱ {r.prepTime}</span>
                  <span>📁 {r.category}</span>
                </div>
                <span style={{color: '#4CAF50', fontSize: '0.8rem'}}>View Recipe →</span>
              </div>
            </Link>
          ))}
        </div>
      ) : (
        <div className="empty-state">
          <p>You haven't saved any recipes yet.</p>
          <Link to="/" className="browse-link">Go find some recipes!</Link>
        </div>
      )}
    </div>
  );
};

export default Favorites;