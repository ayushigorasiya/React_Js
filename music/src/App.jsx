// src/App.jsx
import React, { useState } from "react";
import axios from "axios";
import ReactPlayer from "react-player";

function App() {
  const [searchQuery, setSearchQuery] = useState("");
  const [tracks, setTracks] = useState([]);
  const [selectedTrack, setSelectedTrack] = useState(null);
  const [accessToken, setAccessToken] = useState(null);

  // Spotify API credentials
  const CLIENT_ID = "YOUR_SPOTIFY_CLIENT_ID"; // Replace with your actual client ID
  const CLIENT_SECRET = "YOUR_SPOTIFY_CLIENT_SECRET"; // Replace with your actual client secret

  // Function to get access token using Spotify API (OAuth 2.0)
  const getAccessToken = async () => {
    // Base64 encode client credentials
    const encodedCredentials = btoa(CLIENT_ID + ":" + CLIENT_SECRET);

    try {
      // Fetch access token
      const response = await axios.post(
        "https://accounts.spotify.com/api/token",
        null,
        {
          params: {
            grant_type: "client_credentials",
          },
          headers: {
            Authorization: `Basic ${encodedCredentials}`,
            "Content-Type": "application/x-www-form-urlencoded",
          },
        }
      );

      setAccessToken(response.data.access_token);
    } catch (error) {
      console.error("Error fetching access token:", error.response ? error.response.data : error.message);
    }
  };

  // Fetching music tracks from Spotify API
  const searchMusic = async () => {
    if (!accessToken) {
      await getAccessToken();
    }

    try {
      const response = await axios.get("https://api.spotify.com/v1/search", {
        params: {
          q: searchQuery,
          type: "track",
          limit: 10,
        },
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      });

      setTracks(response.data.tracks.items);
    } catch (error) {
      console.error("Error fetching tracks:", error.response ? error.response.data : error.message);
    }
  };

  return (
    <div className="App">
      <h1>Music Search and Player</h1>

      {/* Search Input */}
      <input
        type="text"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        placeholder="Search for music..."
      />
      <button onClick={searchMusic}>Search</button>

      {/* Display Search Results */}
      <div>
        {tracks.length > 0 ? (
          <ul>
            {tracks.map((track) => (
              <li key={track.id} onClick={() => setSelectedTrack(track.preview_url)}>
                <img src={track.album.images[0].url} alt={track.name} width="50" />
                <span>{track.name} - {track.artists[0].name}</span>
              </li>
            ))}
          </ul>
        ) : (
          <p>No tracks found</p>
        )}
      </div>

      {/* Play Selected Track */}
      {selectedTrack && (
        <div>
          <h3>Now Playing:</h3>
          <ReactPlayer
            url={selectedTrack}
            playing={true}
            controls={true}
            width="100%"
            height="50px"
          />
        </div>
      )}
    </div>
  );
}

export default App;
