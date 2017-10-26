import React, { 
    Component,
    Vibration 
} from 'react'
import propTypes from 'prop-types'
import { connect } from 'react-redux'
import ViewList from '../components/ViewList'
import {  } from 'react'

class Locations extends Component
{
    displayLocation(location) {
        return (
            <div>
                Name : { location.name },
                Address : { location.address },
                Latitude : { location.lat },
                Longitude : { location.long },
                Category : { location.category }
            </div>
        )
    }

    onClick(location) {
        Vibration.vibrate()
        this.props.onClick(location)
    }

    render() {
        return (
            <ViewList 
                items={ this.props.locations }
                onClick={ (location) => this.props.onClick(location) }
                getKey={ (location) => { return location.key } }
                displayFunction={ (location) => this.displayLocation(location) }
            />
        )
    }
}

Locations.propTypes = {
    locations: propTypes.array.isRequired,
    onClick: propTypes.func.isRequired
}

const mapStateToProps = (state, props) => {
    return {
        locations: state.locationReducer
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
    }
}

const LocationsContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(Locations)

export default LocationsContainer