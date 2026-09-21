import { useState } from "react";

function SearchBar({ onSearch, isFetching }) {
  const [city, setCity] = useState("");

  function handleSubmit(event) {
    event.preventDefault();

    const trimmedCity = city.trim();

    if (!trimmedCity) {
      return;
    }

    onSearch(trimmedCity);
  }

  return (
    <form onSubmit={handleSubmit} className="search-form">
      <input
        type="text"
        placeholder="Enter city..."
        value={city}
        onChange={(event) => setCity(event.target.value)}
      />

      <button type="submit">
        Search
      </button>

      {isFetching && <span>Refreshing...</span>}
    </form>
  );
}

export default SearchBar;