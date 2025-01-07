import React from 'react';

function SearchResults({results}) {

  const handleClick = (id) => {
    console.log(id);
  }

  return (
    <div id="search-results">
      {
        results.map((result, index) => {
          return (
            <div className="result" key={index} onClick={() => handleClick(result.id)}>
              <h4>{result.name}</h4>
              <span>{result.artist}</span>
              <span>&middot;</span>
              <span>{result.album}</span>
              <button>+</button>
            </div>
          )
        })
      }
    </div>
  );
}

export default SearchResults;