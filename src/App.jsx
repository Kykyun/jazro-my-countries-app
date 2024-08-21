import React, { useState, useEffect } from 'react';
import CountryList from './components/CountryList';
import Header from './components/Header';
import { Link } from 'react-router-dom';

function App() {
  const [countries, setCountries] = useState([]);
  const [search, setSearch] = useState("");
  const [favorites, setFavorites] = useState(() => {
    const savedFavorites = localStorage.getItem('favorites');
    return savedFavorites ? JSON.parse(savedFavorites) : [];
  });

  useEffect(() => {
    fetch("https://restcountries.com/v2/all")
      .then((response) => response.json())
      .then((data) => setCountries(data));
  }, []);

  useEffect(() => {
    localStorage.setItem('favorites', JSON.stringify(favorites));
  }, [favorites]);

  const filteredCountries = countries.filter(
    (country) =>
      country.name.toLowerCase().includes(search.toLowerCase()) ||
      (country.capital &&
        country.capital.toLowerCase().includes(search.toLowerCase()))
  );

  const handleFavoriteClick = (country) => {
    setFavorites((prevFavorites) => {
      if (!prevFavorites.some(fav => fav.alpha3Code === country.alpha3Code)) {
        return [...prevFavorites, country];
      }
      return prevFavorites;
    });
  };

  return (
    <div className="flex-1">
      <Header />
      <div className="container mx-auto px-4 py-6">
        <div className="flex justify-between items-center mb-4">
          <Link to="/favorites" className="text-blue-500 hover:bg-blue-300 border border-blue-300 p-2 rounded-md">
            View Favorites
          </Link>
          <input
            type="text"
            placeholder="Search by name or capital..."
            className="p-2 border border-blue-300 rounded-md w-1/2"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
        <CountryList countries={filteredCountries} onFavoriteClick={handleFavoriteClick} />
      </div>
    </div>
  );
}

export default App;
