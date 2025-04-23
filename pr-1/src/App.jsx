    // import React, { useState, useEffect } from 'react';
    // import './App.css';

    // const App = () => {
    //     const [searchTerm, setSearchTerm] = useState('');
    //     const [movieList, setMovieList] = useState([]);
    //     const [selectedMovie, setSelectedMovie] = useState(null);
    //     const [showSearchList, setShowSearchList] = useState(false);

    //     // This function will run when the user types in the search box
    //     const handleInputChange = (e) => {
    //         const value = e.target.value.trim();  // To handle spaces in search term
    //         setSearchTerm(value);
    //         if (value.length > 0) {
    //             setShowSearchList(true);
    //             loadMovies(value);
    //         } else {
    //             setShowSearchList(false);
    //         }
    //     };

    //     const loadMovies = async (searchTerm) => {
    //         const URL = `https://omdbapi.com/?s=${searchTerm}&page=1&apikey=fc1fef96`;
    //         const res = await fetch(URL);
    //         const data = await res.json();
    //         if (data.Response === "True") {
    //             setMovieList(data.Search);
    //         }
    //     };

    //     const fetchMovieDetails = async (id) => {
    //         const res = await fetch(`https://www.omdbapi.com/?i=${id}&apikey=fc1fef96`);
    //         const data = await res.json();
    //         setSelectedMovie(data);
    //         setSearchTerm('');
    //         setShowSearchList(false);
    //     };

    //     return (
    //     <>
    //         <div className="movie-app">
    //             <input 
    //                 type="text" 
    //                 className="form-control" 
    //                 placeholder="Search Movie Title ..." 
    //                 id="movie-search-box" 
    //                 onKeyUp={handleInputChange} 
    //                 onClick={() => setShowSearchList(true)} 
    //             />


    //             {showSearchList && (
    //                 <div id="search-list" className="search-list">
    //                     {movieList.map((movie) => (
    //                         <div
    //                             key={movie.imdbID}
    //                             className="search-list-item"
    //                             onClick={() => fetchMovieDetails(movie.imdbID)}
    //                         >
    //                             <div className="search-item-thumbnail">
    //                                 <img src={movie.Poster !== "N/A" ? movie.Poster : "image_not_found.png"} alt="poster" />
    //                             </div>
    //                             <div className="search-item-info">
    //                                 <h3>{movie.Title}</h3>
    //                                 <p>{movie.Year}</p>
    //                             </div>
    //                         </div>
    //                     ))}
    //                 </div>
    //             )}

    //             {selectedMovie && (
    //                 <div id="result-grid" className="result-grid">
    //                     <div className="movie-poster">
    //                         <img
    //                             src={selectedMovie.Poster !== "N/A" ? selectedMovie.Poster : "image_not_found.png"}
    //                             alt="movie poster"
    //                         />
    //                     </div>
    //                     <div className="movie-info">
    //                         <h3 className="movie-title">{selectedMovie.Title}</h3>
    //                         <ul className="movie-misc-info">
    //                             <li className="year">Year: {selectedMovie.Year}</li>
    //                             <li className="rated">Ratings: {selectedMovie.Rated}</li>
    //                             <li className="released">Released: {selectedMovie.Released}</li>
    //                         </ul>
    //                         <p className="genre"><b>Genre:</b> {selectedMovie.Genre}</p>
    //                         <p className="writer"><b>Writer:</b> {selectedMovie.Writer}</p>
    //                         <p className="actors"><b>Actors:</b> {selectedMovie.Actors}</p>
    //                         <p className="plot"><b>Plot:</b> {selectedMovie.Plot}</p>
    //                         <p className="language"><b>Language:</b> {selectedMovie.Language}</p>
    //                         <p className="awards"><b><i className="fas fa-award"></i></b> {selectedMovie.Awards}</p>
    //                     </div>
    //                 </div>
    //             )}
    //         </div>
    //     </>
    //     );
    // };

    // export default App;


    import React from 'react'
import MovieSearch from './MovieSearch'
    
    const App = () => {
      return (
        <div>
          <MovieSearch/>
        </div>
      )
    }
    
    export default App
    