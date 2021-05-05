import React, { useState } from 'react';
import DoctorList from './DoctorList';
import DoctorForm from './DoctorForm';

import { Navbar } from 'react-bootstrap';

function DoctorApp() {

  const initialPatients = [
    {id: 1, name: "Alexa Slomski", age: 65, disease: "colon cancer", cured: true},
    {id: 2, name: "Agata Pazdur", age: 25, disease: "uclers", cured: true},
    {id: 3, name: "Anna Burdzinski", age: 35, disease: "diverticulosis", cured: false}
  ];

  const [patients, setPatients] = useState(initialPatients);

  return (
    <div className="App">
        {/* Navbar */}
        <Navbar bg="primary">
        <Navbar.Brand style={{color: '#fff', fontWeight: 'bold'}}>DoctorLab</Navbar.Brand>
       </Navbar>
       <DoctorForm />
       <DoctorList patients={patients} />
    </div>
  );
}

export default DoctorApp;

// doctor app: doctorform, doctorlist, doctoritem
// id, name, age, disease, cured = array

