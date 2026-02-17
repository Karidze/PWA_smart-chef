//App.jsx

import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import SmartChef from './pages/SmartChef';
import AllRecipes from './pages/AllRecipes';
import Favorites from './pages/Favorites';
import RecipeDetail from './pages/RecipeDetail';
import './App.css';

function App() {
  const [isOffline, setIsOffline] = useState(!navigator.onLine);

  useEffect(() => {
    // Слушатели изменения статуса сети
    const handleStatusChange = () => setIsOffline(!navigator.onLine);
    
    window.addEventListener('online', handleStatusChange);
    window.addEventListener('offline', handleStatusChange);

    return () => {
      window.removeEventListener('online', handleStatusChange);
      window.removeEventListener('offline', handleStatusChange);
    };
  }, []);

  return (
    <Router>
      <div className="app-container">
        {/* Уведомление об офлайн-режиме */}
        {isOffline && (
          <div className="offline-banner">
            <span className="offline-icon">🌐</span>
            You are currently offline. Using cached data.
          </div>
        )}

        <main> 
          <Routes>
            <Route path="/" element={<SmartChef />} />
            <Route path="/recipes" element={<AllRecipes />} />
            <Route path="/favorites" element={<Favorites />} />
            <Route path="/recipe/:id" element={<RecipeDetail />} />
          </Routes>
        </main>

        <nav className="bottom-nav">
          <Link to="/" className="nav-link">
            <span className="nav-icon">🍳</span>
            <span>Chef</span>
          </Link>
          <Link to="/recipes" className="nav-link">
            <span className="nav-icon">📖</span>
            <span>Recipes</span>
          </Link>
          <Link to="/favorites" className="nav-link">
            <span className="nav-icon">⭐</span>
            <span>Saved</span>
          </Link>
        </nav>
      </div>
    </Router>
  );
}

export default App;