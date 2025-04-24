import React, { useState, useEffect } from 'react';
import './App.css'; 

const API_KEY = 'fc1fef96'; 

function MovieSearch() {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]); 
  const [selectedMovie, setSelectedMovie] = useState(null);

  useEffect(() => {
    if (searchTerm.trim() !== '') {
      fetch(`https://www.omdbapi.com/?s=${searchTerm}&page=1&apikey=${API_KEY}`)
        .then(res => res.json())
        .then(data => {
          if (data.Response === 'True') {
            setSearchResults(data.Search); 
          } else {
            setSearchResults([]); 
          }
        });
    } else {
      setSearchResults([]);
    }
  }, [searchTerm]); 

  const handleMovieClick = (id) => {
    fetch(`https://www.omdbapi.com/?i=${id}&apikey=${API_KEY}`)
      .then(res => res.json())
      .then(data => {
        setSelectedMovie(data); 
      });
  };

  return (
    <div className="wrapper">
      {/* Logo */}
      <div className="logo">
        <div className="container">
          <p>Movie<span>Star✫</span></p>
        </div>
      </div>

      {/* Search Input */}
      <div className="search-container">
        <div className="search-element">
          <h3>Search Movie:</h3>
          {/* Input field for movie title */}
          <input
            type="text"
            className="form-control"
            placeholder="Search Movie Title ..."
            value={searchTerm} 
            onChange={(e) => setSearchTerm(e.target.value)} 
          />
          <div className="search-list">
            {searchResults.map(movie => (
              <div
                key={movie.imdbID} 
                className="search-list-item"
                onClick={() => handleMovieClick(movie.imdbID)} 
              >
                <div className="search-item-thumbnail">
                  <img
                    src={movie.Poster !== 'N/A' ? movie.Poster : 'image_not_found.png'} 
                    alt={movie.Title} 
                  />
                </div>
                <div className="search-item-info">
                  <h3>{movie.Title}</h3>
                  <p>{movie.Year}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      {selectedMovie && (
        <div className="container">
          <div className="result-container">
            <div className="result-grid">
              <div className="movie-poster">
                <img
                  src={selectedMovie.Poster !== 'N/A' ? selectedMovie.Poster : 'image_not_found.png'} 
                  alt="movie poster"
                />
              </div>
              <div className="movie-info">
                <h3 className="movie-title">{selectedMovie.Title}</h3>
                <ul className="movie-misc-info">
                  <li className="year">Year: {selectedMovie.Year}</li>
                  <li className="rated">Ratings: {selectedMovie.Rated}</li>
                  <li className="released">Released: {selectedMovie.Released}</li>
                </ul>
                <p className="genre"><b>Genre:</b> {selectedMovie.Genre}</p>
                <p className="writer"><b>Writer:</b> {selectedMovie.Writer}</p>
                <p className="actors"><b>Actors: </b>{selectedMovie.Actors}</p>
                <p className="plot"><b>Plot:</b> {selectedMovie.Plot}</p>
                <p className="language"><b>Language:</b> {selectedMovie.Language}</p>
                <p className="awards"><b><i className="fas fa-award"></i></b> {selectedMovie.Awards}</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default MovieSearch;
