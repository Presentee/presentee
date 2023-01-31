import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import Login from './routes/Login';
import Join from './routes/Join';

import ThemeContext from 'context';
import 'styles.css';

import Admin from 'routes/Admin';
import RequireAuth from 'RequireAuth';
import Home from './components/Home'

const App = () => {

    const [darkMode, setDarkMode] = useState(false);
    const toggleDarkMode = () => { setDarkMode(!darkMode); };

    return (
        <div className={`App ${darkMode ? 'dark-theme' : 'light-theme'}`}>
            <ThemeContext.Provider value={{ mode: darkMode, toggle: toggleDarkMode }}>
                <BrowserRouter>
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/login" element={<Login />} />

                        {/* Protected route to Join component in routes folder,
                            will only appear in header if authenticated. */}
                        <Route path="/join" element={
                            <RequireAuth>
                                <Join />
                            </RequireAuth>
                        } />
                        {/* Protected route to admin component in routes folder,
                            will only allow to be routed if authenticated. */}
                        <Route path="/admin" element={
                            <RequireAuth>
                                 <Admin />
                            </RequireAuth>
                        } />
                    </Routes>
                </BrowserRouter>
            </ThemeContext.Provider>
        </div>
    );
}

export default App