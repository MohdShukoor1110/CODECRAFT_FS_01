import { Routes, Route } from "react-router-dom";

import './App.css'
import HomePage from './Pages/HomePage';
import Login from './Components/Login';
import Register from './Components/Register';


function App() {
    return (
        <div className="container-fluid p-0 m-0">
            <Routes>
                <Route path="/" element={ < HomePage /> } />
                <Route path="/login" element={ < Login /> } />
                <Route path='/register' element={ < Register /> } />
            </Routes>
        </div>
    );
}

export default App;
