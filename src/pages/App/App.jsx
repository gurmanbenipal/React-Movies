import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import MovieListPage from '../MovieListPage/MovieListPage';
import MovieDetailPage from '../MovieDetailPage/MovieDetailPage';
import ActorListPage from '../ActorListPage/ActorListPage';
import LoginPage from '../LoginPage/LoginPage';
import NavBar from '../../components/NavBar/NavBar';
import './App.css'
import { movies } from "../../data.js";

export default function App() {
  const [user, setUser] = useState(null)

  function signUp(name){
    setUser(name)
  }

  return (
    <main>
      <h1>React Movies Lab</h1>
      { user ?
        <>
          <NavBar user={user}/>
          <Routes>
              <Route path="/" element={<MovieListPage movies={movies} />} />
              <Route path="/movies/:movieName" element={<MovieDetailPage movies={movies} />} />
              <Route path="/actors" element={<ActorListPage />} />
          </Routes>
        </>
        :
        <LoginPage signUp={signUp} />
      }
    </main>
  )
}