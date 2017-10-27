import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import ViewList from '../components/ViewList'
import {
    Button,
    Modal,
    FormGroup,
    ControlLabel,
    Form
} from 'react-bootstrap'
import BasicRemoveForm from '../components/BasicRemoveForm'
import FilterContainer from './Filter'

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

    deleteFormConfiguration() {
        return [{
            name: 'name',
            value: this.locationClicked.name
        },{
            name: 'address',
            value: this.locationClicked.address
        },{
            name: 'latitude',
            value: this.locationClicked.lat
        },{
            name: 'longitude',
            value: this.locationClicked.long
        },
        {
            name: 'category',
            value: this.locationClicked.category
        }]
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
                <Modal show={ this.state.showDisplayModal } onHide={ () => this.closeDisplayModal() }>
                    <Modal.Title>
                        View Location
                    </Modal.Title>
                    <Modal.Body>
                        <Form>
                            <FormGroup key={ 1 } controlId="formBasicText">
                                <ControlLabel>Do you want to see the item in the map or in the view ? </ControlLabel>
                            </FormGroup>
                        </Form>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button onClick={ () => this.displayLocationOnMap() } pullLeft> Map </Button>
                        <Button onClick={ () => this.displayLocationOnModal() } pullRight> View </Button>
                    </Modal.Footer>
                </Modal>
                <Modal show={ this.state.showViewModal } onHide={ () => this.closeViewModal() }>
                    <Modal.Title>
                        View Location
                    </Modal.Title>
                    <Modal.Body>
                        <BasicRemoveForm configuration={ this.deleteFormConfiguration() } />
                    </Modal.Body>
                </Modal>
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