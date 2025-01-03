import React from 'react';
import { Link } from 'react-router-dom';
import POWLogo from '../../assets/images/POW.png';

interface HeaderProps {
  nav?: boolean;
}

export const Header: React.FC<HeaderProps> = ({ nav = true }) => {
  return (
    <header className="absolute w-full z-30">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Site branding */}
          <div className="shrink-0 mr-4">
            {/* Logo */}
            <Link className="block group" to="/" aria-label="POW">
              <img src={POWLogo} width={60} height={60} alt="POW Logo" />
            </Link>
          </div>

          {/* Desktop navigation */}
          {nav && (
            <nav className="flex grow">
              <ul className="flex grow justify-end flex-wrap items-center space-x-3">
                {/* Documentation link */}
                <li>
                  <a
                    href="https://docs.pow.cards/introduction"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-sm text-slate-600 hover:text-blue-500 font-medium transition duration-150 ease-in-out"
                  >
                    Documentation
                  </a>
                </li>
                <li>
                  <Link 
                    className="btn-sm text-white bg-blue-500 hover:bg-blue-600 group shadow-sm" 
                    to="/claim"
                  >
                    Get started{' '}
                    <span className="tracking-normal text-blue-300 group-hover:translate-x-0.5 transition-transform duration-150 ease-in-out ml-1">
                      →
                    </span>
                  </Link>
                </li>
              </ul>
            </nav>
          )}
        </div>
      </div>
    </header>
  );
}; 