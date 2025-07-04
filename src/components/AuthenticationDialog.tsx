
import React, { useState } from 'react';
import LoginDialog from './LoginDialog';
import RegisterDialog from './RegisterDialog';

interface AuthenticationDialogProps {
  isOpen: boolean;
  onClose: () => void;
  initialMode?: 'login' | 'register';
}

const AuthenticationDialog: React.FC<AuthenticationDialogProps> = ({ 
  isOpen, 
  onClose, 
  initialMode = 'login' 
}) => {
  const [mode, setMode] = useState(initialMode);

  const handleClose = () => {
    onClose();
    // Reset to login mode when closing
    setMode('login');
  };

  const switchToRegister = () => {
    setMode('register');
  };

  const switchToLogin = () => {
    setMode('login');
  };

  if (mode === 'login') {
    return (
      <LoginDialog
        isOpen={isOpen}
        onClose={handleClose}
        onSwitchToRegister={switchToRegister}
      />
    );
  }

  return (
    <RegisterDialog
      isOpen={isOpen}
      onClose={handleClose}
      onSwitchToLogin={switchToLogin}
    />
  );
};

export default AuthenticationDialog;
