import { useState } from "react";
import { useQuery } from "@tanstack/react-query";

import { fetchWeather } from "./api/weatherApi";
import SearchBar from "./components/SearchBar";
import WeatherCard from "./components/WeatherCard";

function App() {
  const [city, setCity] = useState("");

  const {
    data,
    error,
    isLoading,
    isError,
    isFetching,
    refetch,
  } = useQuery({
    queryKey: ["weather", city],

    queryFn: () => fetchWeather(city),

    enabled: Boolean(city),

    staleTime: 5 * 60 * 1000,

    retry: 3,

    retryDelay: (attemptIndex) =>
      Math.min(1000 * 2 ** attemptIndex, 30000),
  });

  function handleSearch(newCity) {
    setCity(newCity);
  }

  return (
    <div className="app">
      <h1>Weather App</h1>

      <SearchBar
        onSearch={handleSearch}
        isFetching={isFetching}
      />

      {isLoading && (
        <p className="status">
          Loading weather...
        </p>
      )}

      {isError && (
        <div className="error">
          <p>{error.message}</p>

          <button onClick={() => refetch()}>
            Try Again
          </button>
        </div>
      )}

      {data && (
        <>
          <WeatherCard data={data} />

          {isFetching && (
            <p className="refreshing">
              Updating weather...
            </p>
          )}

          <button
            className="refresh-button"
            onClick={() => refetch()}
            disabled={isFetching}
          >
            {isFetching ? "Refreshing..." : "Refresh"}
          </button>
        </>
      )}
    </div>
  );
}

export default App;