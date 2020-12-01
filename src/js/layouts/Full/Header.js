/* eslint-disable react/no-unescaped-entities */
import React, { Component } from 'react';
import { NavHashLink as NavLink } from 'react-router-hash-link';
import {
  Nav, NavbarBrand, Navbar, NavItem, Button
} from 'reactstrap';

import Bitmaps from '../../theme/Bitmaps';

class Header extends Component {

  goSignUp() {
    window.location.href = '/sign-up';
  }

  render() {
    return (
      <div className="site-header">
        <Nav className="navigation-bar">
          <NavbarBrand className="navbar-logo" tag={NavLink} to="/">
            <img src={Bitmaps.logo} alt="brand-logo" />
          </NavbarBrand>
          <div className="main-menu">
            <Nav>
              <Navbar>
                <NavItem>
                  <NavLink smooth className="nav-link" to="/#different">
                    What's different
                    <div className="nav-active">
                      <div />
                      <div />
                      <div />
                    </div>
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink smooth className="nav-link" to="/#additional">
                    Additional features
                    <div className="nav-active">
                      <div />
                      <div />
                      <div />
                    </div>
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink smooth className="nav-link" to="/#compare">
                    How we compare
                    <div className="nav-active">
                      <div />
                      <div />
                      <div />
                    </div>
                  </NavLink>
                </NavItem>
              </Navbar>
            </Nav>
          </div>
          <div className="navbar-right d-none d-lg-flex">
            <div className="sms-content d-none d-xl-block">
              <div className="title text-info">
                Call or SMS us -
                {' '}
                <span>0480 0 YABBR</span>
              </div>
              <div className="number text-gray ml-auto">
                92227
              </div>
            </div>
            <Button
              className="btn"
              color="info"
              tag={NavLink}
              smooth
              onClick={this.goSignUp}
            >
              Sign up
            </Button>
          </div>
        </Nav>
      </div>
    );
  }
}

export default Header;
