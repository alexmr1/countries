import React, { Component } from "react";
import fetchCountries from "../api";

class ListCountries extends Component {
  state = {
    countries: [],
  };

  componentDidMount() {
    this.getListCountries();
  }

  render() {
    console.log(this.state.countries);
    return (
      <div>
        <button onClick={this.getListCountries}>Click me</button>
        <ul>
          {/* {this.state.countries.map((country) => {
            return <li>{country}</li>;
          })} */}
        </ul>
      </div>
    );
  }

  getListCountries() {
    fetchCountries().then((data) => {
      this.setState({ countries: data });
    });
  }
}

export default ListCountries;
