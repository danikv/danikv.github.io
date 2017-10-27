import React from 'react'
import { Form } from 'react-bootstrap'
import Input from './Input'
import SelectForm from './SelectForm'

const BasicInputFormWithSelect = ({ configuration, onSubmit }) => (
    <Form onSubmit={ (event) => onSubmit(event) }>
        { configuration.inputs.map(item => (
            <Input key={ item.id } { ...item } />
        ))}
        { configuration.selects.map(item => (
            <SelectForm key={ item.id } {...item} />
        ))}
    </Form>
)

export default BasicInputFormWithSelect