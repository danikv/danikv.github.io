import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import ViewList from '../components/ViewList'

class Categories extends Component
{
    onClick(category) {
        this.props.onClick({
            category: category
        })
    }

    render() {
        return (
            <ViewList 
                items={ this.props.categories }
                onClick={ (category) => this.onClick(category) }
                getKey={ (category) => { return category } }
                displayFunction={ (category) => { return 'category : ' + category } }
            />
        )
    }
}

Categories.PropTypes = {
    categories: PropTypes.array.isRequired,
    onClick: PropTypes.func.isRequired
}

const mapStateToProps = (state, props) => {
    return {
        categories: state.categoryReducer
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
    }
}

const CategoriesContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(Categories)

export default CategoriesContainer