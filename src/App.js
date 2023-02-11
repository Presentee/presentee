import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import Login from './routes/Login';
import Join from './routes/Join';

import ThemeContext from 'context';
import 'styles.css';

import Admin from 'routes/Admin';
import RequireAuth from 'RequireAuth';
import Home from './components/Home'
import AboutPage from 'components/Pages/AboutPage';
import CreatePage from 'components/Pages/CreatePage';
import PresentPage from 'components/Pages/PresentPage';

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


                        <Route path="/create" element={
                            <RequireAuth>
                                <CreatePage />
                            </RequireAuth>
                        } />

                        <Route path="/present" element={
                            <RequireAuth>
                                <PresentPage />
                            </RequireAuth>
                        } />

                        {/* The about path will be open reguardless of use is logged in or not */}
                        <Route path="/about" element={
                            <AboutPage />
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