import React from 'react';
import { Form, Button } from 'react-bootstrap';
import useInputState from './hooks/useInputState';

function DoctorForm({ addPatientData }) {

const [value, handleChange, reset] = useInputState("");

    return (
      <div className="form">
          <h6 style={{marginTop: '10px', marginLeft:'17px', float: 'left'}}>Enter data</h6>
          <Form className="ml-3" style={{width: '90%'}}
             onSubmit={e => {
                e.preventDefault();
                addPatientData(value);
                reset();
            }}
          >
          <Form.Group>
          <Form.Control type="name" placeholder="name" onChange={handleChange} />
          </Form.Group>    
          <Form.Group>
          <Form.Control type="age" placeholder="age" onChange={handleChange} />
          </Form.Group>   
          <Form.Group>
          <Form.Control type="disease" placeholder="disease" onChange={handleChange} />
          </Form.Group>   
          <Button variant="primary" type="submit" size="sm">
            Submit
          </Button>
          </Form>
      </div>
    );
}

export default DoctorForm;