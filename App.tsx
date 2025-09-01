
import React, { useState, useCallback } from 'react';
import LoginPage from './components/LoginPage';
import HomePage from './components/HomePage';
import { UserType } from './types';

const App: React.FC = () => {
  const [user, setUser] = useState<UserType | null>(null);

  const handleLogin = useCallback((userType: UserType) => {
    setUser(userType);
  }, []);

  const handleLogout = useCallback(() => {
    setUser(null);
  }, []);

  return (
    <div className="min-h-screen bg-slate-100 font-sans">
      {user ? (
        <HomePage userType={user} onLogout={handleLogout} />
      ) : (
        <LoginPage onLogin={handleLogin} />
      )}
    </div>
  );
};

export default App;
