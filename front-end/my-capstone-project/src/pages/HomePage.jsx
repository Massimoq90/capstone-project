import React from 'react'
import Container from 'react-bootstrap/esm/Container';
import HomePagesCarousel from '../components/header/HomePagesCarosel';
import HomePagesCards from '../components/main/HomePagesCards';

const HomePage = () => {



    return (
        <Container className='my-5'>
            <HomePagesCarousel />
            <HomePagesCards />
        </Container>
    )
}

export default HomePage;