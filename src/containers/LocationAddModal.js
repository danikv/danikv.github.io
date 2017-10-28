import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { addLocation } from '../actions/LocationActions'
import { v4 } from 'node-uuid'
import { BasicAddModalWithSelect } from '../components/BasicModals'
import Location from '../components/Location'
import { locationInputFormConfiguration } from './utils/CommonConfiguration'

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
        return locationInputFormConfiguration(this,
            this.state.name,
            this.state.address,
            this.state.lat,
            this.state.long,
            this.state.category)
    }

    fotterConfiguration() {
        return {
            onClick: this.addItem.bind(this),
            disabled: !this.validateInput() 
        }
    }

    open() {
        this.setState({
            lat: this.props.lat,
            long: this.props.long
        })
    }

    render() {
        return (
            <BasicAddModalWithSelect
                title='Add Location'
                showModal={ this.props.showModal }
                closeModal={ this.close.bind(this) }
                bodyConfiguration={ this.inputFormConfiguration() }
                footerConfiguration={ this.fotterConfiguration() }
                onEntered={ this.open.bind(this) } />      
        )
    }
}

AddModal.propTypes = {
    onAdd: PropTypes.func.isRequired,
    showModal: PropTypes.bool.isRequired,
    closeModal: PropTypes.func.isRequired,
    lat: PropTypes.number.isRequired,
    long: PropTypes.number.isRequired
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