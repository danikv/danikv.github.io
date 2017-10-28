import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { removeCategory } from '../actions/CategoryActions'
import { BasicRemoveModal } from '../components/BasicModals'
import Category from '../components/Category'

class RemoveModal extends Category
{
    removeItem(event) {
        this.props.onRemove(this.state.category)
        this.close()
    }

    open() {
        this.setState({
            category: this.props.itemClicked.category
        })
    }


    deleteFormConfiguration() {
        return {
            configuration: [{
                description: 'Category : ' + this.state.category,
                name: 'category'
            }]
        }
    }

    footerConfiguration() {
        return {
            onClick: this.removeItem.bind(this)
        } 
    }

    render() {
        return (
            <BasicRemoveModal
                title='Remove Category'
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
        onRemove: (category) => {
            dispatch(removeCategory(category))
        }
    }
}

const CategoryRemoveModal = connect(
    mapStateToProps,
    mapDispatchToProps
)(RemoveModal)

export default CategoryRemoveModal