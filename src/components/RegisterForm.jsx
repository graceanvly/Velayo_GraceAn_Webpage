import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { useState } from 'react';

function FormExample() {
    const [FirstName, setFirstName] = useState('');
    const elements = [
        { label: 'First Name', type: 'text'},
        { label: 'Last Name', type: 'text'},
        { label: 'Email Address', type: 'email'},
        { label: 'Password', type: 'password'},
        { label: 'Confirm Password', text: 'password'},
        
    ];

    return (
        <Form>
        {elements.map((elem) => {
            return(
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>{elem.label}</Form.Label>
                    <Form.Control type = {elem.type} placeholder="Enter"
                    onChange={(e) => setFirstName(e.target.value)}/>
                    
                </Form.Group>

            ); 
        })}
        <Button variant="primary" type="Register">
            SUBMIT
        </Button>
        <h3>Hi {FirstName}!</h3>
        </Form>
    );
}
export default FormExample;