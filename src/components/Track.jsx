import React from 'react';

function Track({track}) {

  return (
    <div className="track" onClick={() => alert('clicked')}>
      <h4>{track.name}</h4>
      <span>{track.artist}</span>
      <span>&middot;</span>
      <span>{track.album}</span>
      <button>+</button>
    </div>
  );
}

export default Track;