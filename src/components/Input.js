import React from 'react'
import { startCase } from 'lodash'
import {
    FormGroup,
    ControlLabel,
    FormControl,
    HelpBlock
} from 'react-bootstrap'

const Input = ({ id, value, onChange, validation, validationMessage}) => (
    <FormGroup controlId="formBasicText" validationState={ validation() }>
        <ControlLabel>Enter { startCase(id) }</ControlLabel>
        <FormControl type="text" value={ value } placeholder="Enter text" onChange={ (event) => onChange(event) }/>
        <FormControl.Feedback />
        <HelpBlock> { startCase(validationMessage) } </HelpBlock>
    </FormGroup>
) 

export default Input