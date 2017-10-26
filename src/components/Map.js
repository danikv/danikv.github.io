import React from 'react';
import GoogleMap from 'google-map-react';
import MapMarker from './MapMarker'

const Map = ({ defaultLocation, defaultZoom, locations, onMapClick }) => (
    <GoogleMap
        bootstrapURLKeys={{
            key: 'AIzaSyC9qRIsrOUlbDtuJUiJGRBbfogIn4PxER4'
        }}
        defaultCenter={ defaultLocation }
        defaultZoom={ defaultZoom }
        onClick={ (mapLocation) => onMapClick(mapLocation.lat, mapLocation.lng)} >

        { locations.map(location => (
            <MapMarker key={ location.key }
                lat={location.lat}
                lng={location.long}
                text={location.name}
            />
        ))}

    </GoogleMap>
)

export default Map