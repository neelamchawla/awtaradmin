import React from 'react';
import { Table } from 'reactstrap';
import { Button } from 'reactstrap';
import "./app.css";

const TablePatient = (props) => {
  return (
    <Table hover>
      <thead>
        <tr>
          <th></th>
          <th>New Patients</th>
          <th></th>
          <th></th>
          <th><Button outline color="primary">View All</Button></th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th scope="row">1</th>
          <td>John Doe</td>
          <td>Johndoe21@gmail.com</td>
          <td>+1-202-555-0125</td>
          <td><Button outline color="warning">Fever</Button></td>
        </tr>
        <tr>
          <th scope="row">2</th>
          <td>Jacob Thornton</td>
          <td>Jacob@gmail.com</td>
          <td>+1-202-555-0125</td>
          <td><Button outline color="warning">Fever</Button></td>
        </tr>
        <tr>
          <th scope="row">3</th>
          <td>Larry Doe</td>
          <td>Larrydoe@gmail.com</td>
          <td>+1-202-555-0106</td>
          <td><Button outline color="warning">Fever</Button></td>
        </tr>
      </tbody>
    </Table>
  );
}

export default TablePatient;