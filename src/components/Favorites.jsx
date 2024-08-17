import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Favorites = () => {
  const [favorites, setFavorites] = useState(JSON.parse(localStorage.getItem('favorites')) || []);

  const deleteCountry = (alpha3Code) => {
    const updatedFavorites = favorites.filter(country => country.alpha3Code !== alpha3Code);
    setFavorites(updatedFavorites);
    localStorage.setItem('favorites', JSON.stringify(updatedFavorites));
  };

  const clearFavorites = () => {
    setFavorites([]);
    localStorage.removeItem('favorites');
  };

  return (
    <div className="container mx-auto px-4 py-6">
        <header className="text-2xl font-bold rounded-md mb-4">
        <h1>Favorite Countries</h1>
        </header>
      <Link
        to="/"
        className="text-blue-500 hover:bg-blue-300 border border-blue-300 p-2 rounded-md mr-4 mt-6"
      >
        Back to Home
      </Link>
      {favorites.length > 0 ? (
        <>
          <button
            onClick={clearFavorites}
            className="bg-red-500 text-white px-4 py-2 rounded mb-4 hover:bg-red-600"
          >
            Delete All
          </button>
          <table className="table-auto w-full">
            <thead>
              <tr className="bg-slate-300">
                <th className="px-4 py-2">Name</th>
                <th className="px-4 py-2">Region</th>
                <th className="px-4 py-2">Capital</th>
                <th className="px-4 py-2">Flag</th>
                <th className="px-4 py-2">Action</th>
              </tr>
            </thead>
            <tbody className="bg-gray-50">
              {favorites.map((country) => (
                <tr key={country.alpha3Code}>
                  <td className="border px-4 py-2">{country.name}</td>
                  <td className="border px-4 py-2">{country.region}</td>
                  <td className="border px-4 py-2">{country.capital}</td>
                  <td className="border px-4 py-2 text-center">
                    <img
                      src={country.flags.png}
                      alt={`Flag of ${country.name}`}
                      className="w-20 h-auto mx-auto"
                    />
                  </td>
                  <td className="border px-4 py-2 text-center">
                    <button
                      onClick={() => deleteCountry(country.alpha3Code)}
                      className="px-4 py-2 border border-red-500 text-red-500 hover:bg-red-100 rounded"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </>
      ) : (
        <p className='mt-6 text-red-600'>No favorites selected :( </p>
      )}
    </div>
  );
};

export default Favorites;
