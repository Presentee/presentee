import { BrowserRouter, Routes, Route } from 'react-router-dom';
import React, { useState, useContext } from 'react';
import ThemeContext from 'context';
import RequireAuth from 'RequireAuth';
import AboutPage from 'Pages/AboutPage';
import CreatePage from 'Pages/CreatePage';
import PresentPage from 'Pages/PresentPage';
import HomePage from 'Pages/HomePage';
import JoinPage from 'Pages/JoinPage';
import LoginPage from 'Pages/LoginPage';
import Presenting from 'Pages/PresentingPage';
import PageNotFound from 'Pages/404Page/404';
import 'styles.css';

const App = () => {

    const [pdfFile, setPDFFile] = useState(null);
    const [theme, setTheme] = React.useState(() => {
        const storedTheme = localStorage.getItem('theme');
        return storedTheme ? storedTheme : 'light';
    });
    const toggleDarkMode = () => {
        const newTheme = theme === 'dark' ? 'light' : 'dark';
        setTheme(newTheme);
        localStorage.setItem('theme', newTheme);
    };

    return (
        <div className={`App ${theme}`}>
            <ThemeContext.Provider value={{ theme: theme, toggle: toggleDarkMode }}>
                <BrowserRouter>
                    <Routes>

                        <Route path="/Home" element={<HomePage/>} />
                        <Route path="/login" element={<LoginPage />} />
                        <Route path="/join" element={<JoinPage setPDFFile={setPDFFile}/>} />
                        <Route path="/" element={<HomePage/>} />

                        <Route path="/create" element={
                            <RequireAuth>
                                <CreatePage setPDFFile={setPDFFile} pdfFile={pdfFile} />
                            </RequireAuth>
                        } />

                        <Route path="/present" element={
                            <RequireAuth>
                                <PresentPage setPDFFile={setPDFFile} pdfFile={pdfFile} />
                            </RequireAuth>
                        } />

                        {/* The about path will be open reguardless of use is logged in or not */}
                        <Route path="/about" element={
                            <AboutPage />
                        } />

                        {/* Proteted route Presenting */}
                        <Route path="/presenting" element={
                            <RequireAuth>
                                <Presenting pdfFile={pdfFile} />
                            </RequireAuth>
                        } />

                        {/* 404 Page */}
                        <Route path="*" element={<PageNotFound />} />
                        
                    </Routes>

                </BrowserRouter>
            </ThemeContext.Provider>
        </div>
    );
}

export default App