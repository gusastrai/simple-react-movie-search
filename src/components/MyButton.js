import React from 'react';

const MyButton = ({ title }) => {
  return (
    <button className="flex-1 flex justify-center items-center bg-gradient-to-r from-blue-500 to-indigo-600 text-white text-lg font-medium px-4 py-2 rounded transform transition duration-300 hover:scale-105 hover:shadow-lg">
      <svg
        className="w-8 h-8"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M14.752 11.168l-6.586-3.794A1 1 0 007 8.382v7.236a1 1 0 001.166.97l6.586-3.794a1 1 0 000-1.736z"
        ></path>
      </svg>
      {title}
    </button>
  );
};

export default MyButton;