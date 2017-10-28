import React from 'react'
import { Form } from 'react-bootstrap'
import Label from './Label'

const BasicLabelForm = (props) => (
    <Form>
        { props.configuration.map(item => (
            <Label key={ item.name } { ...item } />
        ))}
    </Form>
)

export default BasicLabelForm 