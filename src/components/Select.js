import React from 'react'
import { startCase } from 'lodash'
import {
    FormControl,
    FormGroup,
    ControlLabel,
    HelpBlock
} from 'react-bootstrap'

const Select = ({ id, validation, onChange, options, value}) => (
    <FormGroup controlId="formBasicText" validationState={ validation() }>
        <ControlLabel>Enter {startCase(id)}</ControlLabel>
        <FormControl componentClass="select" placeholder="select" value={ value } onChange={ (event) => onChange(event) } >
            <option value=""> Select {startCase(id)}  </option>
            { options.map(item => (
                <option value={ item } key={ item }> { item } </option>
            ))}
        </FormControl>
        <FormControl.Feedback />
        <HelpBlock>{startCase(id)} cannot be empty</HelpBlock>
    </FormGroup>
)

export default Select