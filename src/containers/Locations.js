import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import ViewList from '../components/ViewList'
import FilterContainer from './Filter'
import { LabeledModalWithoutButtons, LabeledModalWithMultipleButtons } from '../components/BasicModals'
import { locationLabaledFormConfiguration } from './utils/CommonConfiguration'
import vibrate from '../Vibration'

var groupArray = require('group-array')

class Locations extends Component
{
    constructor(props) {
        super(props)
        this.state = {
            showDisplayModal: false,
            showViewModal: false,
            filterdLocations: []
        }
        this.locationClicked = {
            name: '',
            address: '',
            lat: 0,
            long: 0,
            category: ''
        }
    }
    
    componentDidMount() {
        this.setLocations(this.props.locations)
    }

    setLocations(locations) {
        this.setState({
            filterdLocations: locations
        })
    }

    componentWillReceiveProps(nextProps) {
        if(nextProps.filter !== this.props.filter || nextProps.location !== this.props.locations) {
            this.filterAndSetLocation(nextProps.locations, nextProps.filter)
        }
    }

    filterAndSetLocation(locations, filter) {
        this.setLocations(this.filter(locations,filter))
    }

    filter(locations, filter) {
        let filterdList = locations.slice()
        filterdList = this.filterByCategory(filterdList, filter.categoryFilter)
        filterdList = this.sortLocations(filterdList, filter.sortFilter)
        filterdList = this.groupByCategory(filterdList, filter.groupFilter)
        return filterdList
    }

    filterByCategory(locations, category) {
        if(category !== '') {
            return locations.filter(location => location.category === category)
        }
        return locations
    }

    sortLocations(locations, sort) {
        if(sort === true) {
            return locations.sort((a,b) => {
                return a.name > b.name
            })
        }
        return locations
    }

    groupByCategory(locations, group) {
        if(group === true) {
            let groupObject = groupArray(locations, 'category')
            let list = []
            Object.values(groupObject).map(x => list = list.concat(x));
            return list
        }
        return locations
    }

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
        this.locationClicked = location
        this.setState({
            showDisplayModal: true
        })
        vibrate(1000)
        this.props.onClick(location)
    }

    displayLocationOnMap() {
        this.closeDisplayModal()
        this.props.changeMapCetner(this.locationClicked.lat, this.locationClicked.long)
    }

    displayLocationOnModal() {
        this.closeDisplayModal()
        this.setState({
            showViewModal: true
        })
    }

    closeDisplayModal() {
        this.setState({
            showDisplayModal: false
        })
    }

    onSend() {
        this.setState({
            filteredLocations: this.filter(this.props.locations)
        })
        this.close()
    }

    onSubmit(event) {
        event.preventDefault()
        this.onSend()
    }

    closeViewModal() {
        this.setState({
            showViewModal: false
        })
    }

    labelFormConfiguration() {
        return locationLabaledFormConfiguration(this.locationClicked.name,
            this.locationClicked.address,
            this.locationClicked.lat,
            this.locationClicked.long,
            this.locationClicked.category)
    }

    labeledConfiguration() {
        return {
            configuration: [{
                name: "",
                description: "Choose where would you like to see the item"
            }]
        }
    }

    footerConfiguration() {
        return {
            items: [{
                configuration: {
                    onClick: this.displayLocationOnMap.bind(this)
                },
                name: 'Map'
            },{
                configuration: {
                    onClick: this.displayLocationOnModal.bind(this)
                },
                name: 'View'
            }]
        }
    }

    render() {
        return (
            <div>
                <FilterContainer />
                <div style={{ marginTop: '20px' }} >
                    <ViewList
                        items={ this.state.filterdLocations }
                        onClick={ (location) => this.onClick(location) }
                        getKey={ (location) => { return location.key } }
                        displayFunction={ (location) => this.displayLocation(location) }
                    />
                </div>
                <LabeledModalWithMultipleButtons
                    title='View Location'
                    showModal={ this.state.showDisplayModal }
                    closeModal={ this.closeDisplayModal.bind(this) }
                    bodyConfiguration={ this.labeledConfiguration() }
                    footerConfiguration={ this.footerConfiguration() }
                    onEntered={ () => {} } 
                />
                <LabeledModalWithoutButtons
                    title='View Location'
                    showModal={ this.state.showViewModal }
                    closeModal={ this.closeViewModal.bind(this) }
                    bodyConfiguration={ this.labelFormConfiguration() }
                    onEntered={ () => {} } 
                />   
            </div>
        )
    }
}

Locations.propTypes = {
    categories: PropTypes.array.isRequired,
    locations: PropTypes.array.isRequired,
    onClick: PropTypes.func.isRequired,
    changeMapCetner: PropTypes.func.isRequired,
    filter: PropTypes.object.isRequired
}

const mapStateToProps = (state, props) => {
    return {
        categories: state.categoryReducer,
        locations: state.locationReducer,
        filter: state.filterReducer
    }
}

const LocationsContainer = connect(
    mapStateToProps
)(Locations)

export default LocationsContainer