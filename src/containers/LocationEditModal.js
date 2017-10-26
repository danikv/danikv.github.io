import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { editLocation } from '../actions/LocationActions'
import { BasicEditModalWithSelect } from '../components/BasicModals'
import Location from '../components/Location'

class EditModal extends Location 
{
    editItem() {
        const location = {
            name: this.state.name,
            address: this.state.address,
            lat: this.state.lat,
            long: this.state.long,
            category: this.state.category
        }
        this.props.onEdit(this.oldValue, location)
        this.close()
    }

    submitItem(event) {
        event.preventDefault()
        if(!this.validateInput())
            return
        this.editItem()
    }

    open() {
        this.setState({
            ...this.props.itemClicked
        })
        this.oldValue = this.props.itemClicked
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
            }],
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
            <BasicEditModalWithSelect
                title='Edit Location'
                showModal={ this.props.showModal }
                closeModal={ () => this.close() }
                bodyConfiguration={ this.inputFormConfiguration() }
                onSend={ () => this.editItem() }
                validateInput={ () => this.validateInput() } 
                onEntered={ () => this.open() }
                onSubmit={ (event) => this.submitItem(event) } />      
        )
    }
}

EditModal.propTypes = {
    onEdit: PropTypes.func.isRequired,
    showModal: PropTypes.bool.isRequired,
    closeModal: PropTypes.func.isRequired,
    itemClicked: PropTypes.object.isRequired
}

const mapStateToProps = (state, props) => {
    return {
        categories: state.categoryReducer
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onEdit: (oldLocation, newLocation) => {
            dispatch(editLocation(oldLocation, newLocation))
        }
    }
}

const LocationEditModal = connect(
    mapStateToProps,
    mapDispatchToProps
)(EditModal)

export default LocationEditModal