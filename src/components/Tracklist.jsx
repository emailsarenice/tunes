import React from 'react';
import Track from './track';

function Tracklist({tracks}) {


  return (
    <div id="tracklist">
      {
        tracks.map((track) => {
          return <Track track={track} key={track.id} />;
        })
      }
    </div>
  );
}

export default Tracklist;