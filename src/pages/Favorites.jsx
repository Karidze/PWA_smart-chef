import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { recipes } from '../data/recipes';
import '../styles/Favorites.css';

const Favorites = () => {
  const [favRecipes, setFavRecipes] = useState([]);

  useEffect(() => {
    const favorites = JSON.parse(localStorage.getItem('favorites') || '[]');
    const filtered = recipes.filter(r => favorites.includes(r.id));
    setFavRecipes(filtered);
  }, []);

  return (
    <div className="page favorites-container">
      <div className="favorites-header">
        <h1>Your Favorites ⭐</h1>
        {favRecipes.length > 0 && (
          <p className="recipe-count">
            You have {favRecipes.length} {favRecipes.length === 1 ? 'recipe' : 'recipes'} saved
          </p>
        )}
      </div>
      
      {favRecipes.length > 0 ? (
        <div className="recipe-grid">
          {favRecipes.map(r => (
            <Link to={`/recipe/${r.id}`} key={r.id} className="recipe-card-mini favorite-card">
              <div className="card-content">
                <span className="category-tag">{r.category}</span>
                <h3>{r.title}</h3>
                
                <div className="card-ingredients-preview">
                  {r.ingredients.slice(0, 3).map((ing, index) => (
                    <span key={index} className="mini-ing-text">
                      {ing}{index < 2 && index < r.ingredients.length - 1 ? ', ' : ''}
                    </span>
                  ))}
                  {r.ingredients.length > 3 && (
                    <span className="more-count"> +{r.ingredients.length - 3} more</span>
                  )}
                </div>

                <div className="card-info">
                  <span className="time-tag">⏱ {r.prepTime}</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      ) : (
        <div className="empty-state">
          <div className="empty-icon">🍳</div>
          <h2>Your cookbook is empty</h2>
          <p>Start exploring and save the recipes you love!</p>
          <Link to="/" className="browse-btn">Explore Recipes</Link>
        </div>
      )}
    </div>
  );
};

export default Favorites;