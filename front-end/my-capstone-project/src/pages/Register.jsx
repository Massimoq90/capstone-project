import React from 'react'
import Container from 'react-bootstrap/esm/Container';
import RegisterForm from '../components/form/RegisterForm';


//logica per la registrazione
const Register = () => {
    return (
        <Container className='my-5'>
            <h1 className='text text-center'>Register</h1>
            <RegisterForm/>
        </Container>
    )
}

export default Register;