import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { editLocation } from '../actions/LocationActions'
import { BasicEditModalWithSelect } from '../components/BasicModals'
import Location from '../components/Location'
import { locationInputFormConfiguration } from './utils/CommonConfiguration'

class EditModal extends Location 
{
    editItem() {
        const location = {
            key: this.oldValue.key,
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
        return locationInputFormConfiguration(this,
            this.state.name,
            this.state.address,
            this.state.lat,
            this.state.long,
            this.state.category)
    }

    footerConfiguration() {
        return {
            onClick: this.editItem.bind(this),
            disabled: !this.validateInput() 
        } 
    }

    render() {
        return (
            <BasicEditModalWithSelect
                title='Edit Location'
                showModal={ this.props.showModal }
                closeModal={ () => this.close() }
                bodyConfiguration={ this.inputFormConfiguration() }
                footerConfiguration={ this.footerConfiguration() }
                onEntered={ this.open.bind(this) }
                 />      
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