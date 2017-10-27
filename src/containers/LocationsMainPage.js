import React from 'react'
import LocationAddModal from './LocationAddModal'
import LocationEditModal from './LocationEditModal'
import LocationRemoveModal from './LocationRemoveModal'
import LocationsContainer from './Locations'
import BasicOperations from '../components/BasicOperations'
import BasicNavbar from '../components/BasicNavbar'
import MainPageComponent from '../components/MainPageComponent'
import LocationMap from './LocationsMap'

const LocationMainPage = BasicOperations(
    LocationAddModal,
    LocationEditModal,
    LocationRemoveModal,
    LocationsContainer
)

const mapStyle = {
    width: '48%',
    height: '86vh'
}

const listStype = {
    width: '50%'
}

class LocationsMainPage extends MainPageComponent
{
    constructor(props) {
        super(props)
        this.state = {
            ...this.state,
            lat: 0,
            long: 0,
            center: [
                32,
                34.8
            ]
        }
    }

    locationMainPageConfiguration() {
        let configuration = this.mainPageConfiguration()
        configuration.add = {
            ...configuration.add,
            lat: this.state.lat,
            long: this.state.long
        }
        configuration.view = {
            ...configuration.view,
            changeMapCetner: this.changeMapCetner.bind(this)
        }
        return configuration
    }

    onChange(location) {
        this.setState({
            center: location.center
        })
    }

    onMapClick(lat, long) {
        this.setState({
            lat: lat,
            long: long
        })
    }

    changeMapCetner(lat, long) {
        this.setState({
            center: [
                lat,
                long
            ]
        })
    }

    render() {
        return(
            <div>
                <BasicNavbar configuration={ this.navBarConfiguration() } />
                <div style={ listStype } className="pull-right">
                    <LocationMainPage { ...this.locationMainPageConfiguration() } />
                </div>
                <div style={ mapStyle } >
                        <LocationMap
                                onChange={ this.onChange.bind(this) }
                                center={ this.state.center }
                                defaultZoom={ 11 }
                                onMapClick={ (lat,long) => this.onMapClick(lat,long) } />
                                
                </div>
            </div>
        )
    }
}

export default LocationsMainPage