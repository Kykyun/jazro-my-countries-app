import React from "react";

function CountryTable({ countries }) {
    return (
    <table className="table-auto w-full">
        <thead>
        <tr className="bg-slate-300 shadow-md">
            <th className="px-4 py-2">Name</th>
            <th className="px-4 py-2">Region</th>
            <th className="px-4 py-2">Capital</th>
            <th className="px-4 py-2">Flag</th>
        </tr>
      </thead>
      <tbody className="bg-gray-50">
        {countries.map((country) => (
          <tr key={country.alpha3Code} className="hover:bg-blue-300">
            <td className="border px-4 py-2">{country.name}</td>
            <td className="border px-4 py-2">{country.region}</td>
            <td className="border px-4 py-2">{country.capital}</td>
            <td className="border px-4 py-2">
              <img
                src={country.flags.png}
                alt={`Flag of ${country.name}`}
                className="w-16 h-auto"
              />
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default CountryTable;
