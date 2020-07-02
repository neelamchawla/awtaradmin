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
                  <Route exact path="/" component={ Home } />
                  <Route exact path="/home" component={ Home } />
                  <Route exact path="/doctors" component={ Doctors } />
                  <Route exact path="/NewDoc" component={NewDoc} />
                  <Route exact path="/Patients" component={Patients} />
                  <Route exact path="/NewPatient" component={NewPatient} />
                  <Route exact path="/Appointments" component={Appointments} />
                  <Route exact path="/NewAppointment" component={NewAppointment} />
                  <Route exact path="/Payments" component={Payments} />
                  <Route exact path="/NewPayment" component={NewPayment} />
                  <Route exact path="/Expenses" component={Expenses} />
                  <Route exact path="/NewExp" component={NewExp} />
                  {/* <Route exact path="/login" component={Login} /> */}
                </Switch>
    );
   
}
}
ReactDOM.render(<BrowserRouter><App /></BrowserRouter>, document.getElementById('root'));
