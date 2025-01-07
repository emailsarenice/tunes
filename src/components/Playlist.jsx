import React, {useState} from 'react';
import Tracklist from './Tracklist';

function Playlist({tracks, title}) {

  const [name, setName] = useState(title);

  const handleTitleChange = ({target}) => {
    setName(target.value);
  };

  return (
    <div id="playlist">
      <form method="post" action="#">
        <input type="text" value={name} placeholder="Playlist Title" onChange={handleTitleChange} />
        <Tracklist tracks={tracks} />
        <button type="submit">Save to Spotify</button>
      </form>
    </div>
  );
}

export default Playlist;