import { useNavigate } from 'react-router-dom';
import { ShieldUser } from 'lucide-react';
import { AppContext } from '../Context/Context';
import { useContext } from 'react';

function NavBar(props) {
    const navigate = useNavigate();

    const { loggedInUser } = useContext(AppContext);

    return (
        <div className='navbar bg-secondary-subtle d-flex justify-content-around'>
            <p className='my-0'><ShieldUser size={25} className='pb-1' />User Auth</p>
            {!(loggedInUser) ? <button onClick={()=>navigate('/login')} className='btn btn-outline-primary'>Login</button>:
            <button onClick={props.handleLogout} className='btn btn-outline-danger'>LogOut</button>}
        </div>
    )
}

export default NavBar 