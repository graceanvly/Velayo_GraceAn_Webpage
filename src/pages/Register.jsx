import {UseState, useEffect} from 'react';
import RegisterForm from '../components/RegisterForm';
import './Login.css';

const Register = () => {
    return (
        <div style={{width: 600, margin:"auto", marginTop: 40 }}>
            <h3>Register</h3>
            <RegisterForm/>
        </div>
    )   
};
export default Register;