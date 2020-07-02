import React from "react";
import Header from "./header";
// import { MDBBox } from 'mdbreact';
import { 
  // MDBRow, MDBCol, 
  MDBDataTable, MDBBtn, MDBIcon } from "mdbreact";
// import { MDBDropdown, MDBDropdownToggle, MDBDropdownMenu, MDBDropdownItem } from "mdbreact";
import { Link } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.css';
import "@fortawesome/fontawesome-free/css/all.min.css";
import "mdbreact/dist/css/mdb.css";
import './app.css';

const Patients = () => {

/* --------------------Box Start-------------------------- */

  const data = {
      columns: [
      {
        label: 'Name',
        field: 'name',
        sort: 'asc',
        width: 90
      },
      {
        label: 'Phone Number',
        field: 'phone',
        sort: 'asc',
        width: 30
      },
      {
        label: 'Address',
        field: 'address',
        sort: 'asc',
        width: 30
      },
      {
        label: 'Age',
        field: 'age',
        sort: 'asc',
        width: 70
      },
      {
        label: 'D.O.B',
        field: 'date',
        sort: 'asc',
        width: 90
      },
      {
        label: 'Action',
        field: 'action',
        text: '',
        width: 80
      }
    ],
    rows: [
      {
        name: 'Tiger Nixon',
        phone: '9999999999',
        address: 'Edinburgh',
        age: '61',
        date: '2011/04/25',
        action: '$320'
      },
      {
        name: 'Garrett Winters',
        phone: '8888888888',
        address: 'Tokyo',
        age: '63',
        date: '2011/07/25',
        action: '$170'
      },
      {
        name: 'Ashton Cox',
        phone: '7777777777',
        address: 'San Francisco',
        age: '66',
        date: '2009/01/12',
        action: '$86'
      },
      {
        name: 'Cedric Kelly',
        phone: '6666666666',
        address: 'Edinburgh',
        age: '22',
        date: '2012/03/29',
        action: '$433'
      },
      {
        name: 'Airi Satou',
        phone: '8888888888',
        address: 'Tokyo',
        age: '33',
        date: '2008/11/28',
        action: '$162'
      },
      {
        name: 'Brielle Williamson',
        phone: '5555555555',
        address: 'New York',
        age: '61',
        date: '2012/12/02',
        action: '$372'
      },
      {
        name: 'Herrod Chandler',
        phone: '4444444444',
        address: 'San Francisco',
        age: '59',
        date: '2012/08/06',
        action: '$137'
      },
      {
        name: 'Rhona Davidson',
        phone: '5555555555',
        address: 'Tokyo',
        age: '55',
        date: '2010/10/14',
        action: '$327'
      },
      {
        name: 'Colleen Hurst',
        phone: '3333333333',
        address: 'San Francisco',
        age: '39',
        date: '2009/09/15',
        action: '$205'
      },
      {
        name: 'Sonya Frost',
        phone: '2222222222',
        address: 'Edinburgh',
        age: '23',
        date: '2008/12/13',
        action: '$103'
      },
      {
        name: 'Jena Gaines',
        phone: '1111111111',
        address: 'London',
        age: '30',
        date: '2008/12/19',
        action: '$90'
      },
      {
        name: 'Quinn Flynn',
        phone: '6789678',
        address: 'Edinburgh',
        age: '22',
        date: '2013/03/03',
        action: '$342'
      },
      {
        name: 'Charde Marshall',
        phone: '678967867',
        address: 'San Francisco',
        age: '36',
        date: '2008/10/16',
        action: '$470'
      },
      {
        name: 'Haley Kennedy',
        phone: '8988888888',
        address: 'London',
        age: '43',
        date: '2012/12/18',
        action: '$313'
      },
      {
        name: 'Tatyana Fitzpatrick',
        phone: '678967867',
        address: 'London',
        age: '19',
        date: '2010/03/17',
        action: '$385'
      },
      {
        name: 'Michael Silva',
        phone: '8988888888',
        address: 'London',
        age: '66',
        date: '2012/11/27',
        action: '$198'
      },
      {
        name: 'Paul Byrd',
        phone: '678967867',
        address: 'New York',
        age: '64',
        date: '2010/06/09',
        action: '$725'
      },
      {
        name: 'Gloria Little',
        phone: '678967867',
        address: 'New York',
        age: '59',
        date: '2009/04/10',
        action: '$237'
      },
      {
        name: 'Bradley Greer',
        phone: '2222222222',
        address: 'London',
        age: '41',
        date: '2012/10/13',
        action: '$132'
      },
      {
        name: 'Dai Rios',
        phone: '678967867',
        address: 'Edinburgh',
        age: '35',
        date: '2012/09/26',
        action: '$217'
      },
      {
        name: 'Jenette Caldwell',
        phone: '678967867',
        address: 'New York',
        age: '30',
        date: '2011/09/03',
        action: '$345'
      },
      {
        name: 'Yuri Berry',
        phone: '6789678',
        address: 'New York',
        age: '40',
        date: '2009/06/25',
        action: '$675'
      },
      {
        name: 'Caesar Vance',
        phone: '777788888',
        address: 'New York',
        age: '21',
        date: '2011/12/12',
        action: '$106'
      },
      {
        name: 'Doris Wilder',
        phone: '4444444444',
        address: 'Sidney',
        age: '23',
        date: '2010/09/20',
        action: '$85'
      },
      {
        name: 'Angelica Ramos',
        phone: '1111111',
        address: 'London',
        age: '47',
        date: '2009/10/09',
        action: '$1'
      },
      {
        name: 'Gavin Joyce',
        phone: '2222222222',
        address: 'Edinburgh',
        age: '42',
        date: '2010/12/22',
        action: '$92'
      },
      {
        name: 'Jennifer Chang',
        phone: '678967867',
        address: 'Singapore',
        age: '28',
        date: '2010/11/14',
        action: '$357'
      },
      {
        name: 'Brenden Wagner',
        phone: '2222222222',
        address: 'San Francisco',
        age: '28',
        date: '2011/06/07',
        action: '$206'
      },
      {
        name: 'Fiona Green',
        phone: '2222222222',
        address: 'San Francisco',
        age: '48',
        date: '2010/03/11',
        action: '$850'
      },
      {
        name: 'Shou Itou',
        phone: '234567123',
        address: 'Tokyo',
        age: '20',
        date: '2011/08/14',
        action: '$163'
      },
      {
        name: 'Michelle House',
        phone: '5555555555',
        address: 'Sidney',
        age: '37',
        date: '2011/06/02',
        action: '$95'
      },
      {
        name: 'Suki Burks',
        phone: '2222222222',
        address: 'London',
        age: '53',
        date: '2009/10/22',
        action: '$114'
      },
      {
        name: 'Prescott Bartlett',
        phone: '234567123',
        address: 'London',
        age: '27',
        date: '2011/05/07',
        action: '$145'
      },
      {
        name: 'Gavin Cortez',
        phone: '234567123',
        address: 'San Francisco',
        age: '22',
        date: '2008/10/26',
        action: '$235'
      },
      {
        name: 'Martena Mccray',
        phone: '234567123',
        address: 'Edinburgh',
        age: '46',
        date: '2011/03/09',
        action: '$324'
      },
      {
        name: 'Unity Butler',
        phone: '8988888888',
        address: 'San Francisco',
        age: '47',
        date: '2009/12/09',
        action: '$85'
      },
      {
        name: 'Howard Hatfield',
        phone: '1111111111',
        address: 'San Francisco',
        age: '51',
        date: '2008/12/16',
        action: '$164'
      },
      {
        name: 'Hope Fuentes',
        phone: '11111111112',
        address: 'San Francisco',
        age: '41',
        date: '2010/02/12',
        action: '$109'
      },
      {
        name: 'Vivian Harrell',
        phone: '234567123',
        address: 'San Francisco',
        age: '62',
        date: '2009/02/14',
        action: '$452'
      },
      {
        name: 'Timothy Mooney',
        phone: '1111111111',
        address: 'London',
        age: '37',
        date: '2008/12/11',
        action: '$136'
      },
      {
        name: 'Jackson Bradshaw',
        phone: '234567123',
        address: 'New York',
        age: '65',
        date: '2008/09/26',
        action: '$645'
      },
      {
        name: 'Olivia Liang',
        phone: '234567123',
        address: 'Singapore',
        age: '64',
        date: '2011/02/03',
        action: '$234'
      },
      {
        name: 'Bruno Nash',
        phone: '2222222222',
        address: 'London',
        age: '38',
        date: '2011/05/03',
        action: '$163'
      },
      {
        name: 'Sakura Yamamoto',
        phone: '234567123',
        address: 'Tokyo',
        age: '37',
        date: '2009/08/19',
        action: '$139'
      },
      {
        name: 'Thor Walton',
        phone: '2222222222',
        address: 'New York',
        age: '61',
        date: '2013/08/11',
        action: '$98'
      },
      {
        name: 'Finn Camacho',
        phone: '234567123',
        address: 'San Francisco',
        age: '47',
        date: '2009/07/07',
        action: '$87'
      },
      {
        name: 'Serge Baldwin',
        phone: '234567123',
        address: 'Singapore',
        age: '64',
        date: '2012/04/09',
        action: '$138'
      },
      {
        name: 'Zenaida Frank',
        phone: '2222222222',
        address: 'New York',
        age: '63',
        date: '2010/01/04',
        action: '$125'
      },
      {
        name: 'Zorita Serrano',
        phone: '2222222222',
        address: 'San Francisco',
        age: '56',
        date: '2012/06/01',
        action: '$115'
      },
      {
        name: 'Jennifer Acosta',
        phone: '3333333333',
        address: 'Edinburgh',
        age: '43',
        date: '2013/02/01',
        action: '$75'
      },
      {
        name: 'Cara Stevens',
        phone: '4444444444',
        address: 'New York',
        age: '46',
        date: '2011/12/06',
        action: '$145'
      },
      {
        name: 'Hermione Butler',
        phone: '678967867',
        address: 'London',
        age: '47',
        date: '2011/03/21',
        action: '$356'
      },
      {
        name: 'Lael Greer',
        phone: '678967867',
        address: 'London',
        age: '21',
        date: '2009/02/27',
        action: '$103'
      },
      {
        name: 'Jonas Alexander',
        phone: '2222222222',
        address: 'San Francisco',
        age: '30',
        date: '2010/07/14',
        action: '$86'
      },
      {
        name: 'Shad Decker',
        phone: '678967867',
        address: 'Edinburgh',
        age: '51',
        date: '2008/11/13',
        action: '$183'
      },
      {
        name: 'Michael Bruce',
        phone: '3333333333',
        address: 'Singapore',
        age: '29',
        date: '2011/06/27',
        action: '$183'
      },
      {
        name: 'Donna Snider',
        phone: '234567123',
        address: 'New York',
        age: '27',
        date: '2011/01/25',
        action: '$112'
      }
    ]
  };
  
  /* --------------------Box End-------------------------- */
  
  return (
    <div>
            <Header/>
            <h1 className="doc">Patients</h1>
            <MDBBtn gradient="purple" className="btn1">
            <Link className="link" to="/awtaradmin/NewPatient">
            <MDBIcon icon="plus" /> Add Patient</Link>
            </MDBBtn>
      {/* --------------------Box Return-------------------------- */}
        <div className="TableBox">
            <MDBDataTable
            striped
            hover
            data={data}
            />
        </div>    
    </div>
  );
}




export default Patients;