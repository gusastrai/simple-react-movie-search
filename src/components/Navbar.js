import React from "react";

function Navbar({ onSearch }) {
  return (
    <nav className="bg-gradient-to-r from-blue-500 to-indigo-600 flex justify-between items-center shadow px-4 sm:px-8 py-4">
      <div className="flex items-center">
        <img
          src="/iclix-logo.png"
          alt="iclix logo"
          className="h-8 w-8 mr-2"
        />
        <div className="text-white text-4xl font-bold">iclix</div>
      </div>
      <div className="relative w-1/2">
        <input
          type="text"
          placeholder="Search Movie..."
          className="w-full p-2 pl-10 rounded focus:outline-none focus:ring-2 focus:ring-indigo-400"
          onChange={(e) => onSearch(e.target.value)}
        />
        <svg
          className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          width="20"
          height="20"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M21 21l-4.35-4.35m1.35-5.65a7 7 0 11-14 0 7 7 0 0114 0z"
          />
        </svg>
      </div>
    </nav>
  );
}

export default Navbar;
