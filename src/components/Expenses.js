import React from 'react';
import Header from "./header";
// import { MDBBox } from 'mdbreact';
import { Link } from 'react-router-dom';
import { MDBBtn, MDBDataTable, MDBIcon } from "mdbreact";
// MDBRow, MDBCol,  MDBInput,
import { MDBDropdown, MDBDropdownToggle, MDBDropdownMenu, MDBDropdownItem } from "mdbreact";
import { Nav, NavItem, NavLink } from 'reactstrap';
// Dropdown, DropdownItem, DropdownToggle, DropdownMenu,

import 'bootstrap/dist/css/bootstrap.css';
import "@fortawesome/fontawesome-free/css/all.min.css";
import "mdbreact/dist/css/mdb.css";
import './app.css';

const Expenses = () => {
  const data = {
    columns: [
    {
        label: 'Sr. No',
        field: 'sr',
        sort: 'asc',
        width: 150
    },
    {
        label: 'Item',
        field: 'item',
        sort: 'asc',
        width: 150
      },
      {
        label: 'Purchase From',
        field: 'name',
        sort: 'asc',
        width: 150
      },
      {
        label: 'Purchase Date',
        field: 'date',
        sort: 'asc',
        width: 150
      },
      {
        label: 'Amount',
        field: 'amount',
        sort: 'asc',
        width: 100
      },
      {
        label: 'Status',
        field: 'status',
        sort: 'asc',
        width: 150
      },
      {
        label: 'Action',
        field: 'action',
        width: 100
      }
    ],
    rows: [
      {
        sr: '1',
        item: <Link to="./files/test.pdf" target="_blank" download>INV-0001</Link>,
        name: 'Shad Decker',
        date: '1/10/2019',
        amount: '5000',
        status: <MDBBtn outline color="danger">Pending</MDBBtn>,
        action: <MDBDropdown dropleft>
        <MDBDropdownToggle  className="btn2" caret color="default">
            <MDBIcon display="flex" justifyContent="end" icon="ellipsis-v" />
        </MDBDropdownToggle>
        <MDBDropdownMenu basic>
            <MDBDropdownItem><MDBIcon far icon="edit" /> Edit</MDBDropdownItem>
            <MDBDropdownItem><MDBIcon far icon="trash-alt" /> Delete</MDBDropdownItem>
        </MDBDropdownMenu>
    </MDBDropdown>
      },
      {
        sr: '2',
        item: <Link to="./files/test.pdf" target="_blank" download>INV-0002</Link>,
        name: 'Michael Bruce',
        date: '6/10/2019',
        amount: '5000',
        status: <MDBBtn outline color="success">Approved</MDBBtn>,
        action: <MDBDropdown dropleft>
        <MDBDropdownToggle  className="btn2" caret color="default">
            <MDBIcon display="flex" justifyContent="end" icon="ellipsis-v" />
        </MDBDropdownToggle>
        <MDBDropdownMenu basic>
            <MDBDropdownItem><MDBIcon far icon="edit" /> Edit</MDBDropdownItem>
            <MDBDropdownItem><MDBIcon far icon="trash-alt" /> Delete</MDBDropdownItem>
        </MDBDropdownMenu>
    </MDBDropdown>
      },
      {
        sr: '3',
        item: <Link to="./files/test.pdf" target="_blank" download>INV-0003</Link>,
        name: 'Donna Snider',
        date: '11/10/2019',
        amount: '5000',
        status: <MDBBtn outline color="danger">Pending</MDBBtn>,
        action: <MDBDropdown dropleft>
        <MDBDropdownToggle  className="btn2" caret color="default">
            <MDBIcon display="flex" justifyContent="end" icon="ellipsis-v" />
        </MDBDropdownToggle>
        <MDBDropdownMenu basic>
            <MDBDropdownItem><MDBIcon far icon="edit" /> Edit</MDBDropdownItem>
            <MDBDropdownItem><MDBIcon far icon="trash-alt" /> Delete</MDBDropdownItem>
        </MDBDropdownMenu>
    </MDBDropdown>
      }
    ]
  };
  return (
    <React.Fragment>
    
{/* --------------------Link Start-------------------------- */}       
        <Header/>
            <h1 className="doc">Account</h1>
            <MDBBtn gradient="purple" className="btn1">
            <Link className="link" to="NewExp">
            <MDBIcon icon="plus" /> Add Expenses</Link>
            </MDBBtn>
    
    <Nav tabs>
        <NavItem>
          <NavLink ><Link to="Payments">Payments</Link></NavLink>
        </NavItem>
        <NavItem>
          <NavLink active><Link to="Expenses">Expenses</Link></NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="#">Another Link</NavLink>
        </NavItem>
      </Nav>
{/* --------------------Link End-------------------------- */}
      
{/* --------------------Box Start-------------------------- */}
<div className="accTable">
  <MDBDataTable
      striped
      bordered
      small
      data={data}
    />
  </div>

{/* --------------------Box End-------------------------- */}

    </React.Fragment>
  );
};

export default Expenses;