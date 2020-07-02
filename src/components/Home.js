import React from "react";
import Header from './header';
import Box from './box';
import TablePatient from './TablePatient';
import Chart from './Chart';
import TableDoc from './TableDoc';
import TableAppoint from './TableAppoint';
import Calendar from './Calendar.PNG';
import ChartAge from './ChartAge';

export const Home = props => {
  return (
    <div>
        <Header/>
        <Box/>
        <Chart/>
        <ChartAge/>
        <TableAppoint/>
        <TableDoc className="Table2"/>
        <TablePatient/>
        <img className="Calendar" alt="Calendar" src={Calendar}/>
    </div>
  );
};
