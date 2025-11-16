import { useState, useContext } from 'react';
import { User } from 'lucide-react'
import { Lock } from 'lucide-react'
import { useNavigate } from 'react-router-dom';
import axios from 'axios'
import { toast } from 'react-toastify'

import NavBar from './NavBar';
import { AppContext } from '../Context/Context';

function Login() {
    const navigate = useNavigate();
    
    const { setLoggedInUser } = useContext(AppContext);

    const [formData, setFormData] = useState({
        userName: '',
        password: ''
    });

    const [message, setMessage] = useState('');

    const { userName, password } = formData;

    const onChange = (e) => setFormData({
        ...formData,
            [e.target.name]: e.target.value
        });
    
    const onSubmit = async (e) => {
        e.preventDefault();
        try {
            const res = await axios.post('http://localhost:5000/api/auth/login', {
                userName,
                password
            });
            localStorage.setItem('token', res.data.token);
            setLoggedInUser(userName);
            setMessage('Logged in Successful');
            toast.success('Logged in Successfully');
            navigate('/');

        } catch (err) {
            console.error(err.response.data);
            setMessage('Failed to Login - Wrong Credentials');
            toast.error('Failed to Login - Wrong Credentials');     
        }
    }

    return (
        <div className='container-fluid p-0 m-0'>
            <NavBar />
            
            <form onSubmit={onSubmit} className='card d-flex justify-content-center align-items-center p-4' style={{width:'300px', margin:'auto', marginTop:'100px'}}>
                <h2>Login</h2>
                
                <div className='bg-light border border-dark rounded p-2 mb-2' style={{width:'240px'}}>
                    <User size={20} className='pb-1' />
                    
                    <input className='border-0 bg-light' type="userName" placeholder='Enter Your Name' name='userName' value={userName} onChange={onChange} required />
                </div>
                
                <div className='bg-light border border-dark rounded p-2' style={{width:'240px'}}>
                    <Lock size={20} className='pb-1' />

                    <input className='border-0 bg-light' type="password" placeholder='Enter your Password' name='password' value={password} onChange={onChange} required />
                </div>

                <button className='btn btn-primary mt-2'>Login</button>

                <p>Don't have an acount? 
                    <button onClick={()=>navigate('/register')} className='btn btn-link text-primary m-0 p-0 pb-1'>
                        Sign Up
                    </button> 
                </p>
            </form>
        </div>
    )
}

export default Login