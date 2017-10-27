import React from 'react'
import { Form } from 'react-bootstrap'
import Input from './Input'
import Select from './Select'

const BasicInputFormWithSelect = ({ configuration, onSubmit }) => (
    <Form onSubmit={ (event) => onSubmit(event) }>
        { configuration.inputs.map(item => (
            <Input key={ item.id } { ...item } />
        ))}
        { configuration.selects.map(item => (
            <Select key={ item.id } {...item} />
        ))}
    </Form>
)

export default BasicInputFormWithSelect