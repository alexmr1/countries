import React, { Component } from "react";
import fetchCountries from "../api";
import CountryCard from "./CountryCard";
import MapCard from "./MapCard";

class ListCountries extends Component {
  state = {
    countries: [],
    isLoading: true,
    regions: ["Africa", "Americas", "Asia", "Europe", "Oceania"],
    currentLatLng: [],
  };

  componentDidMount() {
    this.getListCountries();
  }

  handleSorting = (clickEvent) => {
    const region = clickEvent.nativeEvent.target.innerHTML;
    this.getCountriesByRegion(region);
  };

  handleCardClick = ({ latlng }) => {
    // console.log("clicked");
    this.setState({ currentLatLng: latlng });
  };

  render() {
    const { isLoading, countries, regions, currentLatLng } = this.state;
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
        <div className="mapCountry">
          <MapCard currentLatLng={currentLatLng} />
        </div>
        <CountryCard
          countries={countries}
          handleCardClick={this.handleCardClick}
        />
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
