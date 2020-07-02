import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import { Table } from 'reactstrap';
import "./app.css";
// import TableDoc from './TableDoc';

const ModalDoc = (props) => {
  const {
    buttonLabel,
    className
  } = props;

  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);

  const closeBtn = <button className="close" onClick={toggle}>&times;</button>;

  return (
  <div>
    <Button className="btnMod" onClick={toggle}>{buttonLabel}</Button>
    <Modal isOpen={modal} toggle={toggle} className={className}>
      <ModalHeader toggle={toggle} close={closeBtn}>Doctors Details</ModalHeader>
      <ModalBody className="show">

      <Table hover className="TabMod">
        <div class="Scrolling" id="style-7">
            <div class="force-overflow"></div>
        
      <thead>
        <tr>
          <th>Doctors</th>
          <th>Contact Numbers</th>
          <th>E-mail Id</th>
          <th> </th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th scope="row">John Doe<p className="doc">MBBS</p></th>
          <td>+1-202-555-0125</td>
          <td>john@gmail.com</td>
          <td></td>
        </tr>
        <tr>
          <th scope="row">Jacob Thornton<p className="doc">MBBS</p></th>
          <td>+1-202-555-0125</td>
          <td>john@gmail.com</td>
          <td></td>
        </tr>
        <tr>
          <th scope="row">Larry Doe<p className="doc">MD</p></th>
          <td>+1-202-555-0106</td>
          <td>john@gmail.com</td>
          <td></td>
        </tr>
        <tr>
          <th scope="row">Larry Doe<p className="doc">MBBS</p></th>
          <td>+1-202-555-0106</td>
          <td>john@gmail.com</td>
          <td></td>
        </tr>
        <tr>
          <th scope="row">Larry Doe<p className="doc">MD</p></th>
          <td>+1-202-555-0106</td>
          <td>john@gmail.com</td>
          <td></td>
        </tr>
        <tr>
          <th scope="row">Larry Doe<p className="doc">MBBS</p></th>
          <td>+1-202-555-0106</td>
          <td>john@gmail.com</td>
          <td></td>
        </tr>
        <tr>
          <th scope="row">Larry Doe<p className="doc">MD</p></th>
          <td>+1-202-555-0106</td>
          <td>john@gmail.com</td>
          <td></td>
        </tr>
      </tbody>
      </div>
    </Table>
      
      </ModalBody>
      <ModalFooter>
        {/* <Button color="primary" onClick={toggle}>Do Something</Button>{' '} */}
        <Button color="secondary" onClick={toggle}>Cancel</Button>
      </ModalFooter>
    </Modal>
  </div>
);
}

export default ModalDoc;