import { BrowserRouter, Routes, Route } from 'react-router-dom';
import React, { useState } from 'react';
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
import Settings from 'Pages/SettingsPage/Settings';
import GuestSettings from 'Pages/SettingsPage/GuestSettings';
import ChangePassword from 'Pages/ChangePasswordPage';
import ChangeEmail from 'Pages/ChangeEmailPage';
// import QuestionsPage from 'Pages/QuestionsPage/QuestionsPage';
// import PollsPage from 'Pages/PollsPage/PollsPage';
import NavigationBar from 'Navigation';
import 'styles.css';


const App = () => {

    const [pdfFile, setPDFFile] = useState(null);
    const [roomID, setRoomID] = useState(null);

    const [theme, setTheme] = React.useState(() => {
        const storedTheme = localStorage.getItem('theme');
        return storedTheme ? storedTheme : 'light';
    });

    const toggleDarkMode = () => {
        const newTheme = theme === 'dark' ? 'light' : 'dark';
        setTheme(newTheme);
        localStorage.setItem('theme', newTheme);
    };

    const publicRoutes = {
        "home" : <HomePage />,
        "login" : <LoginPage />,
        "join" : <JoinPage />,
        "*" : <PageNotFound />,
        "about" : <AboutPage />,
        // "questions" : <QuestionsPage />,
        // "polls" : <PollsPage />
        "guestsettings" : <GuestSettings />,
    };


    const privateRoutes = {
        "create" : 
        <RequireAuth>
            <CreatePage setPDFFile={setPDFFile} pdfFile={pdfFile} />
        </RequireAuth>,

        "present" : 
        <RequireAuth>
            <PresentPage setPDFFile={setPDFFile} pdfFile={pdfFile} setRoomID={setRoomID} />
        </RequireAuth>,

        "presenting" : 
        <RequireAuth>
            <Presenting pdfFile={pdfFile} roomID={roomID} />
        </RequireAuth>,

        "settings" : 
        <RequireAuth>
            <Settings />
        </RequireAuth>,

        "changePassword" : 
        <RequireAuth>
            <ChangePassword />
        </RequireAuth>,

        "changeEmail" : 
        <RequireAuth> 
            <ChangeEmail />
        </RequireAuth>
    };


    return (
        <div className={`App ${theme}`}>
            <ThemeContext.Provider value={{ theme: theme, toggle: toggleDarkMode }}>
                <BrowserRouter>
                    <NavigationBar theme={theme}/>
                    <Routes>

                         {/* These are the public routes that will be offered to anyone that enters the website 
                            without being authenticated. */}
                        <Route path="/Home" element={publicRoutes["home"]} />
                        <Route path="/login" element={publicRoutes["login"]} />
                        <Route path="/join" element={publicRoutes["join"]} />
                        <Route path="/join/:roomNum" element={publicRoutes["join"]} />
                        <Route path="/" element={publicRoutes["home"]} />
                        <Route path="*" element={publicRoutes["*"]} />
                        <Route path="/about" element={publicRoutes["about"]} />
                        {/* <Route path="/questions" element={publicRoutes["questions"]} /> */}
                        {/* <Route path="/polls" element={publicRoutes["polls"]} /> */}
                        <Route path="/guestsettings" element={publicRoutes["guestsettings"]} />

                        {/* These are the private routes that will be offered once a user has created an account
                            and been authenicated. */}
                        <Route path="/create" element={privateRoutes["create"]} />
                        <Route path='/present' element={privateRoutes['present']} />
                        <Route path='/presenting' element={privateRoutes['presenting']} />
                        <Route path="/settings" element={privateRoutes["settings"]} />
                        <Route path="/settings/password" element={privateRoutes["changePassword"]} />
                        <Route path="/settings/email" element={privateRoutes["changeEmail"]} />
                        
                    </Routes>

                </BrowserRouter>
            </ThemeContext.Provider>
        </div>
    );
}

export default App