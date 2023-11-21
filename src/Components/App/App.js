import React, { useState } from 'react';
import './App.css';
import SearchBar from '../SearchBar/SearchBar';
import SearchResults from '../SearchResults/SearchResults';
import Playlist from '../Playlist/Playlist';

function App() {
  const [searchResults, setSearchResults] = useState([
    {
      name: 'Example Track Name',
      artist: 'Example Track Artist',
      album: 'Example Track Album',
      id: 1,
    },
    {
      name: 'Example Track Name 2',
      artist: 'Example Track Artist 2',
      album: 'Example Track Album 2',
      id: 2,
    },
  ]);

  const [playlistName, setPlaylistName] = useState('Example Playlist');

  const [playlistTracks, setPlaylistTracks] = useState([
    {
      name: 'Example Playlist Track Name',
      artist: 'Example Playlist Track Artist',
      album: 'Example Playlist Track Album',
      id: 3,
    },
    {
      name: 'Example Playlist Track Name 4',
      artist: 'Example Playlist Track Artist 4',
      album: 'Example Playlist Track Album 4',
      id: 4,
    },
  ]);

  return (
    <div>
      <h1>Ja<span className="highlight">mmm</span>ing</h1>
      <div className="App">
        {/* Add a SearchBar component */}
        <SearchBar />
        <div className="App-playlist">
          {/* Add a SearchResults component */}
          <SearchResults searchResults={searchResults} />
          {/* Add a Playlist component */}
          <Playlist />
        </div>
      </div>
    </div>
  );
}

export default App;
