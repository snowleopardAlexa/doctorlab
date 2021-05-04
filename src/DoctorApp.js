import React, { useState } from 'react';
import { Navbar, Row, Col, Container } from 'react-bootstrap';

function DoctorApp() {

  const initialPatients = [
    {id: 1, name: "Alexa Slomski", age: 55, disease: "cancer", cured: false},
    {id: 1, name: "Agata Pazdur", age: 25, disease: "uclers", cured: true},
    {id: 1, name: "Anna Burdzinski", age: 35, disease: "diverticulosis", cured: false}
  ];

  const [patients, setPatient] = useState([initialPatients]);

  return (
    <div className="App">
        {/* Navbar */}
        <Navbar bg="primary">
        <Navbar.Brand style={{color: '#fff', fontWeight: 'bold'}}>DoctorLab</Navbar.Brand>
       </Navbar>
       <DoctorList patients={patients} />
       {/* Grid */}
       <Container>  
        <Row>
         <Col>Add patient</Col>
         <Col>patient info</Col>
       </Row>
       </Container>
    </div>
  );
}

export default DoctorApp;

// doctor app: doctorform, doctorlist, doctoritem
// id, name, age, disease, cured = array

