import React from "react";
import MyButton from "./MyButton";

const Card = ({ movie, truncateOverview }) => {
  return (
    <div className="bg-white shadow-lg rounded-lg overflow-hidden transform transition duration-500 hover:scale-105">
      <img
        className="w-full h-auto object-contain"
        src={`${process.env.REACT_APP_BASEIMGURL}/${movie.poster_path}`}
        alt="Movie Img"
      />
      <div className="px-4 sm:px-6 py-4 flex flex-col gap-2">
        <h3 className="text-2xl font-bold text-gray-800">{movie.title}</h3>
        <MyButton title="Play Now" />
        <div className="flex justify-between">
          <div className="flex items-center gap-2 my-1">
            <span className="text-gray-500 font-medium">
              {new Date(movie.release_date).getFullYear()}
            </span>
            <span className="bg-gray-200 p-1 rounded font-medium">13+</span>
          </div>
          <div className="flex items-center">
            <svg
              className="w-5 h-5 text-yellow-500 mr-1"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.97a1 1 0 00.95.69h4.18c.969 0 1.371 1.24.588 1.81l-3.392 2.46a1 1 0 00-.364 1.118l1.287 3.97c.3.921-.755 1.688-1.54 1.118l-3.392-2.46a1 1 0 00-1.175 0l-3.392 2.46c-.784.57-1.838-.197-1.54-1.118l1.287-3.97a1 1 0 00-.364-1.118L2.34 9.397c-.783-.57-.38-1.81.588-1.81h4.18a1 1 0 00.95-.69l1.286-3.97z"></path>
            </svg>
            <span className="text-gray-800 font-medium">
              {movie.vote_average.toFixed(1)}
            </span>
          </div>
        </div>
        <p className="text-gray-600 text-justify font-medium">
          {truncateOverview(movie.overview, 120)}
        </p>
      </div>
    </div>
  );
};

export default Card;
