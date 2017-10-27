import React from 'react'
import { FormControl } from 'react-bootstrap'

const Select = ({onChange, defaultValue, options, value}) => (
    <FormControl componentClass="select" placeholder="select" value={ value } onChange={ (event) => onChange(event) } >
        <option value=""> { defaultValue } </option>
        { options.map(item => (
            <option value={ item } key={ item }> { item } </option>
        ))}
    </FormControl>
)

export default Select