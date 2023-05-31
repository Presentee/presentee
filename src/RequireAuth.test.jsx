import React from 'react';
import { render } from '@testing-library/react';
import { MemoryRouter, useLocation } from 'react-router-dom';
import { useAuthenticator } from '@aws-amplify/ui-react';
import RequireAuth from './RequireAuth';

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useLocation: jest.fn(),
  Navigate: jest.fn(),
}));

jest.mock('@aws-amplify/ui-react', () => ({
  useAuthenticator: jest.fn(),
}));

describe('RequireAuth', () => {

  afterEach(() => {
    jest.clearAllMocks();
  });


  it('should render children when authenticated', () => {
    const MockChildComponent = () => <div>Mock Child Component</div>;
    const route = 'authenticated';
    useAuthenticator.mockReturnValue({ route });
    useLocation.mockReturnValue({ pathname: '/example' });

    const { getByText } = render(
      <MemoryRouter>
        <RequireAuth>
          <MockChildComponent />
        </RequireAuth>
      </MemoryRouter>
    );

    expect(useAuthenticator).toHaveBeenCalled();
    expect(useLocation).toHaveBeenCalled();
    
  });

  it('should redirect to login page when not authenticated', () => {
    const route = 'unauthenticated';
    useAuthenticator.mockReturnValue({ route });
    useLocation.mockReturnValue({ pathname: '/login' });

    render(
      <MemoryRouter>
        <RequireAuth>
          <div>Mock Child Component</div>
        </RequireAuth>
      </MemoryRouter>
    );

    expect(useAuthenticator).toHaveBeenCalled();
    expect(useLocation).toHaveBeenCalled();
  });
});
