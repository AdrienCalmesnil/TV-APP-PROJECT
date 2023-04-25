import { SearchResult } from './search-page';
import styled from 'styled-components';

const SeenMoviesTitle = styled.h2`
  font-family: Arial;
  font-size: 36px;
  margin-bottom: 20px;
`;

const SeenMoviesContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 50px;
`;

const SeenMoviesResultsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin-top: 20px;
`;

const SeenMoviesResult = styled.div`
  margin: 40px 40px 80px;
  width: 200px;
  height: 300px;
`;

const SeenMoviesResultImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 5px;
  box-shadow: 0px 0px 8px 0px #000000;
`;

const SeenMoviesResultTitle = styled.h3`
  font-family: Arial;
  font-size: 16px;
  margin-top: 10px;
`;

interface SeenMoviesProps {
  updatedResults: SearchResult[];
}

export default function SeenMovies({ updatedResults }: SeenMoviesProps) {
  const seenMovies = updatedResults.filter((result) => result.seen);
  console.log(seenMovies)

  return (
    <SeenMoviesContainer>
      <SeenMoviesTitle>Seen Movies</SeenMoviesTitle>
      <SeenMoviesResultsContainer>
        {seenMovies.map((movie) => (
          <SeenMoviesResult key={movie.id}>
            <SeenMoviesResultImage
              src={
                movie.poster_path
                ? `https://image.tmdb.org/t/p/w500/${movie.poster_path}` 
                : `https://creol.ucf.edu/wp-content/uploads/sites/2/2018/11/No-Image-Available-200x300.jpg`
              }
              alt={movie.title || movie.name}
            />
            <SeenMoviesResultTitle>{movie.title || movie.name}</SeenMoviesResultTitle>
          </SeenMoviesResult>
        ))}
      </SeenMoviesResultsContainer>
    </SeenMoviesContainer>
  );
}
