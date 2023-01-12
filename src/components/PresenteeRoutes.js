import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from 'react';

import Protected from './Protected';
import RequireAuth from './RequireAuth';
import Login from './Login';
import ProtectedSecond from './ProtectedSecond';
import Home from './Home';
import Layout from './Layout';
import Create from './Create';

/* The PresenteeRoutes function will provide all the routes 
that are needed to navigate between urls when such buttons 
are clicked. */

const PresenteeRoutes = () => {

    const [pdfFile, setPDFFile] = useState()
    
    return (
        <BrowserRouter>
            {/* Routes of App */}
            <Routes>
                {/* Parent compontent Layout
                This holds the routes of all children routes. 
                This means that inside of Layout there are components
                that need to be routed to different urls and these
                are provided here. */}
                <Route path="/" element={<Layout />}> {/* open route */}
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
                    <Route path="/create" 
                        element = {
                            <RequireAuth>
                                <Create setPDFFile={setPDFFile} pdfFile={pdfFile}/>
                            </RequireAuth>
                        }    
                    />
                    {/* Child component Login */}
                    <Route path="/login" element={<Login />} />

                {/* End of parent component Layout */}
                </Route>
            </Routes>
        </BrowserRouter>
    )
  } /* End of Presentee Routes function */

  export default PresenteeRoutes;