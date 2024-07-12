import React from 'react';
import { Container } from 'react-bootstrap';
import './cardsHomePages.css';
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
            <h1 className='text text-center my-5'> Le Principali Città</h1>

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
                                Palermo è il capoluogo della Sicilia. La Cattedrale di Palermo, del XII secolo,  
                                mentre l'imponente Teatro Massimo neoclassico è famoso per gli spettacoli di opera lirica. 
                            </MDBCardText>
                        </MDBCardBody>
                    </MDBCard>
                </MDBCol>
                <MDBCol>
                    <MDBCard>
                        <MDBCardImage className='wrapper'
                            src='https://upload.wikimedia.org/wikipedia/commons/thumb/b/b9/Catania_vista_dall%27alto_e_il_vulcano_Etna_a_sovrastarla.jpg/1200px-Catania_vista_dall%27alto_e_il_vulcano_Etna_a_sovrastarla.jpg'
                            alt='...'
                            position='top'
                        />
                        <MDBCardBody>
                            <MDBCardTitle>Catania</MDBCardTitle>
                            <MDBCardText>
                            Catania è un'antica città portuale sulla costa orientale della Sicilia. 
                            È situata ai piedi dell'Etna, un vulcano attivo con sentieri che arrivano fino alla sua sommità.
                            </MDBCardText>
                        </MDBCardBody>
                    </MDBCard>
                </MDBCol>
                <MDBCol>
                    <MDBCard>
                        <MDBCardImage className='wrapper'
                            src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRu8C5rUM1gv3xavN9CwhuEj7MFtH4Pp6_0kw&s'
                            alt='...'
                            position='top'
                        />
                        <MDBCardBody>
                            <MDBCardTitle>Messina</MDBCardTitle>
                            <MDBCardText>
                            Messina è una città portuale nella Sicilia nord-orientale, 
                            separata dall'Italia continentale dallo Stretto di Messina. 
                            È nota per il Duomo di Messina, di epoca normanna.
                            </MDBCardText>
                        </MDBCardBody>
                    </MDBCard>
                </MDBCol>

            </MDBRow>

        </Container>
    );
}
export default HomePagesCards;