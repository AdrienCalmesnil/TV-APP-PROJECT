import { SearchResult } from './search-page';

interface SeenMoviesProps {
  updatedResults: SearchResult[];
}

export default function SeenMovies({ updatedResults }: SeenMoviesProps) {
  const seenMovies = updatedResults.filter((result) => result.seen);

  return (
    <div>
      <h2>Seen Movies</h2>
      {seenMovies.map((movie) => (
        <div key={movie.id}>
          <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} alt={movie.title || movie.name} />
          <p>{movie.title || movie.name}</p>
        </div>
      ))}
    </div>
  );
}
