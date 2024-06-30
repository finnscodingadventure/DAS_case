import React from 'react';
import ReactDOM from 'react-dom';
import './styles/tailwind.css';

function LoadingScreen() {
  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <div className="flex flex-col items-center">
        <svg
          className="animate-spin h-10 w-10 text-blue-500"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
        >
          <circle
            className="opacity-25"
            cx="12"
            cy="12"
            r="10"
            stroke="currentColor"
            strokeWidth="4"
          ></circle>
          <path
            className="opacity-75"
            fill="currentColor"
            d="M4 12a8 8 0 018-8v8H4z"
          ></path>
        </svg>
        <p className="mt-4 text-gray-700">Loading...</p>
      </div>
    </div>
  );
}

ReactDOM.render(<LoadingScreen />, document.getElementById('root'));
