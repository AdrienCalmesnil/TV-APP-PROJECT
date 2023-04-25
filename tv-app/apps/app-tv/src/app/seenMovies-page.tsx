import { SearchResult } from './search-page';
import { Container, Title, ResultsContainer, Result, ResultImage, ResultTitle } from './style';

interface SeenMoviesProps {
  updatedResults: SearchResult[];
}

export default function SeenMovies({ updatedResults }: SeenMoviesProps) {
  const seenMovies = updatedResults.filter((result) => result.seen);
  console.log(seenMovies)

  return (
    <Container>
      <Title>Seen Movies</Title>
      <ResultsContainer>
        {seenMovies.map((movie) => (
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
