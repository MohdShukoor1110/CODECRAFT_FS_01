import { Bot } from 'lucide-react';
import { useContext } from 'react';

import { AppContext } from '../Context/Context';

function Welcome(props) {
    const { loggedInUser } = useContext(AppContext);

    return (
        <div className='d-flex min-vh-100 justify-content-center align-items-center text-center'>
            <div className='container-fluid'>
                < Bot  size={150}/>
                <h2>Welcome "{loggedInUser}"</h2>
                <p>This is Secure User Authentication Page.</p>
                <button onClick={props.handleLogout} className='btn btn-outline-danger'>Logout</button>
            </div>
        </div>
    )
}

export default Welcome