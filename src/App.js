// App.js
import { Authenticator } from '@aws-amplify/ui-react';

import { Protected } from './components/Protected';
import { RequireAuth } from './RequireAuth';
import { Login } from './components/Login';
import { ProtectedSecond } from './components/ProtectedSecond';
import { Home } from './components/Home';
import { Layout } from './components/Layout';

import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./App.css"

const PresenteeRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
      <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route
            path="/protected"
            element={
              <RequireAuth>
                <Protected />
              </RequireAuth>
            }
          />
          <Route
            path="/protected2"
            element={
              <RequireAuth>
                <ProtectedSecond />
              </RequireAuth>
            }
          />
          <Route path="/login" element={<Login />} />
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
