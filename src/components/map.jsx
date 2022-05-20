import React, {useEffect, Fragment} from 'react'
import '../css/map.css'

const Map = () => {
  useEffect(() => {
    // Initialize and add the map
    function initMap() {
      // The location of Uluru
      const deland = { lat: 29.028318, lng: -81.303116 };
      // The map, centered at deland
      const map = new google.maps.Map(document.getElementById("map"), {
        zoom: 9,
        center: deland,
      });
      // The marker, positioned at deland
      const marker = new google.maps.Marker({
        position: deland,
        map: map,
      });
    }
    window.initMap = initMap
  }, [])

  return (
    <div className="map-container">
      <div id="map"></div>
    </div>
  )
}

export default Map
