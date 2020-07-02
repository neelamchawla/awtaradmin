import React from 'react';
import { Table } from 'reactstrap';
import { Button } from 'reactstrap';
import "./app.css";

const TableAppoint = (props) => {
  return (
    <Table hover>
      <thead>
        <tr>
            <th colSpan="4">Upcoming Appointments</th>
            <th><Button outline color="danger">View All</Button></th>
        </tr>
        <tr>
          <th>Sr. No.</th>
          <th>Name</th>
          <th>Date And Time</th>
          <th>Contact No.</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th scope="row">1</th>
          <td>John Doe</td>
          <td>21-11-2017, 4:00PM</td>
          <td>+1-202-555-0125</td>
          <td><Button outline color="success">Accept</Button></td>
        </tr>
        <tr>
          <th scope="row">2</th>
          <td>Jacob Thornton</td>
          <td>21-11-2017, 4:00PM</td>
          <td>+1-202-555-0125</td>
          <td><Button outline color="success">Accept</Button></td>
        </tr>
        <tr>
          <th scope="row">3</th>
          <td>Larry Doe</td>
          <td>21-11-2017, 4:00PM</td>
          <td>+1-202-555-0106</td>
          <td><Button outline color="success">Accept</Button></td>
        </tr>
      </tbody>
    </Table>
  );
}

export default TableAppoint;