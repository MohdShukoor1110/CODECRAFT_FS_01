import { Bot } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

function Welcome() {
    const navigate = useNavigate();

    return (
        <div className='d-flex min-vh-100 justify-content-center align-items-center text-center'>
            <div className='container-fluid'>
                < Bot  size={150}/>
                <h2>Welcome "Developers"</h2>
                <p>This is Secure User Authentication Page.</p>
                <button onClick={()=>navigate('/login')} className='btn btn-outline-primary'>Login</button>
            </div>
        </div>
    )
}

export default Welcome