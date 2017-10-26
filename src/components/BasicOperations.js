import React from 'react'

const BasicOperations = (AddModal, EditModal, RemoveModal, View) => (props) => (
    <div>
        <AddModal { ...props.add } />
        <EditModal { ...props.edit } />
        <RemoveModal { ...props.remove } />
        <View { ...props.view } />
    </div>
)

export default BasicOperations