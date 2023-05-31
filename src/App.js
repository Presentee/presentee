import React from 'react';
import { Routes, Route } from 'react-router-dom';
import ThemeContext from './context';
import RequireAuth from './RequireAuth';
import AboutPage from './Pages/AboutPage';
import CreatePage from './Pages/CreatePage';
import PresentPage from './Pages/PresentPage';
import HomePage from './Pages/HomePage';
import JoinPage from './Pages/JoinPage';
import LoginPage from './Pages/LoginPage';
import Presenting from './Pages/PresentingPage';
import PageNotFound from './Pages/404Page/404';
import Settings from './Pages/SettingsPage';
import ChangePassword from './Pages/ChangePasswordPage';
import ChangeEmail from './Pages/ChangeEmailPage';
import './styles.css';
import NavigationBar from 'Navigation';



const publicRoutes = {
    "home" : <HomePage />,
    "login" : <LoginPage />,
    "join" : <JoinPage />,
    "*" : <PageNotFound />,
    "about" : <AboutPage />
};


const privateRoutes = {
    "create" : 
    <RequireAuth>
        <CreatePage  />
    </RequireAuth>,

    "present" : 
    <RequireAuth>
        <PresentPage  />
    </RequireAuth>,

    "presenting" : 
    <RequireAuth>
        <Presenting />
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

const App = () => {

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
                <NavigationBar theme={theme} />
                <Routes>
                    {/* These are the public routes that will be offered to anyone that enters the website 
                        without being authenticated. */}
                    <Route path="/Home" element={publicRoutes["home"]} />
                    <Route path="/login" element={publicRoutes["login"]} />
                    <Route path="/join" element={publicRoutes["join"]} />
                    <Route path="/" element={publicRoutes["home"]} />
                    <Route path="*" element={publicRoutes["*"]} />
                    <Route path="/about" element={publicRoutes["about"]} />

                    {/* These are the private routes that will be offered once a user has created an account
                        and been authenicated. */}
                    <Route path="/create" element={privateRoutes["create"]} />
                    <Route path='/present' element={privateRoutes['present']} />
                    <Route path='/presenting' element={privateRoutes['presenting']} />
                    <Route path="/settings" element={privateRoutes["settings"]} />
                    <Route path="/settings/password" element={privateRoutes["changePassword"]} />
                    <Route path="/settings/email" element={privateRoutes["changeEmail"]} />
                        
                </Routes>
            </ThemeContext.Provider>
        </div>
       
    );
}

export default App