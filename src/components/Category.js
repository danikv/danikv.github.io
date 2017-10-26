import { Component } from 'react'

class Category extends Component
{
    constructor(props) {
        super(props)
        this.state = {
            category: ""
        }
    }

    validateCategory() {
        const length = this.state.category.length
        if(length > 0 && this.props.categories.indexOf(this.state.category) === -1) {
            return 'success'
        }
        return 'error'
    }

    validateInput() {
        return this.validateCategory() === 'success'
    }

    categoryChange(event) {
        this.setState({ category: event.target.value })
    }

    close() {
        this.setState({ 
            category: "" 
        })
        this.props.closeModal()
    }
}

export default Category