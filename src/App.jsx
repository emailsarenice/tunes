import React, { useState } from 'react';
import SearchResults from './components/SearchResults';
import SearchBar from './components/SearchBar';
import Playlist from './components/Playlist';


const tracks = [
  {
    id: 1,
    name: 'Ride the lightning',
    artist: 'Jangus Karangus',
    album: 'The Purple Album'
  },
  {
    id: 2,
    name: 'Ride the hamster',
    artist: 'Porkus Karangus',
    album: 'The Green Album'
  },
  {
    id: 3,
    name: 'Check the drambus',
    artist: 'Jerry Seinfeld',
    album: 'The White Album'
  }
];

const playlistTracks = [tracks[0], tracks[2]];
const playlistTitle = "My playlist";

function App() {

  const handleSubmit = (search) => {
    alert(search);
  };

  const handlePlaylistAdd = (playlist) => {
    console.log(playlist);
  }

  return (
    <div id="app">
      <h1>Tunes!</h1>
      <div className="container">
        <div className="col col1">
          <SearchBar onSearch={handleSubmit} />
          <SearchResults results={tracks} onAddPlayList={handlePlaylistAdd} />
        </div>
        <div className="col col2">
          <Playlist tracks={playlistTracks} title={playlistTitle} onPlaylistAdd={handlePlaylistAdd} />
        </div>
      </div>
    </div>
  )
}

export default App;
