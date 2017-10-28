import React from 'react'
import { LinkContainer } from 'react-router-bootstrap'
import {
  Nav,
  Navbar,
  NavItem,
  Glyphicon
} from 'react-bootstrap'

const BottomNavbar = () => (
  <Navbar fixedBottom staticTop >
    <Nav bsStyle="tabs" justified>
      <LinkContainer to='/locations'>
        <NavItem>
          <Glyphicon glyph="globe">
              Locations
          </Glyphicon>
        </NavItem>
      </LinkContainer>
      <LinkContainer to='/categories' >
          <NavItem>
            <Glyphicon glyph="flag">
              Categories
            </Glyphicon>
          </NavItem>
      </LinkContainer>
    </Nav>
  </Navbar>
)

export default BottomNavbar