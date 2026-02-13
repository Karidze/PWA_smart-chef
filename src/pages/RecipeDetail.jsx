import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { recipes, ingredientEmojis } from '../data/recipes';
import '../styles/RecipeDetail.css';

const RecipeDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const recipe = recipes.find(r => r.id === parseInt(id));

  const [isFav, setIsFav] = useState(false);

  const getEmoji = (name) => {
    const key = name.toLowerCase().replace(/\s/g, '');
    return ingredientEmojis[key] || "🛒";
  };

  // Метод для перехода на главную с поиском ингредиента
  const handleIngredientClick = (name) => {
    // Переходим на корень (SmartChef) и добавляем query-параметр
    navigate(`/?search=${name.toLowerCase()}`);
  };

  useEffect(() => {
    if (recipe) {
      const favorites = JSON.parse(localStorage.getItem('favorites') || '[]');
      setIsFav(favorites.includes(recipe.id));

      let history = JSON.parse(localStorage.getItem('viewed_history') || '[]');
      history = history.filter(historyId => historyId !== recipe.id);
      history.push(recipe.id);
      if (history.length > 10) history.shift();
      localStorage.setItem('viewed_history', JSON.stringify(history));
    }
  }, [recipe]);

  if (!recipe) return <div className="page"><h2>Recipe not found!</h2></div>;

  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: recipe.title,
          text: `Check out this recipe for ${recipe.title}!`,
          url: window.location.href,
        });
      } catch (err) { console.error(err); }
    } else {
      alert("Sharing is not supported.");
    }
  };

  const toggleFavorite = () => {
    let favorites = JSON.parse(localStorage.getItem('favorites') || '[]');
    if (favorites.includes(recipe.id)) {
      favorites = favorites.filter(favId => favId !== recipe.id);
      setIsFav(false);
    } else {
      favorites.push(recipe.id);
      setIsFav(true);
      if (navigator.vibrate) navigator.vibrate(100);
    }
    localStorage.setItem('favorites', JSON.stringify(favorites));
  };

  return (
    <div className="page">
      <div className="detail-header">
        <button className="back-btn" onClick={() => navigate(-1)}>← Back</button>
        <div className="header-actions">
          <button className="share-btn" onClick={handleShare}>📤 Share</button>
          <button className={`fav-btn ${isFav ? 'active' : ''}`} onClick={toggleFavorite}>
            {isFav ? '⭐ Saved' : '☆ Save'}
          </button>
        </div>
      </div>

      <h1 className="recipe-title">{recipe.title}</h1>
      
      <div className="recipe-info-chips">
        <span className="chip">{recipe.category}</span>
        <span className="chip">⏱ {recipe.prepTime}</span>
      </div>
      
      <section className="ingredients-section">
        <h3>Ingredients:</h3>
        <ul className="ing-list-row">
          {(recipe.detailedIngredients || recipe.ingredients).map((ing, i) => {
            const name = typeof ing === 'object' ? ing.name : ing;
            const amount = typeof ing === 'object' ? ing.amount : '';

            return (
              <li 
                key={i} 
                className="ing-item-card" 
                onClick={() => handleIngredientClick(name)}
                style={{ cursor: 'pointer' }}
              >
                <span className="ing-emoji-small">{getEmoji(name)}</span>
                <span style={{ fontWeight: '500' }}>{name}</span>
                {amount && <span style={{ color: '#747d8c', fontSize: '0.8rem' }}>({amount})</span>}
              </li>
            );
          })}
        </ul>
      </section>

      <section className="steps-section">
        <h3>Instructions:</h3>
        <div className="steps-list">
          {recipe.steps.map((step, i) => (
            <div key={i} className="step-item">
              <div className="step-num-circle">{i + 1}</div>
              <p>{step}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default RecipeDetail;