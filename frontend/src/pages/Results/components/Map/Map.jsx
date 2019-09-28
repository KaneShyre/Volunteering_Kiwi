import React, { Component } from "react";
import ResultItem from "../ResultItem/ResultsItem";
import ApiService from "../../../../services/api.services"
import uuid from "uuid/v4"
import Layout, { LayoutColumn } from "@kiwicom/orbit-components/lib/Layout";
import "./Map.scss"
import {Link } from "react-router-dom"
import CurrentEvent from "../CurrentEvent/CurrentEvent";
const mapboxgl = require("mapbox-gl/dist/mapbox-gl.js");
const { getCode, getName } = require('country-list');


class Map extends Component {
  state = {
    map:null,
    items:[{id:uuid(),city:"Barcelona",country:"spain"},{id:uuid(),city:"Paris",country:"france"},{id:uuid(),city:"lahore",country:"pakistan"},],
    showEvent:false,
    currentEvent:{},
  };

  componentDidMount() {
    mapboxgl.accessToken = "pk.eyJ1IjoiaGFzc25pYW4iLCJhIjoiY2sxMzJmMXlnMDUzZDNocnNpZWJienZ3cCJ9.lt0SfKolHmWTzJwctnQwyA";
    const map = new mapboxgl.Map({
      container: "map",
      style: "mapbox://styles/hassnian/ck1383xjh0spu1cqv6rgeqp84",
      trackResize:true,
    });
    this.setState({map});
    this.renderAllPopUps()
  }

  resizeMap = ()=>{
    const state = {...this.state}
    state.map.resize();
    this.setState({map:state.map})
  }

  renderAllPopUps= ()=>{
    this.state.items.map(async ({country,city})=>{
      console.log(getCode(country));
      const response = await this.getDataOf({country,city});
      if(!response) return null
      const state = {...this.state}

       new mapboxgl.Popup({closeOnClick: false})
          .setLngLat([response.lon, response.lat])
          .setHTML('<p>Tech Conference</p>')
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

  showEvent = (id) =>{
    const state = {...this.state};
    state.items.forEach(item=>{
      if(item.id === id){
        this.setState({currentEvent:item})
      }
    })
    this.setState({showEvent:true})
  }
  zoom = async ({country,city})=>{
    const response = await this.getDataOf({country,city});
    if(!response) return null
    const state = {...this.state}
    state.map.flyTo({
      zoom: 9,
      center: [
        response.lon,
        response.lat],
      offset: [0,-200]
    });
    this.setState({map:state.map});
  };

  clickList = async ({country,city,id})=>{
    await this.zoom({country,city})
    setTimeout(()=>{
      this.showEvent(id);
    },4000)

  }


  render() {
    return (
      <div className="map-container">
        <CurrentEvent showEvent={this.state.showEvent} currentEvent={this.state.currentEvent}/>
            <div id="map" style={{ width: "80vw", height: "100vh" }} />
        <div>
            {this.state.items.map((item) => <ResultItem  key={uuid()} {...item} click={this.clickList} />)}
        </div>
      </div>
    );
  }
}


export default Map;
