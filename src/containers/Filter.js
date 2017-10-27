import React, { Component } from 'react'
import PropTypes from 'prop-types'
import {
    ToggleButton,
    ButtonGroup,
    ToggleButtonGroup
} from 'react-bootstrap'
import { connect } from 'react-redux'
import { sortFilter, categoryFilter, groupFilter } from '../actions/FilterActions'
import Select from '../components/Select'

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

    selectOptions() {
        return {
            onChange: this.handleCategoryFilterChange.bind(this),
            value: this.props.filter.categoryFilter,
            options: this.props.categories,
            defaultValue: 'Select Category To Filter The List Below'
        }
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
                <Select { ...this.selectOptions() } />
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

const FilterContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(Filter)

export default FilterContainer
