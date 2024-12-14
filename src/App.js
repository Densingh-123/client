import React, { useState, createContext } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import './Pages/style.css';
import Books from './Pages/Books';
import Add from './Pages/Add';
import Update from './Pages/Update';
import Navbar from './Pages/Navbar';
import Login   from './Pages/Login';
// Create a Theme Context
export const ThemeContext = createContext();

function App() {
  const [theme, setTheme] = useState('light'); // Light theme by default

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <div className={`app ${theme}`}>
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path="/" element={<Books />} />
            <Route path="/add" element={<Add />} />
            <Route path="/update/:id" element={<Update />} />
            <Route path="/login" element={<Login />} />
          </Routes>
        </BrowserRouter>
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
