import React from 'react'
import { LinkContainer } from 'react-router-bootstrap'
import {
  Nav,
  Navbar,
  NavItem
} from 'react-bootstrap'

const BottomNavbar = () => (
  <Navbar fixedBottom>
    <Nav bsStyle="tabs">
      <LinkContainer to='/locations'>
        <NavItem>
          Locations
        </NavItem>
      </LinkContainer>
      <LinkContainer to='/categories'>
          <NavItem>
            Categories
          </NavItem>
      </LinkContainer>
    </Nav>
  </Navbar>
)

export default BottomNavbar