import React from 'react'
import {
    Form
} from 'react-bootstrap'
import Input from './Input'

const BasicInputForm = ({ configuration, onSubmit }) => (
    <Form onSubmit={ (event) => onSubmit(event) } >
        { configuration.map(item => (
            <Input key={ item.id } { ...item } />
        ))}
    </Form>
)

export default BasicInputForm