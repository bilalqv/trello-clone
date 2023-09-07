import React from 'react';

function Navbar() {
  return (
    <nav className="bg-blue-500 p-4">
      <div className="container mx-auto flex items-center justify-between">
        {/* Left side */}
        <div className="flex items-center space-x-4">
          <h1 className="text-2xl text-white font-bold">Taco's Tacos</h1>
          <a href="#" className="text-white hover:text-gray-300">Tacos & Co.</a>
          <a href="#" className="text-white hover:text-gray-300">Team Visible</a>
        </div>

        {/* Right side */}
        <a href="#" className="text-white hover:text-gray-300">Show Menu</a>
      </div>
    </nav>
  );
}

export default Navbar;