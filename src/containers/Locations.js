import React, { 
    Component
} from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import ViewList from '../components/ViewList'
import {
    Glyphicon,
    Button
} from 'react-bootstrap'
import { BasicAddModalWithSelect } from '../components/BasicModals'
var groupArray = require('group-array')

class Locations extends Component
{
    constructor(props) {
        super(props)
        this.state = {
            showModal: false,
            sorted: 'UnSorted',
            categoryFilter: '',
            groupedByCategory: 'UnGrouped',
            filteredLocations: []
        }
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
        this.props.changeMapCetner(location.lat, location.long)
        this.props.onClick(location)
    }

    filterClicked() {
        this.setState({
            showModal: true
        })
    }

    close() {
        this.setState({
            showModal: false
        })
    }

    handleCategoryFilterChange(event) {
        this.setState({
            categoryFilter: event.target.value
        })
    }

    handleGroupedChange(event) {
        this.setState({
            groupedByCategory: event.target.value
        })
    }

    handleSortedChanged(event) {
        this.setState({
            sorted: event.target.value
        })
    }

    inputFormConfiguration() {
        return {
            inputs: [],
            selects: [{
                validation: () => {},
                id: 'Category Filter',
                onChange: (event) => this.handleCategoryFilterChange(event),
                options: this.props.categories,
                value: this.state.categoryFilter
            },{
                validation: () => {},
                id: 'Grouped By Category',
                onChange: (event) => this.handleGroupedChange(event),
                options: ['Grouped' , 'UnGrouped'],
                value: this.state.groupedByCategory
            },{
                validation: () => {},
                id: 'Sorted By Alphabetic Order',
                onChange: (event) => this.handleSortedChanged(event),
                options: ['Sorted' , 'UnSorted'],
                value: this.state.sorted
            }]
        }
    }

    onSend() {
        this.setState({
            filteredLocations: this.filter(this.props.locations)
        })
        this.close()
    }

    componentDidMount() {
        this.setState({
            filteredLocations: this.filter(this.props.locations)
        })
    }

    componentWillReceiveProps(NextProps) {
        this.setState({
            filteredLocations: this.filter(NextProps.locations)
        })
    }

    filter(locations) {
        let filterdList = this.filterByCategory(locations,this.state.categoryFilter)
        filterdList = this.sortLocations(filterdList, this.state.sorted)
        filterdList = this.groupByCategory(filterdList, this.state.groupedByCategory)
        return filterdList
    }

    filterByCategory(locations, category) {
        if(category !== '') {
            return locations.filter(location => location.category === this.state.categoryFilter)
        }
        return locations
    }

    sortLocations(locations, sort) {
        if(sort === 'Sorted')
            return locations.sort((a,b) => {
                return a.name > b.name
            })
        return locations
    }

    groupByCategory(locations, group) {
        if(this.state.groupedByCategory === 'Grouped') {
            let groupObject = groupArray(locations, 'category')
            let list = []
            Object.values(groupObject).map(x => list = list.concat(x));
            return list
        }
        return locations
    }

    onSubmit(event) {
        event.preventDefault()
        this.onSend()
    }

    openModal() {
        this.setState({
            showModal: true
        })
    }

    render() {
        return (
            <div>
                <Button onClick={() => this.openModal() } bsStyle="primary">
                    <Glyphicon glyph="filter">
                        Filter Or Sort Locations
                    </Glyphicon>
                </Button>
                <BasicAddModalWithSelect 
                    title='Filter Location'
                    showModal={ this.state.showModal }
                    closeModal={ () => this.close() }
                    bodyConfiguration={ this.inputFormConfiguration() }
                    onSend={ () => this.onSend() }
                    validateInput={ () => {return true} } 
                    onSubmit={ (event) => this.submitItem(event) }
                    onEntered={ () => {} }
                />
                <div style={{ marginTop: '20px' }} >
                    <ViewList
                        items={ this.state.filteredLocations }
                        onClick={ (location) => this.onClick(location) }
                        getKey={ (location) => { return location.key } }
                        displayFunction={ (location) => this.displayLocation(location) }
                    />
                </div>
            </div>
        )
    }
}

Locations.propTypes = {
    locations: PropTypes.array.isRequired,
    categories: PropTypes.array.isRequired,
    onClick: PropTypes.func.isRequired,
    changeMapCetner: PropTypes.func.isRequired
}

const mapStateToProps = (state, props) => {
    return {
        locations: state.locationReducer,
        categories: state.categoryReducer
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