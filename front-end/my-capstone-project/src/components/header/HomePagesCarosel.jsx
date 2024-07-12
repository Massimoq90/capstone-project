import React from 'react';
import { MDBCarousel, MDBCarouselItem } from 'mdb-react-ui-kit';
import './homePagesCarosel.css';

const HomePagesCarousel = () => {
    return (
        <>
            <h1 className='text text-center homeText '> Trinacria Incoming</h1>
            <MDBCarousel showControls fade>
                <MDBCarouselItem itemId={1} className=''>
                    <img src='https://upload.wikimedia.org/wikipedia/commons/1/1f/Cloudless_Sicily.jpg' className='d-block w-100 caroselHome' alt='...' />
                </MDBCarouselItem>
                <MDBCarouselItem itemId={2}>
                    <img src='https://www.brezzadestate.com/wp-content/uploads/2021/02/1-San-Vito-Lo-Capo.jpeg' className='d-block w-100 caroselHome' alt='...' />
                </MDBCarouselItem>
                <MDBCarouselItem itemId={3}>
                    <img src='https://www.sicilia.info/wp-content/uploads/sites/91/taormina-teatro.jpg' className='d-block w-100 caroselHome' alt='...' />
                </MDBCarouselItem>

            </MDBCarousel>
        </>
    );
}

export default HomePagesCarousel;