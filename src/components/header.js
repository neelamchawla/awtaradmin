import React, { useState } from 'react';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem  } from 'reactstrap';
  // , NavLink
import { MDBDropdown, MDBDropdownToggle, MDBDropdownMenu, MDBDropdownItem } from "mdbreact";
import { MDBIcon } from "mdbreact";
  //  MDBRow, MDBCol,
// import { Fragment } from "react";
// import { MDBBtn } from "mdbreact";
import ScrollUpButton from "react-scroll-up-button"; 
import { Link } from 'react-router-dom';
import Favicon from 'react-favicon';
// import Doctors from './doctors';
// import Patients from './Patients';
// import Appointments from './Appointments';
// import Payments from './Payments';

import 'bootstrap/dist/css/bootstrap.css';
import "@fortawesome/fontawesome-free/css/all.min.css";
import "mdbreact/dist/css/mdb.css";
import './app.css';


const Header = (props) => {
  const [collapsed, setCollapsed] = useState(true);
  const toggleNavbar = () => setCollapsed(!collapsed);

  // const [dropdownOpen, setDropdownOpen] = useState(false);
  // const toggle = () => setDropdownOpen(prevState => !prevState);

  return (
    <div>
      <Favicon url={ process.env.PUBLIC_URL + '/favicon.PNG' } />

      <Navbar color="faded" light>
        <NavbarBrand className="mr-auto toggler">
          <Link className="links" to="/awtaradmin">Admin Panel</Link>
        </NavbarBrand>
        
        
            <MDBDropdown>
            <MDBDropdownToggle className="dropBtn" caret gradient="purple">
                <MDBIcon far icon="bell" size="lg"/>
            </MDBDropdownToggle>
            <MDBDropdownMenu right basic>
                <MDBDropdownItem> Info</MDBDropdownItem>
                <MDBDropdownItem> Info</MDBDropdownItem>
            </MDBDropdownMenu>
            </MDBDropdown>

            <MDBDropdown>
            <MDBDropdownToggle className="dropBtn" caret gradient="purple">
                <MDBIcon far icon="comments" size="lg"/>
            </MDBDropdownToggle>
            <MDBDropdownMenu right basic>
                <MDBDropdownItem> Msg</MDBDropdownItem>
                <MDBDropdownItem> Msg</MDBDropdownItem>
            </MDBDropdownMenu>
            </MDBDropdown>
        
        {/* <MDBBtn gradient="purple"><MDBIcon far icon="comments" size="lg"/></MDBBtn> */}
        
            <MDBDropdown>
            <MDBDropdownToggle className="dropBtn" caret gradient="purple">
            Admin
            </MDBDropdownToggle>
            <MDBDropdownMenu right basic>
                <MDBDropdownItem header> My Profile</MDBDropdownItem>
                <MDBDropdownItem divider />
                <MDBDropdownItem><MDBIcon icon="pen" /> Edit</MDBDropdownItem>
                <MDBDropdownItem><MDBIcon icon="cogs" /> Settings</MDBDropdownItem>
                <MDBDropdownItem><MDBIcon icon="sign-out-alt" /> Log Out</MDBDropdownItem>
            </MDBDropdownMenu>
            </MDBDropdown>

        {/* <Dropdown isOpen={dropdownOpen} toggle={toggle}>
      <DropdownToggle caret>
        Admin
        </DropdownToggle>
      <DropdownMenu>
        <DropdownItem header>My Profile</DropdownItem> */}
        {/* <DropdownItem>Some Action</DropdownItem>
        <DropdownItem disabled>Action (disabled)</DropdownItem> */}
        {/* <DropdownItem divider />
        <DropdownItem>Edit</DropdownItem>
        <DropdownItem>Settings</DropdownItem>
        <DropdownItem>Log Out</DropdownItem>
      </DropdownMenu>
    </Dropdown> */}


        <NavbarToggler onClick={toggleNavbar} className="mr-2" />
        <Collapse isOpen={!collapsed} navbar>
          <Nav navbar>
          <NavItem>
              <Link className="links" to="/awtaradmin"><MDBIcon icon="tachometer-alt" /> Dashboard</Link>
              {/* <NavLink href=".">Dashboard</NavLink> */}
            </NavItem>
            <NavItem>
              {/* <Link to={doctors} >{Doctors}</Link> */}
              <Link className="links" to="doctors"><MDBIcon icon="user-md" /> Doctors</Link>
              {/* <NavLink href="doctors">Doctors</NavLink> */}
            </NavItem>
            <NavItem>
              <Link className="links" to="Patients"><MDBIcon icon="wheelchair" /> Patients</Link>
              {/* <NavLink href="Patients">Patients</NavLink> */}
            </NavItem>
            <NavItem>
              <Link className="links" to="Appointments"><MDBIcon far icon="calendar-alt" /> Appointments</Link>
              {/* <NavLink href="Appointments">Appointments</NavLink> */}
            </NavItem>
            <NavItem>
              <Link className="links" to="Payments"><MDBIcon icon="file-invoice-dollar" /> Account</Link>
              {/* <NavLink href="Account">Account</NavLink> */}
            </NavItem>
          </Nav>
        </Collapse>
      
    </Navbar>
    <ScrollUpButton />
    </div>
  );
}

export default Header;