// App.js
import { Authenticator } from '@aws-amplify/ui-react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from 'react';

import "./App.css"

import Protected from './components/Protected';
import RequireAuth from './RequireAuth';
import Login from './components/Login';
import ProtectedSecond from './components/ProtectedSecond';
import Home from './components/Home';
import Layout from './components/Layout';
import Create from './components/Create';

/* The PresenteeRoutes function will provide all the routes 
that are needed to navigate between urls when such buttons 
are clicked. */
const PresenteeRoutes = () => {

  const [pdfFile, setPDFFile] = useState(null)
  
  return (
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
            path="/protected"
            element={
              <RequireAuth>
                <Protected />
              </RequireAuth>
            }
          />
          {/* Child component ProtectedSecond */}
          <Route
            path="/protected2"
            element={
              <RequireAuth>
                <ProtectedSecond pdfFile={pdfFile}/>
              </RequireAuth>
            }
          />
          <Route path="/create" element={
          <RequireAuth>
            <Create setPDFFile={setPDFFile} pdfFile={pdfFile}/>
          </RequireAuth>
          } />
          {/* Child component Login */}
          <Route path="/login" element={<Login />} />
        {/* End of parent component Layout */}
        </Route>

        
      </Routes>
    </BrowserRouter>
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
