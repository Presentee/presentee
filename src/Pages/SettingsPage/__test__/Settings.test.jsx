import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { useNavigate } from 'react-router-dom';
import ThemeContext from '../../../context/ThemeContext';
import Settings from '../Settings';

jest.mock('react-router-dom', () => ({
  useNavigate: jest.fn(),
}));

describe('Settings component', () => {
 
  it('navigates to the change password page on button click', () => {
    const navigateMock = jest.fn();
    useNavigate.mockReturnValue(navigateMock);

    const { getByText } = render(<Settings />);
    const changePasswordButton = getByText('Change Password');

    // Simulate button click
    fireEvent.click(changePasswordButton);

    // Check if the navigate function is called with the correct route
    expect(navigateMock).toHaveBeenCalledWith('/settings/password');
  });

  it('navigates to the change email page on button click', () => {
    const navigateMock = jest.fn();
    useNavigate.mockReturnValue(navigateMock);

    const { getByText } = render(<Settings />);
    const changeEmailButton = getByText('Change Email');

    // Simulate button click
    fireEvent.click(changeEmailButton);

    // Check if the navigate function is called with the correct route
    expect(navigateMock).toHaveBeenCalledWith('/settings/email');
  });

  
});
