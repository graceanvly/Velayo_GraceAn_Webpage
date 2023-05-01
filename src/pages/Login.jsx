import {UseState, useEffect} from 'react';
import LoginForm from '../components/LoginForm';
import './Login.css';

const Login = () => {
    return (
        <div style={{width: 600, margin:"auto", marginTop: 40 }}>
            <h3>Login</h3>
            <LoginForm/>
        </div>
    )
};
export default Login;