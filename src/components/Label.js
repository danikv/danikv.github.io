import React from 'react'
import {
    FormGroup,
    ControlLabel
} from 'react-bootstrap'

const Label = ({ name , value }) => (
    <FormGroup key={ name } controlId="formBasicText">
        <ControlLabel>{ name } : { value } </ControlLabel>
    </FormGroup>
)

export default Label