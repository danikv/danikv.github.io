import React from 'react'
import { Form } from 'react-bootstrap'
import Input from './Input'
import SelectForm from './SelectForm'

const BasicInputFormWithSelect = (props) => (
    <Form onSubmit={ (event) => props.onSubmit(event) }>
        { props.inputs.map(item => (
            <Input key={ item.id } { ...item } />
        ))}
        { props.selects.map(item => (
            <SelectForm key={ item.id } {...item} />
        ))}
    </Form>
)

export default BasicInputFormWithSelect