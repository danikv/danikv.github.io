import React from 'react'
import {
    Form,
    FormGroup,
    ControlLabel
} from 'react-bootstrap'

const BasicRemoveForm = ({ configuration }) => (
    <Form>
        { configuration.map(item => (
            <FormGroup key={ item.name } controlId="formBasicText">
                <ControlLabel>{ item.name } : { item.value } </ControlLabel>
            </FormGroup>
        ))}
    </Form>
)

export default BasicRemoveForm 