import React from 'react';
import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { useAuthenticator } from '@aws-amplify/ui-react';
import App from './App';

jest.mock('react-router-dom', () => ({
    ...jest.requireActual('react-router-dom'),
    useLocation: jest.fn(),
    Navigate: jest.fn(),
  }));
  
  jest.mock('@aws-amplify/ui-react', () => ({
    useAuthenticator: jest.fn(),
  }));

describe('App', () => {
  it('renders the navigation bar', () => {
    
    render(
    useAuthenticator.mockReturnValue({ route: 'unauthenticated', signOut: jest.fn() }),
      <MemoryRouter>
        <App />
      </MemoryRouter>
    )

    
  });

  
  
});
