import React from 'react';
import './App.scss';
import { Route, Routes } from 'react-router-dom';
import HomePage from './pages/Home/Home';
import TopBar from './components/TopBar/TopBar';

function App() {
  return (
    <div className="App">
      <TopBar />
      <Routes>
        <Route path="/" index Component={HomePage} />
      </Routes>
    </div>
  );
}

export default App;
