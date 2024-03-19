import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './index.css'

import RootPage from './pages/rootPage';
import HomePage from './pages/homePage';
import ChordPage from './pages/chordPage';
import TutorialPage from './pages/tutorialPage';
import TentangPage from './pages/tentangPage';
import SearchPage from './pages/searchPage';


const container = document.getElementById('root');

if (container) {
  const root = createRoot(container);

  root.render(
    <React.StrictMode>
      <Router>
        <Routes>
          <Route path="/" element={<RootPage />} />
          <Route path="/home" element={<HomePage />} />
          <Route path="/tutorial" element={<TutorialPage />} />
          <Route path="/chord" element={<ChordPage />} />
          <Route path="/search" element={<SearchPage />} />
          <Route path='/tentang' element={<TentangPage />} />
        </Routes>
      </Router>
    </React.StrictMode>,

   
  );

} else {
  console.error('Failed to find the root element');
}
