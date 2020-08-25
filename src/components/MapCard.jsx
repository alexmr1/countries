import React, { Component } from "react";
import { Map, Marker, TileLayer } from "react-leaflet";

class MapCard extends Component {
  render() {
    const position =
      this.props.currentLatLng.length !== 0
        ? this.props.currentLatLng
        : [53.472066, -2.238602];
    const zoom = this.props.currentLatLng.length !== 0 ? 5 : 50;
    return (
      <Map center={position} zoom={zoom}>
        <TileLayer
          attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={position}></Marker>
      </Map>
    );
  }
}

export default MapCard;
