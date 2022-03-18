import React, { useState, createContext } from "react";

export const MovieContext = createContext();

export const MovieProvider = (props) => {
  const [movies, setMovies] = useState([
    { name: "Harry Potter", price: "$10", id: 23124 },
    { name: "Back to the futur", price: "$15", id: 23333 },
    { name: "Inception", price: "$25", id: 23654 },
  ]);
  return (
    <MovieContext.Provider value={[movies, setMovies]}>
      {props.children}
    </MovieContext.Provider>
  );
};
