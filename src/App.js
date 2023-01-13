// App.js
import { Authenticator } from '@aws-amplify/ui-react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from 'react';

import "./App.css"

import Join from './components/Join';
import RequireAuth from './RequireAuth';
import Login from './components/Login';
import Present from './components/Present';
import Home from './components/Home';
import Layout from './components/Layout';
import Create from './components/Create';
import ThemeContext from './components/ThemeContext';
import About from './components/AboutPage';
import Presenting from './components/Presenting';

/* The PresenteeRoutes function will provide all the routes 
that are needed to navigate between urls when such buttons 
are clicked. */
const PresenteeRoutes = () => {

  const [pdfFile, setPDFFile] = useState(null)
  const [darkMode, setDarkMode] = useState(false);
  const toggleDarkMode = () => { setDarkMode(!darkMode); };

  return (
    <>
      <div className={`App ${darkMode ? 'dark-theme' : 'light-theme'}`}>
        <ThemeContext.Provider value={{ mode: darkMode, toggle: toggleDarkMode }}>

          <BrowserRouter>
            {/* Routes of App */}
            <Routes>
              {/* Parent compontent Layout
              This holds the routes of all children routes. 
              This means that inside of Layout there are components
              that need to be routed to different urls and these
              are provided here. */}

              <Route path="/" element={<Layout />}>

                {/* Child component Home*/}
                <Route index element={<Home />} />

                {/* Child component Protected*/}
                <Route
                  path="/join"
                  element={
                    <RequireAuth>
                      <Join />
                    </RequireAuth>
                  }
                />

                {/* Child component ProtectedSecond */}
                <Route
                  path="/present"
                  element={
                    <RequireAuth>
                      <Present pdfFile={pdfFile} />
                    </RequireAuth>
                  }
                />

                <Route path="/create" element={
                  <RequireAuth>
                    <Create setPDFFile={setPDFFile} pdfFile={pdfFile} />
                  </RequireAuth>
                } />

                <Route path="/presenting" element={
                  <RequireAuth>
                    <Presenting pdfFile={pdfFile} />
                  </RequireAuth>
                } />

                {/* Child component Login */}

                <Route path="/about" element={<About />} />

              </Route>

              {/* TODO: Figure out what authentification error is caused when trying to hide unauthenticated elements */}
              <Route path="/login" element={<Login />} />
            </Routes>
          </BrowserRouter>
        </ThemeContext.Provider>
      </div>
    </>
  )
} /* End of Presentee Routes function */

const App = () => {
  return (
    <Authenticator.Provider>
      <PresenteeRoutes />
    </Authenticator.Provider>
  );
};

export default App;
