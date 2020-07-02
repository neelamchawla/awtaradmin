import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from "react-router-dom";
// import { Link, animateScroll as scroll } from "react-scroll";
import './index.css';
// import App from './App';

import {Home} from "./components/Home";
import Doctors  from './components/doctors';
import NewDoc  from './components/NewDoc';
import Patients  from './components/Patients';
import NewPatient from './components/NewPatient';
import Appointments from './components/Appointments';
import NewAppointment from './components/NewAppointment';
import Payments from './components/Payments';
import NewPayment from './components/NewPayment';
import Expenses from './components/Expenses';
import NewExp from './components/NewExp';


class App extends React.Component {
    
    render() {
    return (
      
                <Switch>
                  <Route exact path="/awtaradmin" component={ Home } />
                  {/* <Route exact path="/home" component={ Home } /> */}
                  <Route path="/awtaradmin/doctors" component={ Doctors } />
                  <Route path="/awtaradmin/NewDoc" component={NewDoc} />
                  <Route path="/awtaradmin/Patients" component={Patients} />
                  <Route path="/awtaradmin/NewPatient" component={NewPatient} />
                  <Route path="/awtaradmin/Appointments" component={Appointments} />
                  <Route path="/awtaradmin/NewAppointment" component={NewAppointment} />
                  <Route path="/awtaradmin/Payments" component={Payments} />
                  <Route path="/awtaradmin/NewPayment" component={NewPayment} />
                  <Route path="/awtaradmin/Expenses" component={Expenses} />
                  <Route path="/awtaradmin/NewExp" component={NewExp} />
                  {/* <Route exact path="/login" component={Login} /> */}
                </Switch>
    );
   
}
}
ReactDOM.render(<BrowserRouter><App /></BrowserRouter>, document.getElementById('root'));
