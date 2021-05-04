import React from 'react';

function DoctorList(props) {
    return (
        <div>
            {props.patients.map(patient => (
                <>
                <li>{patient.name}</li>
                <li>{patient.age}</li>
                <li>{patient.disease}</li>
                </>
            ))}
        </div>
    )
}

export default DoctorList;