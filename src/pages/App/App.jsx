import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css'
import MovieListPage from '../MovieListPage/MovieListPage';
import MovieDetailPage from '../MovieDetailPage/MovieDetailPage';
import ActorListPage from '../ActorListPage/ActorListPage';
import LoginPage from '../LoginPage/LoginPage';
import NavBar from '../../components/NavBar/NavBar';


export default function App() {
  const [user, setUser] = useState({});

  return (
    <main className="App">
      { user ?
          <>
            <NavBar />
            <Routes>
              <Route path="/" element={<MovieListPage />} />
              <Route path="/actors" element={<ActorListPage />} />
              <Route path="/movies/:movieName" element={<MovieDetailPage />} />
            </Routes>
          </>
          :
          <LoginPage />
      }
    </main>
  );
}
