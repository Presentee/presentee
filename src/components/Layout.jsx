// components/Layout.js
import React from 'react';
import NavBar from './NavBar';

import { Outlet } from 'react-router-dom';

import { useAuthenticator, Heading, View } from '@aws-amplify/ui-react';

const Layout = () => {
  const { route } = useAuthenticator((context) => [
    context.route,
    context.signOut,
  ]);

  return (
    <>
      <NavBar />
      <Outlet /> {/* What is an outlet? */}
    </>
  );
}

export default Layout;