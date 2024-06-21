import React from 'react'
import Container from 'react-bootstrap/esm/Container';

const Error = () => {
  return (
    <Container className='my-5'>
      <h1 className='text text-center'>404</h1>
      <h2 className='text text-center'>Page Not Found</h2>
      <p className='text text-center'>The page you are looking for does not exist.</p>
    </Container>
  )
}


export default Error;