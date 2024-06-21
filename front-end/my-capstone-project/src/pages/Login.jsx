import React from 'react';
import Container from 'react-bootstrap/esm/Container';
import LoginForm from '../components/form/LoginForm';

const Login = () => {
    return (
        <Container className='my-5'>
            <h1 className='text text-center'>Login</h1>
            <LoginForm/>
        </Container>
    )
}

export default Login;