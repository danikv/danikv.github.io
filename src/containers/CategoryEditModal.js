import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { editCategory } from '../actions/CategoryActions'
import { BasicEditModal } from '../components/BasicModals'
import Category from '../components/Category'
import { categoryInputFormConfiguration } from './utils/CommonConfiguration'

class EditModal extends Category 
{
    editItem(event) {
        this.props.onEdit(this.oldValue, this.state.category)
        this.close()
    }

    open() {
        this.setState({
            category: this.props.itemClicked.category
        })
        this.oldValue = this.props.itemClicked.category
    }

    submitItem(event) {
        event.preventDefault()
        if(!this.validateInput()) {
            return
        }
        this.editItem(event)
    }

    inputFormConfiguration() {
        return categoryInputFormConfiguration(this,
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
            <BasicEditModal
                title='Edit Category'
                showModal={ this.props.showModal }
                closeModal={ this.close.bind(this) }
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
    categories: PropTypes.array.isRequired,
    itemClicked: PropTypes.object.isRequired
}

const mapStateToProps = (state, props) => {
    return {
        categories: state.categoryReducer
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onEdit: (oldCategory, newCategory) => {
            dispatch(editCategory(oldCategory, newCategory))
        }
    }
}

const CategoryEditModal = connect(
    mapStateToProps,
    mapDispatchToProps
)(EditModal)

export default CategoryEditModal