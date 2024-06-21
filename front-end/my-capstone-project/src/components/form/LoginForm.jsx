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

const LoginForm = () => {

    const [user, setUser] = useState({})

    const formHandler = (e) => {
        setUser({
            ...user,
            [e.target.name]: e.target.value
        })
    }
    const formHandlerSubmit = (e) => {
        axios.post('http://localhost:3030/users/login', user)
            .then(response => console.log(response))
            .catch(error => console.log(error))
    }

    return (
        <MDBContainer fluid>

            <MDBRow className='d-flex justify-content-center align-items-center h-100'>
                <MDBCol col='12'>

                    <MDBCard className='bg-white my-5 mx-auto' style={{ borderRadius: '1rem', maxWidth: '500px' }}>
                        <MDBCardBody className='p-5 w-100 d-flex flex-column'>

                            <h2 className="fw-bold mb-2 text-center">Sign in</h2>
                            <p className="text-white-50 mb-3">Please enter your login and password!</p>

                            <MDBInput wrapperClass='mb-4 w-100' name='Email' label='Email ' id='formControlLg'
                                type='email' size="lg" onChange={formHandler} />

                            <MDBInput wrapperClass='mb-4 w-100' name='Password' label='Password' id='formControlLg'
                                type='password' size="lg" onChange={formHandler} />

                            <MDBBtn size='lg' onClick={formHandlerSubmit}>
                                Login
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

export default LoginForm;