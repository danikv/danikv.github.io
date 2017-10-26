import React from 'react'
import Marker from '../assets/map_orange_icon.svg'
import { ControlLabel } from 'react-bootstrap'

const MapMarker = ({ text }) => (
    <div>
        <img src={ Marker } alt="marker svg" style={{width: "3em"}}/>
        <ControlLabel> { text } </ControlLabel>
    </div>
)

export default MapMarker