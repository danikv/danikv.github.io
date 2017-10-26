import React from 'react'
import CategoryAddModal from './CategoryAddModal'
import CategoryEditModal from './CategoryEditModal'
import CategoryRemoveModal from './CategoryRemoveModal'
import CategoriesContainer from './Categories'
import BasicOperations from '../components/BasicOperations'
import BasicNavbar from '../components/BasicNavbar'
import MainPageComponent from '../components/MainPageComponent'

const CategoryMainPage = BasicOperations(
    CategoryAddModal,
    CategoryEditModal,
    CategoryRemoveModal,
    CategoriesContainer
)

class CategoriesMainPage extends MainPageComponent
{
    render() {
        return(
            <div>
                <BasicNavbar configuration={ this.navBarConfiguration() } />
                <CategoryMainPage { ...this.mainPageConfiguration() } />
            </div>
        )
    }
}

export default CategoriesMainPage