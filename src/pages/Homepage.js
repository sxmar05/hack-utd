import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../frontier_logo.png';

function LoginButton() {
    return (
      <button className="bg-blue-500 text-white py-2 px-4 rounded-lg">
        <Link to="/login" className="text-white">Log In</Link>
      </button>
    );
}

function Homepage() {
    return(
    <div className="App">
      {/* Header */}
      <header className="bg-header-blue p-4">
        <nav className="flex items-center justify-between container mx-auto">
          <div className="flex items-center space-x-3">
            <img src={logo} className="w-16 h-16" alt="logo" />
            <p className="text-2xl font-bold text-white">InfinitePath</p>
          </div>
          <div className="flex items-center space-x-6">
            <LoginButton />
          </div>
        </nav>
      </header>
    </div>
    );
}
export default Homepage;