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

class LocationsMainPage extends MainPageComponent
{

    onMapClick(lat,long) {
        console.log(lat + ' : ' + long)
    }

    render() {
        return(
            <div>
                <BasicNavbar configuration={ this.navBarConfiguration() } />
                <div style={{width: '50%', height: '100%'}} className="pull-right">
                        <LocationMainPage { ...this.mainPageConfiguration() } />
                </div>
                <div style={{width: '65em', height: '55em', marginright: '10px'}} >
                    <LocationMap 
                        defaultLocation={{ lat: 32, lng:34.8 }} 
                        defaultZoom={ 11 }
                        onMapClick={ (lat,long) => this.onMapClick(lat,long) } />
                </div>
            </div>
        )
    }
}

export default LocationsMainPage