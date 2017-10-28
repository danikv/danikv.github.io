import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { addCategory } from '../actions/CategoryActions'
import { BasicAddModal } from '../components/BasicModals'
import Category from '../components/Category'
import { categoryInputFormConfiguration } from './utils/CommonConfiguration'

class AddModal extends Category 
{
    addItem() {
        this.props.onAdd(this.state.category)
        this.close()
    }
    
    inputFormConfiguration() {
        return categoryInputFormConfiguration(this,
            this.state.category)
    }

    footerConfiguration() {
        return {
            onClick: this.addItem.bind(this),
            disabled: !this.validateInput()
        }
    }

    submitItem(event) {
        event.preventDefault()
        if(!this.validateInput())
            return
        this.addItem()
    }

    render() {
        return (
            <BasicAddModal
                title='Add Category'
                showModal={ this.props.showModal }
                closeModal={ this.close.bind(this) }
                bodyConfiguration={ this.inputFormConfiguration() }
                footerConfiguration={ this.footerConfiguration() } />      
        )
    }
}

AddModal.propTypes = {
    onAdd: PropTypes.func.isRequired,
    showModal: PropTypes.bool.isRequired,
    closeModal: PropTypes.func.isRequired,
    categories: PropTypes.array.isRequired
}

const mapStateToProps = (state, props) => {
    return {
        categories: state.categoryReducer
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onAdd: (category) => {
            dispatch(addCategory(category))
        }
    }
}

const CategoryAddModal = connect(
    mapStateToProps,
    mapDispatchToProps
)(AddModal)

export default CategoryAddModal