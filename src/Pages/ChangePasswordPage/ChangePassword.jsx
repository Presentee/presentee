import React from 'react';
import { AccountSettings } from '@aws-amplify/ui-react';

export default function ChangePassword() {

  const minLength = {
    validationMode: 'onChange',
    validator: (password) => password.length >= 4,
    message: 'Password must have length 4 or greater',
  };

  const maxLength = {
    validationMode: 'onChange',
    validator: (password) => password.length <= 12,
    message: 'Password must have length 12 or less',
  };
  
  const handleSuccess = () => {
    alert('password is successfully changed!')
  }
  
  return (
    <>
    
    <AccountSettings.ChangePassword 
      onSuccess={handleSuccess} 
      validators={[minLength, maxLength]}
    />

    </>
  );
}