import React from 'react'
import { Form } from 'react-bootstrap'
import Input from './Input'
import Select from './Select'

const BasicInputFormWithSelect = ({ configuration, onSubmit }) => (
    <Form onSubmit={ (event) => onSubmit(event) }>
        { configuration.inputs.map(item => (
            <Input key={ item.id } { ...item } />
        ))}
        <Select { ...configuration.select } />
    </Form>
)

export default BasicInputFormWithSelect