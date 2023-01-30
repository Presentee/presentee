import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './routes/Login';
import Header from 'components/Header';

import Admin from 'routes/Admin';
import RequireAuth from 'RequireAuth';

const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Header />} />
                <Route path="/login" element={<Login />} />
            
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