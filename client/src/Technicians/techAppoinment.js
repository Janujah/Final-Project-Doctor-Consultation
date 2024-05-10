import React from 'react';
import AppointmentCalendar from '../Components/AppointmentCalendar';
import Nav from '../Components/technav'

function App() {
  return (
    <div >
        <Nav/><br/><br/><br/><br/><br/><br/>
      <h1 style={{textAlign:'center',color:' #0e0737',fontWeight:'800', fontSize:'70px'}}>Your Appointments</h1><br/>
      <AppointmentCalendar  />
    </div>
  );
}

export default App;
