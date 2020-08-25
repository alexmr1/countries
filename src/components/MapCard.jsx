import React, { Component } from "react";
import { Map, Marker, TileLayer } from "react-leaflet";

class MapCard extends Component {
  render() {
    const position =
      this.props.currentLatLng.length !== 0
        ? this.props.currentLatLng
        : [53.4, -2.2];

    return (
      <Map center={position} zoom={5}>
        <TileLayer
          attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {/* <ZoomControl position="topright" /> */}
        <Marker position={position}></Marker>
      </Map>
    );
  }
}

export default MapCard;
