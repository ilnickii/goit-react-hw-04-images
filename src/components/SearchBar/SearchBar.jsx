import React, { useState } from 'react';
import CSS from './SearchBar.module.css';

export const SearchBar = ({ onSubmit }) => {
  const [query, setQuery] = useState('');

  const handleChange = (e) => {
    setQuery(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!query.trim()) {
      alert('Please enter a valid search query.');
      return;
    }

    onSubmit(query);
    setQuery('');
  };

  return (
    <header className={CSS.Searchbar}>
      <form className={CSS.SearchForm} onSubmit={handleSubmit}>
        <button type="submit" className={CSS.SearchFormButton}>
          <span className={CSS.SearchFormButtonLabel}>Search</span>
        </button>

        <input
          className={CSS.SearchFormInput}
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
          value={query}
          onChange={handleChange}
        />
      </form>
    </header>
  );
};