import React from 'react'
import { startCase } from 'lodash'
import {
    FormGroup,
    ControlLabel,
    HelpBlock,
    FormControl
} from 'react-bootstrap'
import Select from './Select'

const SelectForm = ({ id, validation, onChange, options, value}) => (
    <FormGroup controlId="formBasicText" validationState={ validation() }>
        <ControlLabel>Enter {startCase(id)}</ControlLabel>
            <Select onChange={ onChange } defaultValue={ 'Select ' + startCase(id) } options={options} value={value}/>
        <FormControl.Feedback />
        <HelpBlock>{startCase(id)} cannot be empty</HelpBlock>
    </FormGroup>
)

export default SelectForm