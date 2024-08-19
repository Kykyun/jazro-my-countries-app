import React, { useState } from 'react';

const CountryList = ({ countries, onFavoriteClick }) => {
  const [popupMessage, setPopupMessage] = useState('');
  const [showPopup, setShowPopup] = useState(false);

  const handleFavoriteClick = (country) => {
    onFavoriteClick(country);
    setPopupMessage(`${country.name} added to favorites!`);
    setShowPopup(true);
    setTimeout(() => setShowPopup(false), 2500); // Hide popup after 2.5` seconds
  };

  return (
    <div className="relative">
      {showPopup && (
        <div className="absolute top-0 left-0 w-full p-4 bg-green-500 text-white text-center rounded shadow-lg z-50">
          {popupMessage}
        </div>
      )}
      <table className="table-auto w-full rounded">
        <thead>
          <tr className="bg-slate-300">
            <th className="px-4 py-2">Name</th>
            <th className="px-4 py-2">Region</th>
            <th className="px-4 py-2">Capital</th>
            <th className="px-4 py-2">Flag</th>
            <th className="px-4 py-2">Favorite</th>
          </tr>
        </thead>
        <tbody className="bg-gray-50">
          {countries.map((country) => (
            <tr key={country.alpha3Code}>
              <td className="border px-4 py-2">{country.name}</td>
              <td className="border px-4 py-2">{country.region}</td>
              <td className="border px-4 py-2">{country.capital}</td>
              <td className="border px-4 py-2">
                <img
                  src={country.flags.png}
                  alt={`Flag of ${country.name}`}
                  className="w-20 h-auto"
                />
              </td>
              <td className="border px-6 py-2 text-center">
                <button
                  className="px-4 py-2 border border-red-500 text-red-500 hover:bg-red-100 rounded"
                  onClick={() => handleFavoriteClick(country)}
                >
                  Add
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CountryList;
