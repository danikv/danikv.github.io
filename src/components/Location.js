import { Component } from 'react'

class Location extends Component
{
    constructor(props) {
        super(props)
        this.state = {
            key: "",
            name: "",
            address: "",
            lat: 0,
            long: 0,
            category: ""
        }
    }

    validateString(value) {
        const length = value.length
        if (length > 0) 
            return 'success'
        return 'error';
    }

    validateInput() {
        return  this.validateString(this.state.name) === 'success' &&
                this.validateString(this.state.address) === 'success' &&
                this.validateString(this.state.category) === 'success'
    }

    validateName() {
        return this.validateString(this.state.name)
    }

    validateAddress() {
        return this.validateString(this.state.address)
    }

    validateCategory() {
        return this.validateString(this.state.category)
    }

    validateLatitude() {
        if(this.state.lat < -90 || this.state.lat > 90)
            return 'error'
        return 'success'
    }

    validateLongitude() {
        if(this.state.long < -180 || this.state.long > 180)
            return 'error'
        return 'success'
    }

    handleNameChange(event) {
        this.setState({
            name: event.target.value 
        })
    }

    handleAddressChange(event) {
        this.setState({
            address: event.target.value 
        })
    }

    handleLatitudeChange(event) {
        this.setState({
            lat: event.target.value 
        })
    }

    handleLongitudeChange(event) {
        this.setState({
            long: event.target.value 
        })
    }

    handleCategoryChange(event) {
        this.setState({
            category: event.target.value
        })
    }

    close() {
        this.setState({ 
            name: "",
            address: "",
            lat: 0,
            long:0,
            category: ""
        })
        this.props.closeModal()
    }
}

export default Location