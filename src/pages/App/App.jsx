import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css'
import MovieListPage from '../MovieListPage/MovieListPage';
import MovieDetailPage from '../MovieDetailPage/MovieDetailPage';
import ActorListPage from '../ActorListPage/ActorListPage';
import LoginPage from '../LoginPage/LoginPage';
import NavBar from '../../components/NavBar/NavBar';
import { movies } from "../../data.js";

export default function App() {
  const [user, setUser] = useState(null);

  function handleSignUp(name){
    setUser(name);
  }

  return (
    <main>
      { user ?
      <>
        <NavBar user={user} /> 
        <Routes>
            <Route path="/" element={<MovieListPage movies={movies} />} />
            <Route path="/movies/:movieName" element={<MovieDetailPage movies={movies} />} />
            <Route path="/actors" element={<ActorListPage movies={movies} />} />
        </Routes>
      </>
      :
      <LoginPage handleSignUp={handleSignUp}/>
      }
    </main>
  );
}