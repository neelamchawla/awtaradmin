import React from "react";
import Header from "./header";
import { MDBBox } from 'mdbreact';
import {
    //  MDBRow, MDBCol, 
     MDBBtn, MDBIcon } from "mdbreact";
import { MDBDropdown, MDBDropdownToggle, MDBDropdownMenu, MDBDropdownItem } from "mdbreact";
import { Link } from 'react-router-dom';
import Avatar from './assets/images/avatar_1.png';
// import NewDoc from './NewDoc';
import 'bootstrap/dist/css/bootstrap.css';
import "@fortawesome/fontawesome-free/css/all.min.css";
import "mdbreact/dist/css/mdb.css";
import './app.css';

const Doctors = () => {
  return (
    <React.Fragment>
    <Header/>
    <div>

            <h1 className="doc">Doctors</h1>
            <MDBBtn gradient="purple" className="btn1">
            <Link className="link" to="NewDoc"><MDBIcon icon="plus" /> Add Doctor</Link>
            </MDBBtn>

{/* --------------------Box Start-------------------------- */}
        <div className="box">
            <MDBDropdown dropleft>
                <MDBDropdownToggle  className="btn2" caret color="default">
                    <MDBIcon display="flex" justifyContent="end" icon="ellipsis-v" />
                </MDBDropdownToggle>
                <MDBDropdownMenu basic>
                    <MDBDropdownItem><MDBIcon far icon="edit" /> Edit</MDBDropdownItem>
                    <MDBDropdownItem><MDBIcon far icon="trash-alt" /> Delete</MDBDropdownItem>
                </MDBDropdownMenu>
            </MDBDropdown>
            
            <MDBBox display="flex" justifyContent="center">
            <img className="Avatar" alt="avatar" src={Avatar}/>
            </MDBBox>
            <MDBBox color="cyan" display="flex" justifyContent="center" tag="span">
               <b>John Doe</b>
            </MDBBox>
            <MDBBox color="pink" display="flex" justifyContent="center" tag="span">
                MBBS
            </MDBBox>
            <MDBBox color="blue" display="flex" justifyContent="center" tag="p">
            <MDBIcon icon="map-marker-alt" /> Address
            </MDBBox>
            <MDBBox color="blue" display="flex" justifyContent="center" tag="section">
            <MDBIcon icon="phone" /> Phn No.
            </MDBBox>
        </div>
{/* --------------------Box End-------------------------- */}
    </div>
    </React.Fragment>
  );
};

export default Doctors;