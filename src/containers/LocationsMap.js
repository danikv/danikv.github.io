import Map from '../components/Map'
import { connect } from 'react-redux'

const mapStateToProps = (state, props) => {
    return {
        locations: state.locationReducer
    }
}

const LocationsMap = connect(
    mapStateToProps
)(Map)

export default LocationsMap