import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { addLocation } from '../actions/LocationActions'
import { v4 } from 'node-uuid'
import { BasicAddModalWithSelect } from '../components/BasicModals'
import Location from '../components/Location'

class AddModal extends Location
{
    addItem() {

        const location = {
            key: v4(),
            name: this.state.name,
            address: this.state.address,
            lat: this.state.lat,
            long: this.state.long,
            category: this.state.category
        }
        this.props.onAdd(location)
        this.close()
    }

    submitItem(event) {
        event.preventDefault()
        if(!this.validateInput())
            return
        this.addItem()
    }
    
    inputFormConfiguration() {
        return {
            inputs: [{
                validationMessage: 'name cannot be empry',
                validation: () => this.validateName(),
                id: 'name',
                onChange: (event) => this.handleNameChange(event),
                value: this.state.name
            },
            {
                validationMessage: 'address cannot be empry',
                validation: () => this.validateAddress(),
                id: 'address',
                onChange: (event) => this.handleAddressChange(event),
                value: this.state.address
            },
            {
                validationMessage: 'latitude cannot be empry',
                validation: () => this.validateLatitude(),
                id: 'Latitude',
                onChange: (event) => this.handleLatitudeChange(event),
                value: this.state.lat
            },
            {
                validationMessage: 'longitude cannot be empry',
                validation: () => this.validateLongitude(),
                id: 'Longitude',
                onChange: (event) => this.handleLongitudeChange(event),
                value: this.state.long
            }
            ],
            select: {
                validationMessage: 'category cannot be empry',
                validation: () => this.validateCategory(),
                id: 'category',
                onChange: (event) => this.handleCategoryChange(event),
                options: this.props.categories,
                value: this.state.category
            }
        }
    }

    render() {
        return (
            <BasicAddModalWithSelect
                title='Add Location'
                showModal={ this.props.showModal }
                closeModal={ () => this.close() }
                bodyConfiguration={ this.inputFormConfiguration() }
                onSend={ () => this.addItem() }
                validateInput={ () => this.validateInput() }
                onSubmit={ (event) => this.submitItem(event) } />      
        )
    }
}

AddModal.propTypes = {
    onAdd: PropTypes.func.isRequired,
    showModal: PropTypes.bool.isRequired,
    closeModal: PropTypes.func.isRequired
}

const mapStateToProps = (state, props) => {
    return {
        categories: state.categoryReducer
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onAdd: (category) => {
            dispatch(addLocation(category))
        }
    }
}

const LocationAddModal = connect(
    mapStateToProps,
    mapDispatchToProps
)(AddModal)

export default LocationAddModal