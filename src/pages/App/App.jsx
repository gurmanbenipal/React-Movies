import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import MovieListPage from '../MoviesListPage/MoviesListPage';
import MovieDetailPage from '../MoviesDetailPage/MoviesDetailPage';
import ActorListPage from '../ActorListPage/ActorListPage';
import LoginPage from '../LoginPage/LoginPage';
import NavBar from '../../components/NavBar/NavBar';
import './App.css'

export default function App() {
  const [user, setUser] = useState({});
  return (
    <main className="App">
      { user ?
      <>
        <NavBar />
        <Routes>
            <Route path="/" element={<MovieListPage />} />
            <Route path="/movies/:movieName" element={<MovieDetailPage />} />
            <Route path="/actors" element={<ActorListPage />} />
        </Routes>
      </>
      :
      <LoginPage />
      }
    </main>
  );
}