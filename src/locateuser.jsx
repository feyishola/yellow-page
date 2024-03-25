import "mapbox-gl/dist/mapbox-gl.css";
import React, { useState, useEffect } from 'react';
import ReactMapGl, { Marker, Popup, NavigationControl, Source, Layer } from 'react-map-gl';
import env from "./config";
import CardComponent from "./card";


function LocateUser() {
  const [selectedBusiness, setSelectedBusiness] = useState([{ id: 1, location: { coordinates: [7.4184483, 10.5177515] } }]);
  const [isPopupOpen, setPopupOpen] = useState(false);
  const [selectedMarker, setSelectedMarker] = useState(null);

  const [viewport, setViewport] = useState({
    longitude: 7.4892974,
    latitude: 9.0643305,
    zoom: 6,
  });

  const [userLocation, setUserLocation] = useState({ longitude: 0, latitude:0 }); // testing with Lagos location 3.1995515  6.4733326
  const [route, setRoute] = useState(null);

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(position => {
      const { longitude, latitude } = position.coords;
       setUserLocation({ longitude, latitude }); //comment this to test with Lagos Location
      console.log({userLocation});
      setViewport({ longitude, latitude, zoom: 6 }); // Adjusted zoom level for better visibility
    }, () => {
      console.error("Error fetching the user's location");
    });
  }, []);

  const fetchDirections = (destination) => {
    const directionsUrl = `https://api.mapbox.com/directions/v5/mapbox/driving/${userLocation.longitude},${userLocation.latitude};${destination[0]},${destination[1]}?geometries=geojson&access_token=${env.REACT_APP_MAPBOX_TOKEN}`;

    fetch(directionsUrl)
      .then(response => response.json())
      .then(data => {
        if (data.routes && data.routes.length) {
          console.log({data});
          setRoute(data.routes[0].geometry);
        }
      })
      .catch(err => console.error('Error fetching directions:', err));
  };

  const handleMarkerClick = (business) => {
    setSelectedMarker(business);
    setPopupOpen(true);
    console.log({" destination coord":business.location.coordinates[0]});
    fetchDirections(business.location.coordinates);
  };

  return (
    <>
    
    <div className="flex flex-col md:flex-row gap-4 m-5 ">

    <div className="basis-1/4 p-5">
      <CardComponent/>
    </div>

    <div className="basis-1/2 md:w-3/5 h-90v md:h-90vh p-5">
      <div style={{ width: '65vw', height: '90vh', margin: 5, }}>
        <ReactMapGl
          {...viewport}
          mapboxAccessToken={env.REACT_APP_MAPBOX_TOKEN}
          mapStyle='mapbox://styles/mapbox/streets-v9'
          onMove={evt => setViewport(evt.viewState)}
        >
          <NavigationControl onViewportChange={setViewport} />

          {/* Marker for User's Current Location */}
          <Marker
            longitude={userLocation.longitude}
            latitude={userLocation.latitude}
            color="blue"
            offsetLeft={-20}
            offsetTop={-10}
          />
      {console.log({userLocation})}
          {selectedBusiness.map((business) => (
            <Marker
              key={business.id}
              longitude={business.location.coordinates[0]}
              latitude={business.location.coordinates[1]}
              color="red"
              onClick={() => handleMarkerClick(business)}
            />
          ))}
          {selectedMarker && isPopupOpen && (
            <Popup
              longitude={selectedMarker.location.coordinates[0]}
              latitude={selectedMarker.location.coordinates[1]}
              anchor="bottom"
              onClose={() => {
                setSelectedMarker(null);
                setPopupOpen(false);
              }}
              closeOnClick={false}
            >
              <div>
                <h2>Name: {selectedMarker.name}</h2>
                <p>Business: {selectedMarker.business}</p>
                <p>Phone number: {selectedMarker.phoneNumber}</p>
              </div>
            </Popup>
          )}

          {route && (
            <Source id="route" type="geojson" data={{ type: 'Feature', geometry: route }}>
              <Layer
                id="routeLayer"
                type="line"
                source="route"
                layout={{ 'line-join': 'round', 'line-cap': 'round' }}
                paint={{ 'line-color': '#1db7dd', 'line-width': 5 }}
              />
            </Source>
          )}
        </ReactMapGl>
      </div>
    </div>
    </div>
    </>
  );
}

export default LocateUser;
