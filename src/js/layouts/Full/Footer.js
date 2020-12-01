import React from 'react';
import {
  Container, Nav, NavbarBrand, Navbar, NavItem
} from 'reactstrap';
import { NavHashLink as NavLink } from 'react-router-hash-link';
import Bitmaps from '../../theme/Bitmaps';

import PrivacyPDF from '../../../pdf/Yabbr-Privacy-Policy-2019-v1.3.pdf';

export const FooterIntro = () => (
  <div className="site-footer">
    <Container>
      <Nav>
        <div className="navbar-logo">
          <NavbarBrand tag={NavLink} to="/">
            <img src={Bitmaps.logo} alt="brand-logo" />
          </NavbarBrand>
          <div className="text-white">
            Copyright © 2019 All rights reserved.
          </div>
        </div>
        <Navbar>
          <NavItem>
            <NavLink className="nav-link text-info" to={PrivacyPDF} target="_blank">
              Privacy policy
            </NavLink>
          </NavItem>
        </Navbar>
      </Nav>
    </Container>
  </div>
);

export default FooterIntro;
