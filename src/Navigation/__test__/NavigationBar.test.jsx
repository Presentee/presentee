import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { MemoryRouter, Router } from 'react-router-dom';
import NavigationBar from '../NavigationBar';
import { useAuthenticator } from '@aws-amplify/ui-react';


jest.mock('@aws-amplify/ui-react', () => ({
  useAuthenticator: jest.fn(),
}));

describe('NavigationBar', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  it('renders the navigation bar with correct links for unauthenticated user', () => {
    useAuthenticator.mockReturnValue({ route: 'unauthenticated', signOut: jest.fn() }),

    render(
      <MemoryRouter>
        <NavigationBar />
      </MemoryRouter>
    )
    
  });

  it('renders the navigation bar with correct links for authenticated user', () => {
    useAuthenticator.mockReturnValue({ route: 'authenticated', signOut: jest.fn() }),

    render(
      <MemoryRouter>
        <NavigationBar />
      </MemoryRouter>
    );
    
  });

  it('calls signOut function when "Sign Out" button is clicked', () => {
    const signOutMock = jest.fn();
    useAuthenticator.mockReturnValue({ route: 'authenticated', signOut: signOutMock });

    render(
      <MemoryRouter>
        <NavigationBar />
      </MemoryRouter>
    );

    fireEvent.click(screen.getByText('Sign Out'));
    expect(signOutMock).toHaveBeenCalledTimes(1);
  });

  // Add more test cases for other interactions and scenarios as needed
});
