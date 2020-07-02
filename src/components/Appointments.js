import React from "react";
import Header from "./header";
import { MDBBtn, MDBIcon } from "mdbreact";
  //  MDBRow, MDBCol,
import { MDBInput, MDBTable, MDBTableBody, MDBTableHead  } from 'mdbreact';
import { MDBDropdown, MDBDropdownToggle, MDBDropdownMenu, MDBDropdownItem } from "mdbreact";
import { Link } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.css';
import "@fortawesome/fontawesome-free/css/all.min.css";
import "mdbreact/dist/css/mdb.css";
import './app.css';

/* --------------------Box Start-------------------------- */
const Appointments = () => {
    const data_checkboxes = {
        columns: [
          {
            'check': <MDBInput label="Check" type="checkbox" id="checkbox" />,
            'label': 'Check',
            'field': 'check',
            'sort': 'asc'
          },
          {
            'label': 'Appointment Id',
            'field': 'id',
            'sort': 'asc'
          },
          {
            'label': 'Patient Name',
            'field': 'name',
            'sort': 'asc'
          },
          {
            'label': 'Age',
            'field': 'age',
            'sort': 'asc'
          },
          {
            'label': 'Appointment Date',
            'field': 'date',
            'sort': 'asc'
          },
          {
            'label': 'Appointment Time',
            'field': 'time',
            'sort': 'asc'
          },
          {
            'label': 'Action',
            'field': 'action',
            'sort': 'asc'
          }
        ],

        rows: [
          {
            'check': <MDBInput className="input" type="checkbox" id="checkbox2" />,
            'id': 'APT0001',
            'name': 'Denise Stevens',
            'age': '35',
            'date': '30 Dec 2018',
            'time': '10:00am - 11:00am',
            'action':  <MDBDropdown dropleft>
                        <MDBDropdownToggle  className="btn2" caret color="default">
                            <MDBIcon display="flex" justifycontent="end" icon="ellipsis-v" />
                        </MDBDropdownToggle>
                        <MDBDropdownMenu basic>
                            <MDBDropdownItem><MDBIcon far icon="edit" /> Edit</MDBDropdownItem>
                            <MDBDropdownItem><MDBIcon far icon="trash-alt" /> Delete</MDBDropdownItem>
                        </MDBDropdownMenu>
                    </MDBDropdown>
          },
          {
            'check': <MDBInput className="input" type="checkbox" id="checkbox3" />,
            'id': 'APT0002',
            'name': 'Stevens Denise',
            'age': '45',
            'date': '30 Dec 2018',
            'time': '11:00am - 12:00pm',
            'action':  <MDBDropdown dropleft>
                        <MDBDropdownToggle  className="btn2" caret color="default">
                            <MDBIcon display="flex" justifycontent="end" icon="ellipsis-v" />
                        </MDBDropdownToggle>
                        <MDBDropdownMenu basic>
                            <MDBDropdownItem><MDBIcon far icon="edit" /> Edit</MDBDropdownItem>
                            <MDBDropdownItem><MDBIcon far icon="trash-alt" /> Delete</MDBDropdownItem>
                        </MDBDropdownMenu>
                    </MDBDropdown>
          },
          {
            'check': <MDBInput className="input" type="checkbox" id="checkbox4" />,
            'id': 'APT0003',
            'name': 'Den Evens',
            'age': '25',
            'date': '30 Dec 2018',
            'time': '12:00am - 01:00pm',
            'action':  <MDBDropdown dropleft>
                        <MDBDropdownToggle  className="btn2" caret color="default">
                            <MDBIcon display="flex" justifycontent="end" icon="ellipsis-v" />
                        </MDBDropdownToggle>
                        <MDBDropdownMenu basic>
                            <MDBDropdownItem><MDBIcon far icon="edit" /> Edit</MDBDropdownItem>
                            <MDBDropdownItem><MDBIcon far icon="trash-alt" /> Delete</MDBDropdownItem>
                        </MDBDropdownMenu>
                    </MDBDropdown>
          }
        ]
      };

      /* --------------------Box End-------------------------- */

  return (
    <React.Fragment>
    <Header/>
    <div>

            <h1 className="doc">Appointments</h1>
            <MDBBtn gradient="purple" className="btn1">
            <Link className="link" to="NewAppointment">
            <MDBIcon icon="plus" /> Add Appointment</Link>
            </MDBBtn>

      {/* --------------------Box Return-------------------------- */}
        <div className="TableBox">
            <MDBTable btn>
            <MDBTableHead columns={data_checkboxes.columns} />
            <MDBTableBody rows={data_checkboxes.rows} />
            </MDBTable>
        </div>

   </div>
    </React.Fragment>
  );
};

export default Appointments;