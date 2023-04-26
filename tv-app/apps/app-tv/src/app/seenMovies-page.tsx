import { Link } from 'react-router-dom';
import { SearchResult } from './search-page';
import { Container, Title, ResultsContainer, Result, ResultImage, ResultTitle, Button } from './style';

interface SeenMoviesProps {
  results: SearchResult[];
}

export default function SeenMovies({ results }: SeenMoviesProps) {
  // const seenMovies = results.filter((result) => result.seen);
  const updatedResultsFromLocalStorage = localStorage.getItem('updatedResults');
  const updatedResults = updatedResultsFromLocalStorage ? JSON.parse(updatedResultsFromLocalStorage) : [];

  return (
    <Container>
      <Link to="/">
        <Button type="submit">Search Page</Button>
      </Link>
      <Title>Seen Movies</Title>
      <ResultsContainer>
        {/* {seenMovies.map((movie) => (
          <Result key={movie.id}>
            <ResultImage
              src={
                movie.poster_path
                  ? `https://image.tmdb.org/t/p/w500/${movie.poster_path}`
                  : `https://creol.ucf.edu/wp-content/uploads/sites/2/2018/11/No-Image-Available-200x300.jpg`
              }
              alt={movie.title || movie.name}
            />
            <ResultTitle>{movie.title || movie.name}</ResultTitle>
          </Result>
        ))} */}
        {updatedResults.map((movie: SearchResult) => (
          <Result key={movie.id}>
            <ResultImage
              src={
                movie.poster_path
                  ? `https://image.tmdb.org/t/p/w500/${movie.poster_path}`
                  : `https://creol.ucf.edu/wp-content/uploads/sites/2/2018/11/No-Image-Available-200x300.jpg`
              }
              alt={movie.title || movie.name}
            />
            <ResultTitle>{movie.title || movie.name}</ResultTitle>
          </Result>
        ))}
      </ResultsContainer>
    </Container>
  );
}
