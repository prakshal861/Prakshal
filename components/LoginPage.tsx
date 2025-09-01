
import React from 'react';
import { UserType } from '../types';
import { LeoLogo } from './icons/LeoLogo';

interface LoginPageProps {
  onLogin: (userType: UserType) => void;
}

const LoginPage: React.FC<LoginPageProps> = ({ onLogin }) => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-blue-500 to-indigo-600 p-4">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-2xl p-8 text-center transform transition-all hover:scale-105 duration-300">
        <div className="mx-auto mb-6 h-24 w-24 text-indigo-600">
            <LeoLogo />
        </div>
        
        <h1 className="text-3xl font-bold text-gray-800 mb-2">
          LEO CLUB
        </h1>
        <h2 className="text-xl font-semibold text-indigo-600 mb-8">
          MANDSAUR SUPERSTARS
        </h2>

        <div className="space-y-4">
          <button
            onClick={() => onLogin(UserType.Admin)}
            className="w-full bg-indigo-600 text-white font-bold py-3 px-4 rounded-lg hover:bg-indigo-700 focus:outline-none focus:ring-4 focus:ring-indigo-300 transition-transform transform hover:-translate-y-1 duration-200"
          >
            Admin Login
          </button>
          <button
            onClick={() => onLogin(UserType.User)}
            className="w-full bg-slate-200 text-slate-800 font-bold py-3 px-4 rounded-lg hover:bg-slate-300 focus:outline-none focus:ring-4 focus:ring-slate-300 transition-transform transform hover:-translate-y-1 duration-200"
          >
            User Login
          </button>
        </div>
        <p className="text-xs text-gray-400 mt-8">
          Serving the community with pride.
        </p>
      </div>
    </div>
  );
};

export default LoginPage;
