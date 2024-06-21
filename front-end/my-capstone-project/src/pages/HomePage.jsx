import React from 'react'
import Container from 'react-bootstrap/esm/Container';
import HomePagesCarousel from '../components/main/HomePagesCarosel';
import HomePagesCards from '../components/main/HomePagesCards';


const HomePage = () => {
    return (
        <Container className='my-5'>
            <h1 className='text text-center'> Home Page</h1>
            <HomePagesCarousel />
            <HomePagesCards />
        </Container>
    )
}

export default HomePage;