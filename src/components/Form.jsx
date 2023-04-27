import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { useState } from 'react';

function FormExample() {
    const [emailAddrs, setEmailAddrs] = useState("");
    const elements = [
        { label: 'Email Address', type: 'email'},
        { label: 'First Name', type: 'text'},
        { label: 'Password', type: 'password'},
    ];

    return (
        <Form>
        {elements.map((elem) => {
            return(
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>{elem.label}</Form.Label>
                    <Form.Control type = {elem.type} placeholder="Enter Email"/>
                </Form.Group>

            ); 
        })}
        <Button variant="primary" type="submit">
            SUBMIT
        </Button>
        <h3>Hi {emailAddrs}</h3>
        </Form>
    );
}
export default FormExample;