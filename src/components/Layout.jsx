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
      <Heading level={1}>Presentee</Heading>
      <View>
        {route === 'authenticated' ? 'You are logged in!' : 'Please Login!'}
      </View>

      <Outlet />
    </>
  );
}

export default Layout;