import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { HiOutlineUserCircle } from "react-icons/hi2";
import { BiLock } from "react-icons/bi";
import { MdOutlineCancel } from "react-icons/md";
import './loginForm.css';

const LoginForm = () => {
    const [formData, setFormData] = useState({
        username: '',
        password: '',
    });

    const [error, setError] = useState('');

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleLogin = (e) => {
        e.preventDefault();
        // Add your authentication logic here
        if (formData.username === 'demo' && formData.password === 'password') {
            // Successful login
            console.log('Login successful');
            setError('');
        } else {
            // Failed login
            setError('Invalid username or password');
        }
    };

    return (

        <div className="LoginContainer">
            <div className="login-container">
                <h2 className='loginLabel'>Login</h2>
                 
                <Link to="/" className='loginCancelIconLink'><MdOutlineCancel className='loginCancelIcon' /></Link>
            
                <form className="login-form" onSubmit={handleLogin}>
                    <div className='loginInput1'>
                        <input
                            type="text"
                            id="username"
                            name="username"
                            placeholder='Username'
                            value={formData.username}
                            onChange={handleChange}
                        />
                        <HiOutlineUserCircle className='usernameIcon' />
                    </div>
                    <div className='loginInput1'>
                        <input
                            type="password"
                            id="password"
                            name="password"
                            placeholder='Password'
                            value={formData.password}
                            onChange={handleChange}
                        />
                        <BiLock className='usernameIcon' />

                    </div>

                    {error && <div className="error-message">{error}</div>}
                    <div className='loginforgetDiv'>
                        <Link to="/Register" className='loginforget'>Forget Password?</Link>
                    </div>
                    <button type="submit" className='loginButton'>Login</button>
                </form>
                <p className='logindonthaveacc'>
                    Don't have an account? <Link to="/Register" className='linkRegister'>Register</Link>
                </p>
            </div>
        </div>
    );
};

export default LoginForm;