import React, { useState } from 'react';
import { recipes } from '../data/recipes';
import { Link } from 'react-router-dom';
import '../styles/AllRecipes.css';

const AllRecipes = () => {
  const [search, setSearch] = useState('');
  const [activeCategory, setActiveCategory] = useState('All');

  // Получаем список уникальных категорий
  const categories = ['All', ...new Set(recipes.map(r => r.category))];

  // Фильтрация
  const filteredRecipes = recipes.filter(r => {
    const matchesSearch = r.title.toLowerCase().includes(search.toLowerCase());
    const matchesCategory = activeCategory === 'All' || r.category === activeCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="page all-recipes-container">
      <h1>All Recipes 📖</h1>

      <div className="filters-section">
        <input 
          type="text" 
          placeholder="Search by name..." 
          className="search-bar"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        
        <div className="category-scroll">
          {categories.map(cat => (
            <button 
              key={cat} 
              className={`cat-chip ${activeCategory === cat ? 'active' : ''}`}
              onClick={() => setActiveCategory(cat)}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      <div className="recipes-grid">
        {filteredRecipes.map(r => (
          <Link to={`/recipe/${r.id}`} key={r.id} className="recipe-card-full">
            <div className="card-image-placeholder">
              {r.category === 'Breakfast' && '🍳'}
              {r.category === 'Main Course' && '🍲'}
              {r.category === 'Salads' && '🥗'}
              {r.category === 'Dessert' && '🍰'}
              {r.category === 'Soups' && '🥣'}
              {r.category === 'Snacks' && '🥪'}
              {r.category === 'Side Dish' && '🥔'}
            </div>
            <div className="card-content">
              <h3>{r.title}</h3>
              <div className="card-info">
                <span className="time-tag">⏱ {r.prepTime}</span>
                <span>{r.category}</span>
              </div>
            </div>
          </Link>
        ))}
      </div>

      {filteredRecipes.length === 0 && (
        <p className="no-results">No recipes found for this criteria.</p>
      )}
    </div>
  );
};

export default AllRecipes;