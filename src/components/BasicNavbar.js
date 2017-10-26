import React from 'react'
import { 
    Nav,
    NavItem,
    Navbar
} from 'react-bootstrap'

const BasicNavbar = ({ configuration }) => (
    <Navbar inverse collapseOnSelect>
        <Navbar.Header>
            <Navbar.Brand>
                MyLocations
            </Navbar.Brand>
        <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse>
            <Nav bsStyle="pills">
            { configuration.map(item => (
                <NavItem key={ item.name } onSelect={ () => item.openFunc() } disabled={ item.disabled() } > { item.name } </NavItem>
            ))}
            </Nav>
        </Navbar.Collapse>
    </Navbar>
)

export default BasicNavbar