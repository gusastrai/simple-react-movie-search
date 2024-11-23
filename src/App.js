import { getMovies, searchMovie } from "./api";
import { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Card from "./components/Card";
import NotFound from "./components/NotFound";

const App = () => {
  const [movies, setMovies] = useState([]);

  const truncateOverview = (overview, maxLength) => {
    if (overview.length <= maxLength) return overview;
    return overview.substring(0, maxLength) + "...";
  };

  useEffect(() => {
    const fetchMovies = async () => {
      setMovies(await getMovies());
    };
    fetchMovies();
  }, []);

  const MovieLists = () => {
    return (
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {movies.map((movie, i) => (
          <Card key={i} movie={movie} truncateOverview={truncateOverview} />
        ))}
      </div>
    );
  };

  const search = (q) => {
    console.log({ q });
    if (q.trim() === "") {
      const fetchMovies = async () => {
        setMovies(await getMovies());
      };
      fetchMovies();
    } else {
      const searchMovies = async () => {
        setMovies(await searchMovie(q));
      };
      searchMovies();
    }
  };

  return (
    <div className="App">
      <Navbar onSearch={search} />
      <main className="p-4 sm:p-8">
        {movies.length === 0 ? <NotFound/> : <MovieLists />}
      </main>
    </div>
  );
};

export default App;
