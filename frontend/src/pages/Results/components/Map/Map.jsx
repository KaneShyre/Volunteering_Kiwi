import React, { Component } from "react";
import ResultItem from "../ResultItem/ResultsItem";
import ApiService from "../../../../services/api.services"
import uuid from "uuid/v4"
import Layout, { LayoutColumn } from "@kiwicom/orbit-components/lib/Layout";


const mapboxgl = require("mapbox-gl/dist/mapbox-gl.js");

class Map extends Component {
  state = {
    map:null,
    items:[{city:"Barcelona",country:"spain"},{city:"Paris",country:"france"},{city:"lahore",country:"pakistan"},]
  };

  componentDidMount() {
    mapboxgl.accessToken = "pk.eyJ1IjoiaGFzc25pYW4iLCJhIjoiY2sxMzJmMXlnMDUzZDNocnNpZWJienZ3cCJ9.lt0SfKolHmWTzJwctnQwyA";
    const map = new mapboxgl.Map({
      container: "map",
      style: "mapbox://styles/hassnian/ck1383xjh0spu1cqv6rgeqp84",
    });
    this.setState({map})
    this.renderAllPopUps()
  }

  renderAllPopUps= ()=>{
    this.state.items.map(async ({country,city})=>{
      const response = await this.getDataOf({country,city});
      if(!response) return null
      const state = {...this.state}

       new mapboxgl.Popup({closeOnClick: false})
          .setLngLat([response.lon, response.lat])
          .setHTML('<h1>Hello World!</h1>')
          .addTo(state.map);

      this.setState({map:state.map
      })
    })

  };
  getDataOf = async ({city,country})=>{
    const {data} = await ApiService.geo.getCoord(city,country)
    if(!data[0]) return null
    const lat = data[0].lat;
    const lon = data[0].lon;
    return {lat,lon}
  }
  zoom = async ({country,city})=>{
    const response = await this.getDataOf({country,city});
    if(!response) return null
    const state = {...this.state}
    state.map.flyTo({
      zoom: 9,
      center: [
        response.lon,
        response.lat]
    });
    this.setState({map:state.map});
  };


  render() {
    return (
      <div style={{maxWidth:"100% !important"}}>


        <Layout type="Booking"  >
          <LayoutColumn >
            <div id="map" style={{ width: "100%", height: "100%" }} />
          </LayoutColumn>
          <LayoutColumn style={{width:"100%"}}>
            {this.state.items.map((item) => <ResultItem key={uuid()} {...item} click={this.zoom} />)}
          </LayoutColumn>
        </Layout>
      </div>
    );
  }
}


export default Map;
