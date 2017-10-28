import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { removeLocation } from '../actions/LocationActions'
import { BasicRemoveModal } from '../components/BasicModals'
import Location from '../components/Location'
import { locationLabaledFormConfiguration } from './utils/CommonConfiguration'

class RemoveModal extends Location
{
    removeItem() {
        this.props.onRemove(this.state)
        this.close()
    }

    open() {
        this.setState({
            ...this.props.itemClicked
        })
    }

    submitItem(event) {
        event.preventDefault()
        this.removeItem()
    }

    deleteFormConfiguration() {
        return locationLabaledFormConfiguration(this.state.name,
            this.state.address,
            this.state.lat,
            this.state.long,
            this.state.category)
    }

    footerConfiguration() {
        return {
            onClick: this.removeItem.bind(this)
        } 
    }

    render() {
        return (
            <BasicRemoveModal
                title='Remove Location'
                showModal={ this.props.showModal }
                closeModal={ this.close.bind(this) }
                bodyConfiguration={ this.deleteFormConfiguration() }
                footerConfiguration={ this.footerConfiguration() }
                onEntered={ this.open.bind(this) } />   
        )
    }
}

RemoveModal.propTypes = {
    onRemove: PropTypes.func.isRequired,
    showModal: PropTypes.bool.isRequired,
    closeModal: PropTypes.func.isRequired,
    itemClicked: PropTypes.object.isRequired
}

const mapStateToProps = (state, props) => {
    return {
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onRemove: (location) => {
            dispatch(removeLocation(location))
        }
    }
}

const LocationRemoveModal = connect(
    mapStateToProps,
    mapDispatchToProps
)(RemoveModal)

export default LocationRemoveModal