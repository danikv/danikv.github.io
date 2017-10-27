import React from 'react';
import GoogleMap from 'google-map-react';
import MapMarker from './MapMarker'

const Map = (props) => (
    <GoogleMap
        bootstrapURLKeys={{
            key: 'AIzaSyC9qRIsrOUlbDtuJUiJGRBbfogIn4PxER4'
        }}
        onChange={ (mapLocation) => props.onChange(mapLocation) }
        center={ props.center }
        defaultZoom={ props.defaultZoom }
        onClick={ (mapLocation) => {
            props.onMapClick(mapLocation.lat, mapLocation.lng)
        }}
    >

        { props.locations.map(location => (
            <MapMarker key={ location.key }
                lat={location.lat}
                lng={location.long}
                text={location.name}
            />
        ))}

    </GoogleMap>
)

export default Map