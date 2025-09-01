
import React from 'react';
import { LeoLogo } from './icons/LeoLogo';
import { UserIcon } from './icons/UserIcon';

interface HeaderProps {
  onLogout: () => void;
}

const Header: React.FC<HeaderProps> = ({ onLogout }) => {
  return (
    <header className="bg-white shadow-md sticky top-0 z-10">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <div className="flex items-center gap-3">
          <div className="h-10 w-10 text-indigo-600">
            <LeoLogo />
          </div>
          <span className="text-lg md:text-xl font-bold text-gray-800 hidden sm:block">
            LEO CLUB MANDSAUR SUPERSTARS
          </span>
           <span className="text-lg font-bold text-gray-800 sm:hidden">
            LEO CLUB
          </span>
        </div>
        <div className="flex items-center gap-4">
          <div className="h-10 w-10 rounded-full bg-slate-200 flex items-center justify-center ring-2 ring-offset-2 ring-indigo-500">
            <UserIcon className="h-6 w-6 text-slate-500" />
          </div>
          <button
            onClick={onLogout}
            className="bg-red-500 text-white font-semibold py-2 px-4 rounded-lg hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-400 focus:ring-opacity-75 transition duration-200"
          >
            Logout
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
