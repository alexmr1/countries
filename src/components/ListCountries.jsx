import React, { Component } from "react";
import fetchCountries from "../api";

class ListCountries extends Component {
  state = {
    countries: [],
    isLoading: true,
    regions: ["Africa", "Americas", "Asia", "Europe", "Oceania"],
  };

  componentDidMount() {
    this.getListCountries();
  }

  handleSorting = (clickEvent) => {
    const region = clickEvent.nativeEvent.target.innerHTML;
    this.getCountriesByRegion(region);
  };

  render() {
    const { isLoading, countries, regions } = this.state;
    if (isLoading) return <p>loading ...</p>;

    return (
      <div>
        {regions.map((region) => {
          return (
            <button
              className="regionButton"
              onClick={this.handleSorting}
              key={region}
            >
              {region}
            </button>
          );
        })}
        <ul className="countriesList">
          {countries.map((country) => {
            return (
              <li key={country.alpha3Code} className="indvCountry">
                <img
                  className="flagImage"
                  src={country.flag}
                  alt={`${country.name} flag`}
                />{" "}
                <p> Name: {country.name} </p>
                <p> Capital: {country.capital} </p>
              </li>
            );
          })}
        </ul>
      </div>
    );
  }

  getListCountries() {
    fetchCountries().then((data) => {
      this.setState({ countries: data, isLoading: false });
    });
  }

  getCountriesByRegion(region) {
    fetchCountries(region).then((data) => {
      this.setState({ countries: data, isLoading: false });
    });
  }
}

export default ListCountries;
