import React, { useState } from 'react'
import { Container, Form } from 'react-bootstrap'
import axios from 'axios';



const AddCity = () => {

    const [city, setCity] = useState({})


    const formHandler = (e) => {
        setCity({
            ...city,
            [e.target.name]: e.target.value
        })
    }

    const formHandlerSubmit = async (e) => {
        const response = await axios.post('http://localhost:3030/cities', city);
        console.log(response);

    }

    return (
        <>
            <Container className='my-5'>
                <h1 className='text text-center'>Add city</h1>
                <Form>
                    <Form.Group className="mb-3" controlId="formCittà">

                        <Form.Label >Città</Form.Label>
                        <Form.Control
                            onChange={formHandler}
                            name='city'
                            type="text"
                        />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formProvincia">
                        <Form.Label >Provincia</Form.Label>
                        <Form.Control
                            onChange={formHandler}
                            name='province'
                            type="text"
                        />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formDescizione">
                        <Form.Label >Descrizione</Form.Label>
                        <Form.Control
                            onChange={formHandler}
                            name='descrizione'
                            type="text"
                            aria-describedby="passwordHelpBlock"
                        />
                    </Form.Group>
                    <button  onClick={formHandlerSubmit}>submit</button>
                </Form>
            </Container>
        </>
    )
}

export default AddCity
