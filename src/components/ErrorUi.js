// ErrorUI.js
import React from "react";

const ErrorUI = ({ message, onRetry }) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-red-100">
      <div className="bg-white p-6 rounded-lg shadow-lg text-center max-w-md">
        <div className="text-red-500">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-12 w-12 mx-auto mb-4"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 9v2m0 4h.01m-6.938 4h13.856c1.054 0 1.98-.816 2.122-1.851l1.516-12A2.01 2.01 0 0019.995 4H4.005a2.01 2.01 0 00-1.995 2.149l1.516 12c.142 1.035 1.068 1.851 2.122 1.851z"
            />
          </svg>
        </div>
        <h2 className="text-2xl font-semibold mb-4">Something went wrong</h2>
        <p className="text-gray-600 mb-4">
          {message || "An unexpected error occurred. Please try again later."}
        </p>
        {/* {onRetry && ( */}
        <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
          <a href="/">Retry</a>
        </button>
        {/* )} */}
      </div>
    </div>
  );
};

export default ErrorUI;
