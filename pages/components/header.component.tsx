import React from 'react';

import { ContainedButton } from './button.component';

export interface HeaderProps {
  user?: {};
  onLogin: () => void;
  onLogout: () => void;
  onSignUp: () => void;
  title: string;
}

export const Header: React.FC<HeaderProps> = ({ user, onLogin, onLogout, onSignUp, title }) => (
  <header>
    <div className="wrapper">
      <div>
        <h1>{title}</h1>
      </div>
      <div>
        {user ? (
          <ContainedButton primary="true" size="small" onClick={onLogout} label="Log out" />
        ) : (
          <>
            <ContainedButton primary="false" size="small" onClick={onLogin} label="Log in" />
            <ContainedButton primary="false" size="small" onClick={onSignUp} label="Sign up" />
          </>
        )}
      </div>
    </div>
  </header>
);
