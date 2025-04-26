import React, { useState } from 'react';
import './App.css';  // Importing the CSS file

const App = () => {
  const [username, setUsername] = useState('');
  const [userData, setUserData] = useState(null);
  const [error, setError] = useState(null);

  const handleSearch = async () => {
    if (!username) return;
    const url = `https://api.github.com/users/${username}`;

    try {
      const response = await fetch(url);
      if (!response.ok) throw new Error('User not found');
      const data = await response.json();
      setUserData(data);
      setError(null);
    } catch (err) {
      setError('User not found');
      setUserData(null);
    }
  };

  return (
    <div className="container">
      <h1 className="heading">GitHub User Search</h1>

      <div className="search-bar">
        <input
          type="text"
          placeholder="Enter GitHub username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="input"
        />
        <button onClick={handleSearch} className="btn">
          Search
        </button>
      </div>

      {error && <p className="error">{error}</p>}

      {userData && (
        <div className="user-card">
          <img src={userData.avatar_url} alt="Avatar" className="avatar" />
          <h2>{userData.name || 'No Name'}</h2>
          <p><strong>Username:</strong> {userData.login}</p>
          <p><strong>Followers:</strong> {userData.followers}</p>
          <p><strong>Public Repos:</strong> {userData.public_repos}</p>
          <p>
            <strong>Profile:</strong>{' '}
            <a href={userData.html_url} target="_blank" rel="noopener noreferrer" className="profile-link">
              {userData.html_url}
            </a>
          </p>
        </div>
      )}
    </div>
  );
};

export default App;
