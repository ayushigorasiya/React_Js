import React from 'react';
import './App.css';

const ResultList = ({ items }) => {
  if (!items.length) {
    return <p style={{ color: 'white', textAlign: 'center' }}>No songs found!</p>;
  }

  return (
    <ol className="results-list">
      {items.map((item, index) => (
        <li key={index} className="result-item">
          <div className="cover-bg" style={{ backgroundImage: `url(${item.artworkUrl100})` }}></div>
          <h1>{item.kind}</h1>
          <br />
          <img src={item.artworkUrl100} alt={item.trackName} />
          <h2>{item.trackName}</h2>
          <h3>{item.artistName}</h3>
          <p>{item.primaryGenreName}</p>
          {item.previewUrl && (
            <audio controls preload="none">
              <source src={item.previewUrl} type="audio/mpeg" />
            </audio>
          )}
        </li>
      ))}
    </ol>
  );
};

export default ResultList;