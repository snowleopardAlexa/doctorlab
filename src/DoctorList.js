import React from 'react';
import Navbar from 'react-bootstrap/Navbar';

function DoctorList() {
  return (
    <div className="App">
        {/* Navbar  */}
        <Navbar bg="primary">
        <Navbar.Brand style={{color: '#fff', fontWeight: 'bold'}}>DoctorLab</Navbar.Brand>
       </Navbar>
    </div>
  );
}

export default DoctorList;