import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { removeLocation } from '../actions/LocationActions'
import { BasicRemoveModal } from '../components/BasicModals'
import Location from '../components/Location'

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
        return [{
            name: 'name',
            value: this.state.name
        },{
            name: 'address',
            value: this.state.address
        },{
            name: 'latitude',
            value: this.state.lat
        },{
            name: 'longitude',
            value: this.state.long
        },
        {
            name: 'category',
            value: this.state.category
        }]
    }

    render() {
        return (
            <BasicRemoveModal
                title='Remove Location'
                showModal={ this.props.showModal }
                closeModal={ () => this.close() }
                bodyConfiguration={ this.deleteFormConfiguration() }
                onSend={ () => this.removeItem() }
                onEntered={ () => this.open() }
                onSubmit={ (event) => this.submitItem(event) } />   
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