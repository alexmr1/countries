import React from "react";

const CountryCard = (props) => {
  return (
    <ul>
      {props.countries.map((country) => {
        return (
          <li key={country.alpha3Code} className="indvCountry">
            <img
              href="#"
              className="flagImage"
              src={country.flag}
              alt={`${country.name} flag`}
              onClick={() => {
                props.handleCardClick(country);
              }}
            />{" "}
            <p> Name: {country.name} </p>
            <p> Capital: {country.capital} </p>
          </li>
        );
      })}
    </ul>
  );
};

export default CountryCard;
