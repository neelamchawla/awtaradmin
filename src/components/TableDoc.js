import React from 'react';
import { Table } from 'reactstrap';
import { Button } from 'reactstrap';
import "./app.css";
import ModalDoc from './ModalDoc';

const TableDoc = (props) => {
  return (
    <Table hover className="Table2">
        <div class="scrollbar" id="style-7">
            <div class="force-overflow"></div>
        
      <thead>
        <tr>
          <th>Doctors</th>
          <th>
            <Button color="danger" >View All
            <ModalDoc/>
            </Button>
          </th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th scope="row">John Doe<p className="doc">MBBS</p></th>
          <td>+1-202-555-0125</td>
        </tr>
        <tr>
          <th scope="row">Jacob Thornton<p className="doc">MBBS</p></th>
          <td>+1-202-555-0125</td>
        </tr>
        <tr>
          <th scope="row">Larry Doe<p className="doc">MD</p></th>
          <td>+1-202-555-0106</td>
        </tr>
        <tr>
          <th scope="row">Larry Doe<p className="doc">MBBS</p></th>
          <td>+1-202-555-0106</td>
        </tr>
        <tr>
          <th scope="row">Larry Doe<p className="doc">MD</p></th>
          <td>+1-202-555-0106</td>
        </tr>
        <tr>
          <th scope="row">Larry Doe<p className="doc">MBBS</p></th>
          <td>+1-202-555-0106</td>
        </tr>
        <tr>
          <th scope="row">Larry Doe<p className="doc">MD</p></th>
          <td>+1-202-555-0106</td>
        </tr>
      </tbody>
      </div>
    </Table>
  );
}

export default TableDoc;