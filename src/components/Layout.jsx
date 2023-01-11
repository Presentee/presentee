// components/Layout.js
import React from 'react';
import { Outlet } from 'react-router-dom';
import { useAuthenticator, Heading, View } from '@aws-amplify/ui-react';
import NavBar from './Navbar';

const Layout = () => {
  const { route } = useAuthenticator((context) => [
    context.route,
    context.signOut,
  ]);

  return (
    <>
      <NavBar />

      {/* <Heading level={1}>Presentee</Heading>
      <View>
        {route === 'authenticated' ? 'You are logged in!' : 'Please Login!'}
      </View> */}

      <Outlet />
    </>
  );
}

export default Layout;