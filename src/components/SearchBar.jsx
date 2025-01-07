import React, { useState } from 'react';

function SearchBar(props) {

  const [search, setSearch] = useState('');

  const handleSearch = ({target}) => {
    setSearch(target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    props.onSearch(search);
  }

  return (
    <div id="search-bar">
      <form action="#" method="post" onSubmit={handleSubmit}>
        <div className="field">
          <input type="text" value={search} onChange={handleSearch} placeholder="Search" />
          <button type="submit">Go!</button>
        </div>
      </form>
    </div>
  );
}

export default SearchBar;