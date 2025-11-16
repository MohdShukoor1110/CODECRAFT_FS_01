import { useState } from 'react';
import { User } from 'lucide-react'
import { Lock } from 'lucide-react'
import NavBar from './NavBar'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

function Register() {
    const navigate = useNavigate();

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
            const res = await axios.post('http://localhost:5000/api/auth/register', {
                userName,
                password
            });
            setMessage('Registered Successfully');
            toast.success('Registered Successfully');
            navigate('/login');
        } catch (err) {
            console.error(err.response.data);
            setMessage('Failed to Register, User Already Exists');
            toast.error('Failed to Register, User Already Exists');
        }
    }

    return (
        <div className='container-fluid p-0 m-0'>
            <NavBar />

            <form onSubmit={onSubmit} className='card d-flex justify-content-center align-items-center p-4' style={{width:'300px', margin:'auto', marginTop:'100px'}}>
                <h2>Register</h2>
                
                <div className='bg-light border border-dark rounded p-2 mb-2' style={{width:'240px'}}>
                    <User size={20} className='pb-1' />
                    
                    <input className='border-0 bg-light' type="userName" placeholder='Enter Your Name' name='userName' value={userName} onChange={onChange} required />
                </div>
                
                <div className='bg-light border border-dark rounded p-2' style={{width:'240px'}}>
                    <Lock size={20} className='pb-1' />
                    
                    <input className='border-0 bg-light' type="password" placeholder='Enter your Password' name='password' value={password} onChange={onChange} required />
                </div>
                
                <button className='btn btn-primary mt-2'>Register</button>
            </form>
        </div>
    )
}

export default Register