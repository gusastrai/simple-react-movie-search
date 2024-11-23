import React from "react";

const NotFound = () => {
  return (
    <div
      className="w-full flex flex-col justify-center items-center bg-gray-100 rounded px-4"
      style={{ minHeight: "calc(100vh - 144px)" }}
    >
      <div className="bg-white text-gray-700 text-center font-medium p-8 rounded shadow-lg border border-gray-200">
        <div className="flex justify-center mb-4">
          <span
            className="text-6xl"
            role="img"
            aria-label="upset face"
          >
            😔
          </span>
        </div>
        <p className="text-2xl font-semibold text-gray-800 mb-2">
          Oops! No Results Found
        </p>
        <p className="text-gray-600">
          We couldn't find any matches for your search. Try different terms or refine your query.
        </p>
      </div>
    </div>
  );
};

export default NotFound;
