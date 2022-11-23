// App.js
import { Authenticator } from '@aws-amplify/ui-react';
import { BrowserRouter, Routes, Route } from "react-router-dom";

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
  return (
    <BrowserRouter>
      {/* Routes of App */}
      <Routes>
        <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />

        {/* Protected route 1*/}
        <Route path="/protected" element={<RequireAuth> <Protected /> </RequireAuth>} />

        {/* Protected route 2*/}
        <Route path="/protected2" element={<RequireAuth> <ProtectedSecond /> </RequireAuth>} />

        <Route path="/login" element={<Login />} />

        <Route path="/create" element={<Create />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

const App = () => {
  return (
    <Authenticator.Provider>
      <PresenteeRoutes />
    </Authenticator.Provider>
  );
};

export default App;
