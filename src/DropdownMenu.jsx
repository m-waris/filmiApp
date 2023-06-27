import React from 'react';

const DropdownMenu = ({ sortBy, setSortBy, sortMovies }) => {
  const handleSortChange = (e) => {
    const selectedOption = e.target.value;
    setSortBy(selectedOption);
    sortMovies(selectedOption);
  };

  return (
    <div className="dropdown-menu">
      <h2 >Sort by:</h2>
      <select
        id="sort-dropdown"
        value={sortBy}
        onChange={handleSortChange}
      >
        <option value="default">Default</option>
        <option value="year">Year</option>
      </select>
    </div>
  );
};

export default DropdownMenu;
