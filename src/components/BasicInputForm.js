import React from 'react'
import {
    Form
} from 'react-bootstrap'
import Input from './Input'

const BasicInputForm = (props) => (
    <Form onSubmit={ (event) => props.onSubmit(event) } >
        { props.configuration.map(item => (
            <Input key={ item.id } { ...item } />
        ))}
    </Form>
)

export default BasicInputForm