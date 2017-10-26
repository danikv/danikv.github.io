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
        return [{
            name: 'category',
            value: this.state.category
        }]
    }

    render() {
        return (
            <BasicRemoveModal
                title='Remove Category'
                showModal={ this.props.showModal }
                closeModal={ () => this.close() }
                bodyConfiguration={ this.deleteFormConfiguration() }
                onSend={ () => this.removeItem() }
                onEntered={ () => this.open() } />   
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