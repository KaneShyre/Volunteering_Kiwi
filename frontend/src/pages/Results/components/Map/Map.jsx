import React, { Component } from "react";
import ResultItem from "../ResultItem/ResultsItem";
import ApiService from "../../../../services/api.services"
import uuid from "uuid/v4"
import Layout, { LayoutColumn } from "@kiwicom/orbit-components/lib/Layout";


const mapboxgl = require("mapbox-gl/dist/mapbox-gl.js");

class Map extends Component {
  state = {
    map:null,
    items:[1,1,1,1,1,1,1,1,1,1]
  }

  componentDidMount() {
    mapboxgl.accessToken = "pk.eyJ1IjoiaGFzc25pYW4iLCJhIjoiY2sxMzJmMXlnMDUzZDNocnNpZWJienZ3cCJ9.lt0SfKolHmWTzJwctnQwyA";
    const map = new mapboxgl.Map({
      container: "map",
      style: "mapbox://styles/hassnian/ck1383xjh0spu1cqv6rgeqp84",
    });
    this.setState({map})
  }

  zoom = async ()=>{
    const {data} = await ApiService.geo.getCoord("bogota")
    const lat = data[0].lat;
    const lon = data[0].lon;
    this.state.map.flyTo({
      zoom: 9,
      center: [
        lon,
        lat]
    });
    console.log(lat,lon)
  };


  render() {
    return (
      <div style={{maxWidth:"100% !important"}}>


        <Layout type="Booking"  >

          <LayoutColumn style={{width:"100%"}}>
            <div id="map" style={{ width: "100%", height: "100%" }} />
          </LayoutColumn>
          <LayoutColumn style={{width:"100%"}}>
            {this.state.items.map((item) => <ResultItem key={uuid()} click={this.zoom} />)}
          </LayoutColumn>
        </Layout>
      </div>
    );
  }
}


export default Map;
