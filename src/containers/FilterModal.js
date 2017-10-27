import React, { Component } from 'react'
import PropTypes from 'prop-types'
import {
    Glyphicon,
    ToggleButton,
    FormGroup,
    FormControl,
    ButtonGroup,
    ToggleButtonGroup
} from 'react-bootstrap'
import { connect } from 'react-redux'
import { BasicAddModalWithSelect } from '../components/BasicModals'
import { sortFilter, categoryFilter, groupFilter } from '../actions/FilterActions'

class Filter extends Component 
{
    handleCategoryFilterChange(event) {
        this.props.categoryFilter(event.target.value)
    }

    toggleGroupFilter() {
        this.props.groupAction(!this.props.filter.groupFilter)
    }

    toggleSortFilter() {
        this.props.sortAction(!this.props.filter.sortFilter)
    }

    render() {
        return (
            <ButtonGroup justified style={{ width: '100%' }}>
                <ToggleButtonGroup type="checkbox" style={{ width: '60%' }}>
                    <ToggleButton value='sort' checked={ this.props.filter.sortFilter } onChange={() => this.toggleSortFilter() } 
                        style={{ width: '50%' }}>
                        Sort
                    </ToggleButton>
                    <ToggleButton value='group' checked={ this.props.filter.groupFilter } onChange={() => this.toggleGroupFilter() }
                         style={{ width: '50%' }}>
                        Group By
                    </ToggleButton>
                </ToggleButtonGroup>
                <FormControl componentClass="select" onChange={ (event) => this.handleCategoryFilterChange(event) }
                    placeholder="CategoryFilter" style={{ display: 'inline-block' , width: '100%'}}>
                    <option value=''> Select Category To Filter The List Below </option>
                    { this.props.categories.map(x => (
                        <option value={ x } key={ x } > { x } </option>
                    ))}
                </FormControl>
            </ButtonGroup>
        )
    }

}

Filter.propTypes = {
    categories: PropTypes.array.isRequired,
    filter: PropTypes.object.isRequired,
    groupAction: PropTypes.func.isRequired,
    sortAction: PropTypes.func.isRequired,
    categoryFilter: PropTypes.func.isRequired
}

const mapStateToProps = (state, props) => {
    return {
        categories: state.categoryReducer,
        filter: state.filterReducer
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        groupAction: (filter) => {
            dispatch(groupFilter(filter))
        },
        sortAction: (filter) => {
            dispatch(sortFilter(filter))
        },
        categoryFilter: (filter) => {
            dispatch(categoryFilter(filter))
        }
    }
}

const FilterModal = connect(
    mapStateToProps,
    mapDispatchToProps
)(Filter)

export default FilterModal
