import {Component} from 'react'

class MainPageComponent extends Component
{
    constructor(props) {
        super(props)
        this.state = {
            showAddModal: false,
            showEditModal: false,
            showRemoveModal: false,
            itemClicked: {}
        }
    }

    openAddModal() {
        this.setState({
            showAddModal: true
        })
    }    

    openEditModal() {
        this.setState({
            showEditModal: true
        })
    }

    openRemoveModal() {
        this.setState({
            showRemoveModal: true
        })
    }

    closeAddModal() {
        this.setState({
            showAddModal: false,
            itemClicked: {}
        })
    }    

    closeEditModal() {
        this.setState({
            showEditModal: false,
            itemClicked: {}
        })
    }

    closeRemoveModal() {
        this.setState({
            showRemoveModal: false,
            itemClicked: {}
        })
    }

    onItemClick(item) {
        this.setState({
            itemClicked: item
        })
    }

    mainPageConfiguration() {
        return {
            add: {
                showModal: this.state.showAddModal,
                closeModal: this.closeAddModal.bind(this),
                itemClicked: this.state.itemClicked
            },
            edit: {
                showModal: this.state.showEditModal,
                closeModal: this.closeEditModal.bind(this),
                itemClicked: this.state.itemClicked
            },
            remove: {
                showModal: this.state.showRemoveModal,
                closeModal: this.closeRemoveModal.bind(this),
                itemClicked: this.state.itemClicked
            },
            view: {
                onClick: this.onItemClick.bind(this)
            }
        }
    }

    disableEdit() {
        return Object.getOwnPropertyNames(this.state.itemClicked).length === 0
    }

    navBarConfiguration() {
        return [{
            name: 'Add',
            openFunc: this.openAddModal.bind(this),
            disabled: () => { return false }
        },{
            name: 'Edit',
            openFunc: this.openEditModal.bind(this),
            disabled: this.disableEdit.bind(this)
        },{
            name: 'Remove',
            openFunc: this.openRemoveModal.bind(this),
            disabled: this.disableEdit.bind(this)
        }]
    }
}

export default MainPageComponent