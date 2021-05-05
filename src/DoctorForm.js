import React from 'react';
import { Form, Button } from 'react-bootstrap';

function DoctorForm(props) {
    return (
      <div className="form">
          <h6 style={{marginTop: '10px', marginLeft:'17px', float: 'left'}}>Enter data</h6>
          <Form className="ml-3" style={{width: '90%'}}>
          <Form.Group>
           <Form.Control type="name" placeholder="name" />
          </Form.Group>
          <Form.Group>
           <Form.Control type="age" placeholder="age" />
          </Form.Group>
          <Form.Group>
           <Form.Control type="disease" placeholder="disease" />
          </Form.Group>
          <Button variant="primary" type="submit" size="sm">
            Submit
          </Button>
          </Form>
      </div>
    );
}

export default DoctorForm;