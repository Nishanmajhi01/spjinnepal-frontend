import React from 'react';
import './App.css';
import DefaultLayout from './layout/DefaultLayout';
import { Dashboard } from './page/dashboard/Dashboard.page';
import { Books } from './page/books/Books.page';
import { Tartam } from './page/tartam-wani/Tartam-wani';
import { Video } from './page/video-gallery/Video-gallery.page';
import { SearchBook } from './page/search-books/SearchBook.page';
import { Routes, Route, Navigate } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Navigate to="/dashboard" />} />
        <Route element={<DefaultLayout />}>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/books" element={<Books />} />
          <Route path="/tartam-wani" element={<Tartam />} />
          <Route path="/video-gallery" element={<Video />} />
          <Route path="/search-books" element={<SearchBook />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;