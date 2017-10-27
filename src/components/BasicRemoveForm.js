import React from 'react'
import { Form } from 'react-bootstrap'
import Label from './Label'

const BasicRemoveForm = ({ configuration }) => (
    <Form>
        { configuration.map(item => (
            <Label { ...item } />
        ))}
    </Form>
)

export default BasicRemoveForm 