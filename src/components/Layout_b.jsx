// components/Layout.js
import React from 'react';
import { Outlet } from 'react-router-dom';
import { useAuthenticator } from '@aws-amplify/ui-react';
import NavBar from 'components/Navigation/NavBar';
import HomeContainer from 'components/CustomComponents/Containers/HomeContainer';

export default function Layout() {
  const { route } = useAuthenticator((context) => [
    context.route,
    context.signOut,
  ]);

  return (
    <>
      <NavBar />
      
      <HomeContainer>
        <Outlet />
      </HomeContainer>

    </>
  );
}