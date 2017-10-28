import React from 'react'
import {
    FormGroup,
    ControlLabel
} from 'react-bootstrap'

const Label = ({ description }) => (
    <FormGroup controlId="formBasicText">
        <ControlLabel> { description } </ControlLabel>
    </FormGroup>
)

export default Label