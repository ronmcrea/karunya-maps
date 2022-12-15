import React, { useEffect, useRef, useState } from "react";
import mapboxgl from "mapbox-gl";
import "./MAP.css";
import geoJson from "./karunya.json";
import axios from "axios";
import MapboxGeocoder from '@mapbox/mapbox-gl-geocoder';
import '@mapbox/mapbox-gl-geocoder/dist/mapbox-gl-geocoder.css'; 
mapboxgl.accessToken =
  "YOUR MAPBOX ACCESS TOKEN";

const MAP = () => {
  const mapContainerRef = useRef(null);

  const [lng, setLng] = useState(76.7435);
  const [lat, setLat] = useState(10.9351);
  const [zoom, setZoom] = useState(16.9);
  const [data, setData] = useState(null);
  const getData = async () => {
    const value = await axios.get('API LINK');
    console.log(value);
    setData(value.data[0]);
  };
  useEffect(() => {
    getData();
  }, []); // <- add empty brackets here

  // Initialize map when component mounts
  useEffect(() => {
    if(data){
    const map = new mapboxgl.Map({
      container: mapContainerRef.current,
      style: "mapbox://styles/legion-2314/cl3x6semc000k15mqdzgudkfa",
      center: [lng, lat],
      zoom: zoom,
    });
    
      geoJson.features.map((feature) =>
      new mapboxgl.Marker()
        .setLngLat([
          feature.geometry.coordinates[0],
          feature.geometry.coordinates[1],
        ])
        .addTo(map)
        .setPopup(
          new mapboxgl.Popup({ offset: 30 }).setHTML(
            "<h4>" +
              feature.properties.title +
              "</h4>" +

              "<div>Temperature : " +
              data.ATavg_degC +
              " °C</div> " +
              "<div>Relative Humidity : " +
              data.RHavg_percentage +
              " %</>"
          )
        )
    );
    

    // Add navigation control (the +/- zoom buttons)
    map.addControl(new mapboxgl.NavigationControl(), "top-right");

    map.on("move", () => {
      setLng(map.getCenter().lng.toFixed(4));
      setLat(map.getCenter().lat.toFixed(4));
      setZoom(map.getZoom().toFixed(2));
    });
    function forwardGeocoder(query) {
      const matchingFeatures = [];
      for (const feature of geoJson.features) {
      
      if (
      feature.properties.title
      .toLowerCase()
      .includes(query.toLowerCase())
      ) {
      
      feature['place_name'] = ` ${feature.properties.title}`;
      feature['center'] = feature.geometry.coordinates;
      feature['place_type'] = ['park'];
      matchingFeatures.push(feature);
      }
      }
      return matchingFeatures;
      }  
      map.addControl(
        new MapboxGeocoder({
        accessToken: mapboxgl.accessToken,
        
        localGeocoder: forwardGeocoder,
        zoom: 19.50,
        marker:false,
        placeholder: ' Search ',
        mapboxgl: mapboxgl
        }),'top-left'
        );
    // Clean up on unmount
    return () => map.remove();
  }
   
  }, [data]); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <div>
      <div className="sidebarStyle">
        <div>
          Longitude: {lng} | Latitude: {lat} | Zoom: {zoom}
        </div>
      </div>
      <div className="map-container" ref={mapContainerRef} />
    </div>
  );
};

export default MAP;
