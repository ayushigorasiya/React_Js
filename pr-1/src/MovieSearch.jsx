// MovieSearch.jsx
import React, { useState, useEffect } from 'react';
import './App.css';  // Make sure the CSS styles are applied

const API_KEY = 'fc1fef96'; // Replace this with your OMDb API key

function MovieSearch() {
  const [searchTerm, setSearchTerm] = useState(''); // State to store the search term input by the user
  const [searchResults, setSearchResults] = useState([]); // State to store the search results (list of movies)
  const [selectedMovie, setSelectedMovie] = useState(null); // State to store the details of the selected movie

  // This useEffect runs whenever the `searchTerm` changes
  // It fetches the list of movies from the OMDb API based on the search term
  useEffect(() => {
    if (searchTerm.trim() !== '') {
      // If searchTerm is not empty, make an API call to fetch movies
      fetch(`https://www.omdbapi.com/?s=${searchTerm}&page=1&apikey=${API_KEY}`)
        .then(res => res.json())
        .then(data => {
          if (data.Response === 'True') {
            setSearchResults(data.Search); // Set the search results if data is found
          } else {
            setSearchResults([]); // If no results found, clear the previous results
          }
        });
    } else {
      // If searchTerm is empty, clear the search results
      setSearchResults([]);
    }
  }, [searchTerm]); // Re-run this effect whenever `searchTerm` state changes

  // This function is triggered when a user clicks on a movie in the search results
  const handleMovieClick = (id) => {
    // Fetch detailed data of the clicked movie using its IMDb ID
    fetch(`https://www.omdbapi.com/?i=${id}&apikey=${API_KEY}`)
      .then(res => res.json())
      .then(data => {
        setSelectedMovie(data); // Update selectedMovie state with detailed info
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
            value={searchTerm} // Bind value to the searchTerm state
            onChange={(e) => setSearchTerm(e.target.value)} // Update searchTerm when user types
          />
          {/* Display the list of search results if any */}
          <div className="search-list">
            {searchResults.map(movie => (
              <div
                key={movie.imdbID} // Use IMDb ID as the key for each movie in the list
                className="search-list-item"
                onClick={() => handleMovieClick(movie.imdbID)} // Call handleMovieClick when a movie is clicked
              >
                {/* Movie thumbnail */}
                <div className="search-item-thumbnail">
                  <img
                    src={movie.Poster !== 'N/A' ? movie.Poster : 'image_not_found.png'} // Check if a poster is available
                    alt={movie.Title} // Set alt text as the movie title
                  />
                </div>
                {/* Movie info (Title & Year) */}
                <div className="search-item-info">
                  <h3>{movie.Title}</h3>
                  <p>{movie.Year}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* If a movie is selected, display the movie details */}
      {selectedMovie && (
        <div className="container">
          <div className="result-container">
            <div className="result-grid">
              {/* Movie Poster */}
              <div className="movie-poster">
                <img
                  src={selectedMovie.Poster !== 'N/A' ? selectedMovie.Poster : 'image_not_found.png'} // Check if a poster is available
                  alt="movie poster"
                />
              </div>
              {/* Movie Info */}
              <div className="movie-info">
                <h3 className="movie-title">{selectedMovie.Title}</h3>
                {/* Miscellaneous Movie Information (Year, Ratings, Released) */}
                <ul className="movie-misc-info">
                  <li className="year">Year: {selectedMovie.Year}</li>
                  <li className="rated">Ratings: {selectedMovie.Rated}</li>
                  <li className="released">Released: {selectedMovie.Released}</li>
                </ul>
                {/* Other Details like Genre, Writer, Actors, Plot, etc. */}
                <p className="genre"><b>Genre:</b> {selectedMovie.Genre}</p>
                <p className="writer"><b>Writer:</b> {selectedMovie.Writer}</p>
                <p className="actors"><b>Actors: </b>{selectedMovie.Actors}</p>
                <p className="plot"><b>Plot:</b> {selectedMovie.Plot}</p>
                <p className="language"><b>Language:</b> {selectedMovie.Language}</p>
                {/* Awards */}
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
