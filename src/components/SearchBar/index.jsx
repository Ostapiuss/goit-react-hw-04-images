import { useState } from "react";

import { ReactComponent as SearchIcon } from '../../assets/search.svg';

import './style.scss';

const SearchBar = ({ getSearchData }) => {
  const [searchText, setSearchText] = useState(null);

  const onSubmit = (event) => {
    event.preventDefault();

    if (searchText) {
      getSearchData(searchText);
    }
  }

  const handleChange = (changeEvent) => {
    const { value } = changeEvent.target;

    setSearchText(value);
  }


  return (
    <header className="Searchbar">
      <form className="SearchForm" onSubmit={onSubmit}>
        <button type="submit" className="SearchForm-button">
          <SearchIcon className="SearchForm-icon" />
        </button>
        <input
          className="SearchForm-input"
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
          onChange={handleChange}
        />
      </form>
    </header>
  )
}

export default SearchBar;
