import React from 'react';
import { Navbar, Row, Col, Container } from 'react-bootstrap';

function DoctorApp() {
  return (
    <div className="App">
        {/* Navbar */}
        <Navbar bg="primary">
        <Navbar.Brand style={{color: '#fff', fontWeight: 'bold'}}>DoctorLab</Navbar.Brand>
       </Navbar>
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