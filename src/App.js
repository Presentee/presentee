import React from "react";
 
// We use Route in order to define the different routes of our application
import { Route, Routes } from "react-router-dom";
 
// We import all the components we need in our app
import Navbar from "./components/navbar";
import RecordList from "./components/recordList";
import Edit from "./components/edit";
import Create from "./components/create";
import QRCode from "./components/qrcode";
import { withAuthenticator, Authenticator } from '@aws-amplify/ui-react';
import Amplify, { API, graphqlOperation } from 'aws-amplify';
import awsExports from './aws-exports';
import '@aws-amplify/ui-react/styles.css';

Amplify.configure(awsExports);
 
const App = () => {
  


  return (
    <div>
      <Navbar />
      <Routes>
<<<<<<< Updated upstream
        <Route exact path="/" element={<RecordList />} />
        <Route path="/edit/:id" element={<Edit />} />
        <Route path="/create" element={<Create />} />
        <Route path="/qrcode/:id" element={<QRCode />} />
        </Routes>
    </div>
=======
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
                <ProtectedSecond />
              </RequireAuth>
            }
          />
          <Route path="/create" element={
          <RequireAuth>
            <Create />
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
>>>>>>> Stashed changes
  );
};
 
export default withAuthenticator(App);
