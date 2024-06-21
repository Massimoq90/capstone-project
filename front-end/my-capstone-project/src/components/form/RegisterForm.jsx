import React from 'react';
import { useState } from 'react';
import axios from  'axios';

import {
  MDBBtn,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBInput,
  MDBIcon,
}
  from 'mdb-react-ui-kit';

const RegisterForm = () => {

  const [user, setUser] = useState({})


  const formHandler = (e) => {
    setUser({
        ...user,
        [e.target.name] : e.target.value
    })
  }

  const formHandlerSubmit = (e) => {
    axios.post("http://localhost:3030/users/register",user)
    .then(response => console.log(response))
    .catch(error => console.log(error))
  }

  return (
    <MDBContainer fluid>

      <MDBRow className='d-flex justify-content-center align-items-center h-100'>
        <MDBCol col='12'>

          <MDBCard className='bg-white my-5 mx-auto' style={{ borderRadius: '1rem', maxWidth: '500px' }}>
            <MDBCardBody className='p-5 w-100 d-flex flex-column'>

              <h2 className="fw-bold mb-2 text-center">Registrazione utente</h2>
              <p className="text-white-50 mb-3">Please enter your login and password!</p>

              <MDBInput wrapperClass='mb-4 w-100' name='userName' label='Username' id='formControlLg' type='text' size="lg" onChange={formHandler} />
              <MDBInput wrapperClass='mb-4 w-100' name='name' label='Nome' id='formControlLg' type='text' size="lg" onChange={formHandler} />
              <MDBInput wrapperClass='mb-4 w-100' name='surName' label='Cognome' id='formControlLg' type='text' size="lg" onChange={formHandler} />
              <MDBInput wrapperClass='mb-4 w-100' name='ageOfBirth' label='Età' id='formControlLg' type='text' size="lg" onChange={formHandler} />
              <MDBInput wrapperClass='mb-4 w-100' name='phone' label='telefono' id='formControlLg' type='text' size="lg" onChange={formHandler} />
              <MDBInput wrapperClass='mb-4 w-100' name='email' label='Email ' id='formControlLg' type='email' size="lg" onChange={formHandler} />
              <MDBInput wrapperClass='mb-4 w-100' name='password' label='Password' id='formControlLg' type='password' size="lg" onChange={formHandler} />

              <MDBBtn size='lg' onClick={formHandlerSubmit}>
                Registrazione
              </MDBBtn>

              <hr className="my-4" />

              <MDBBtn className="mb-2 w-100" size="lg" style={{ backgroundColor: '#dd4b39' }}>
                <MDBIcon fab icon="google" className="mx-2" />
                google
              </MDBBtn>

            </MDBCardBody>
          </MDBCard>

        </MDBCol>
      </MDBRow>

    </MDBContainer>
  );
}

export default RegisterForm;