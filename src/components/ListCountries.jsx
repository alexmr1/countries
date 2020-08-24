import React, { Component } from "react";
import fetchCountries from "../api";

class ListCountries extends Component {
  state = {
    countries: [],
    isLoading: true,
    regions: [],
  };

  componentDidMount() {
    this.getListCountries();
  }

  // handleRegion(clickEvent) {
  //   console.dir(clickEvent);
  //   // const region = clickEvent.target.dataset.region;
  //   // return region;
  // }

  render() {
    const { isLoading, countries } = this.state;
    if (isLoading) return <p>loading ...</p>;

    return (
      <div>
        <button
          data-region="Africa"
          className="regionButton"
          onClick={this.getCountriesByRegion}
        >
          Africa
        </button>
        <button
          data-region="Americas"
          className="regionButton"
          onClick={this.getCountriesByRegion}
        >
          Americas
        </button>
        <button
          data-region="Asia"
          className="regionButton"
          onClick={this.getCountriesByRegion}
        >
          Asia
        </button>
        <button
          data-region="Europe"
          className="regionButton"
          onClick={this.getCountriesByRegion}
        >
          Europe
        </button>
        <button
          data-region="Oceania"
          className="regionButton"
          onClick={this.getCountriesByRegion}
        >
          Oceania
        </button>
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

  getCountriesByRegion(clickEvent) {
    const regionClicked = clickEvent.target.dataset.region;
    console.log(regionClicked);
    fetchCountries().then((data) => {
      const filteredCountries = data.filter(({ region }) => {
        return region === regionClicked;
      });

      return Promise.all(filteredCountries).then((countries) =>
        this.setState({ countries: countries, isLoading: false })
      );
    });
  }
}

export default ListCountries;
