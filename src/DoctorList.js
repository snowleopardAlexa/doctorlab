import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

function DoctorList(props) {
    return (
        <div>
            {props.patients.map(patient => (
            // Grid 
              <Container>  
               <Row>
                <Col>{patient.name}</Col>
                <Col>{patient.age}</Col>
                <Col>{patient.disease}</Col>
               </Row>
              </Container>
            ))}
        </div>
    )
}

export default DoctorList;