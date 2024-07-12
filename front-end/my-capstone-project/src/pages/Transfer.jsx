import React from 'react';
import { useState } from 'react';
import { Button, Container, Form, Modal } from 'react-bootstrap';


const Transfer = () => {

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const showAlert = () => {
        alert('trasferimento effettuato con successo!');
    };

    return (


        <Container className='my-5'>
            <h1 className='text text-center'>Clicca il pulsante per prenotare il tuo trasferimento</h1>
            <Button className=' position-relative justify-content-center my-5 "' variant="primary " onClick={handleShow}>
                Prenotazione Tresferimento
            </Button>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Prenota il tuo trasferimento</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>Email per confermare il trasferimento</Form.Label>
                            <Form.Control
                                type="email"
                                placeholder="name@example.com"
                                autoFocus
                            />
                        </Form.Group>
                        <Form.Group
                            className="mb-3"
                            controlId="exampleForm.ControlTextarea1"
                        >
                            <Form.Label>Descrivi il tuo trasferimento</Form.Label>
                            <Form.Control as="textarea" rows={3} />
                        </Form.Group>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={showAlert}>
                        Save Changes
                    </Button>
                </Modal.Footer>
            </Modal>

        </Container>
    )
}
export default Transfer;

