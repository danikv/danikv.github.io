import React from 'react'
import { LinkContainer } from 'react-router-bootstrap'
import {
  Nav,
  Navbar,
  NavItem,
  Glyphicon
} from 'react-bootstrap'

const navItemStyle = {
  width: '40em'
}

const BottomNavbar = () => (
  <Navbar fixedBottom staticTop>
    <Nav bsStyle="tabs">
      <LinkContainer to='/locations' style={ navItemStyle }>
        <NavItem>
          <Glyphicon glyph="globe">
              Locations
          </Glyphicon>
        </NavItem>
      </LinkContainer>
      <LinkContainer to='/categories' style={ navItemStyle }>
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