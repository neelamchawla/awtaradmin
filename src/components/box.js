import React from 'react';
import { Card, Button, CardTitle, CardText } from 'reactstrap';
import {
  //  MDBRow, MDBCol,
   MDBIcon } from "mdbreact";
import { Link } from 'react-router-dom';
// import doctors from './doctors';
// import Patients from './Patients';
// import Appointments from './Appointments';
// import Payments from './Payments';

import "@fortawesome/fontawesome-free/css/all.min.css";
// import "bootstrap-css-only/css/bootstrap.min.css";
import "mdbreact/dist/css/mdb.css";

const Box = (props) => {
  return (
    <div>
      <Card body inverse color="success">
        <MDBIcon icon="user-md" pull="left" size="3x" /><br/>
        <CardTitle className="boxItem">20</CardTitle>
        <CardText>Total number</CardText>
        <Button className="boxBtn" color="secondary"><Link className="link" to="/awtaradmin/doctors">Doctors</Link></Button>
      </Card>

      <Card body inverse color="info">
        <MDBIcon icon="wheelchair" size="3x" /><br/>
        {/* <MDBIcon icon="hand-holding-heart" size="3x" /><br/> */}
        {/* <MDBIcon icon="heartbeat" size="3x"/> */}
        <CardTitle className="boxItem">14</CardTitle>
        <CardText>Total number</CardText>
        <Button className="boxBtn" color="secondary"><Link className="link" to="/awtaradmin/Patients">Patients</Link></Button>
      </Card>

      <Card body inverse color="warning">
        <MDBIcon icon="file-medical" size="3x" /><br/>
        <CardTitle className="boxItem">60</CardTitle>
        <CardText>Total number</CardText>
        <Button className="boxBtn" color="secondary"><Link className="link" to="/awtaradmin/Appointments">Appointments</Link></Button>
      </Card>

      <Card body inverse color="primary">
        <MDBIcon icon="file-invoice-dollar" size="3x" /><br/>
        <CardTitle className="boxItem">40</CardTitle>
        <CardText>Total number</CardText>
        <Button className="boxBtn" color="secondary" href="/awtaradmin/Payments">Account</Button>
      </Card>
    </div>
  );
};

export default Box;