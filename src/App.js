import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './routes/Login';

import Admin from 'routes/Admin';
import RequireAuth from 'RequireAuth';
import Home from './components/Home'

const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/login" element={<Login />} />
            
                {/* Protected route to admin component in routes folder,
                    will only allow to be routed if authenticated. */}
                <Route path="/admin" element={
                    <RequireAuth>
                         <Admin />
                    </RequireAuth>
                } />
            </Routes>
        </BrowserRouter>
    );
}

export default App