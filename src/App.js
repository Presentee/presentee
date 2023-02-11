import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import Login from './routes/Login';

import ThemeContext from 'context';
import 'styles.css';


import RequireAuth from 'RequireAuth';

import AboutPage from 'components/Pages/AboutPage';
import CreatePage from 'components/Pages/CreatePage';
import PresentPage from 'components/Pages/PresentPage';
import HomePage from 'components/Pages/HomePage';
import AdminPage from 'components/Pages/AdminPage';
import JoinPage from 'components/Pages/JoinPage';

const App = () => {

    const [pdfFile, setPDFFile] = useState(null);
    const [darkMode, setDarkMode] = useState(false);
    const toggleDarkMode = () => { setDarkMode(!darkMode); };

    return (
        <div className={`App ${darkMode ? 'dark-theme' : 'light-theme'}`}>
            <ThemeContext.Provider value={{ mode: darkMode, toggle: toggleDarkMode }}>
                <BrowserRouter>
                    <Routes>
                        
                        <Route path="/" element={<HomePage />} />
                        <Route path="/login" element={<Login />} />

                        {/* Protected route to Join component in routes folder,
                            will only appear in header if authenticated. */}
                        <Route path="/join" element={
                            <RequireAuth>
                                <JoinPage />
                            </RequireAuth>
                        } />


                        <Route path="/create" element={
                            <RequireAuth>
                                <CreatePage setPDFFile={setPDFFile} pdfFile={pdfFile} />
                            </RequireAuth>
                        } />

                        <Route path="/present" element={
                            <RequireAuth>
                                <PresentPage pdfFile={pdfFile} />
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
                                 <AdminPage />
                            </RequireAuth>
                        } />


                    </Routes>

                </BrowserRouter>
            </ThemeContext.Provider>
        </div>
    );
}

export default App