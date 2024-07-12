
import { Container } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';

function TextControlsExample() {
    return (
        <Container className='d-flex justify-content-center align-items-center h-100'>
            <Form>
                <Form.Group className="mb-3 w-100 " controlId="exampleForm.ControlInput1">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="name@example.com" />
                </Form.Group>
                <Form.Group className="mb-3 w-100" controlId="exampleForm.ControlTextarea1">
                    <Form.Label>Example textarea</Form.Label>
                    <Form.Control as="textarea" rows={3} />
                </Form.Group>
            </Form>
        </Container>
    );
}

export default TextControlsExample;