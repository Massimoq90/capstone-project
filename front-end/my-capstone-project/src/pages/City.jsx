import React from 'react';
import Container from 'react-bootstrap/esm/Container';

import {
    MDBCard,
    MDBCardImage,
    MDBCardBody,
    MDBCardTitle,
    MDBCardText,
    MDBRow,
    MDBCol
} from 'mdb-react-ui-kit';

const HomePagesCards = () => {
    return (
        <Container>
            <MDBRow className='row-cols-1 row-cols-md-3 g-4 my-4'>
                <MDBCol>
                    <MDBCard>
                        <MDBCardImage className='wrapper'

                            src='https://images.winalist.com/blog/wp-content/uploads/2022/05/04203233/palermo-cathedral-garden-sicily-1024x683.jpg'
                            alt='...'
                            position='top'
                        />
                        <MDBCardBody>
                            <MDBCardTitle>Palermo</MDBCardTitle>
                            <MDBCardText className='title'>
                                This is a longer card with supporting text below as a natural lead-in to additional content.
                                This content is a little bit longer.
                            </MDBCardText>
                        </MDBCardBody>
                    </MDBCard>
                </MDBCol>
       
    

            </MDBRow>

        </Container>
    );
}
export default HomePagesCards;