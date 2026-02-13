import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import SmartChef from './pages/SmartChef';
import AllRecipes from './pages/AllRecipes';
import Favorites from './pages/Favorites';
import RecipeDetail from './pages/RecipeDetail';
import './App.css';

function App() {
  return (
    <Router>
      <div className="app-container">
        <main> 
          <Routes>
            <Route path="/" element={<SmartChef />} />
            <Route path="/recipes" element={<AllRecipes />} />
            <Route path="/favorites" element={<Favorites />} />
            <Route path="/recipe/:id" element={<RecipeDetail />} />
          </Routes>
        </main>

        <nav className="bottom-nav">
          <Link to="/">🍳 Smart Chef</Link>
          <Link to="/recipes">📖 Recipes</Link>
          <Link to="/favorites">⭐ Saved</Link>
        </nav>
      </div>
    </Router>
  );
}

// ВОТ ЭТА СТРОКА ОБЯЗАТЕЛЬНА:
export default App;