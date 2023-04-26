import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import styled from 'styled-components';
import { search } from '@tv-app/tmdb-api';
import { Link } from 'react-router-dom';
import SeenMovies from './seenMovies-page';
import { Container, Title, ResultsContainer, Result, ResultImage, ResultTitle, Button, ButtonSecondary } from './style';

const SearchInput = styled.input`
  padding: 10px;
  font-size: 16px;
  border: none;
  border-radius: 5px;
  margin-right: 20px;
  margin-bottom: 20px;
  box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.1);
  width: 300px;
`;
export interface SearchResult {
  seen: boolean | undefined;
  id: number;
  title?: string;
  name?: string;
  poster_path: string;
}

function SearchPage() {
  const [results, setResults] = useState<SearchResult[]>([]);
  const [updatedResults, setUpdatedResults] = useState<SearchResult[]>([]); // New state for seen movies
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<{ query: string }>();

  const onSubmit = async (data: { query: string }) => {
    const results = await search(data.query);
    setResults(results);
  };

  const markResultAsSeen = (resultId: number) => {
    // Update the result in the `results` array to indicate it has been seen
    const updatedResults = results.map((result) => {
      if (result.id === resultId) {
        return { ...result, seen: true };
      }
      return result;
    });
    setResults(updatedResults); //  update state of results with list updated
    setUpdatedResults(updatedResults.filter((result) => result.seen)); // Update the seen movies state
  };

  // Get updated results from local storage when the component mounts
  useEffect(() => {
    const storedResults = localStorage.getItem('updatedResults');
    if (storedResults) {
      setUpdatedResults(JSON.parse(storedResults));
    }
  }, []);

  // Save updated results to local storage when the state is updated
  useEffect(() => {
    localStorage.setItem('updatedResults', JSON.stringify(updatedResults));
  }, [updatedResults]);

  return (
    <Container>
      <Link to="/seenMovies" state={{updatedResults: updatedResults}}>
        <Button type="submit">Seen Movies</Button>
      </Link>
      <Title>Search for Movies and Series</Title>
      <form onSubmit={handleSubmit(onSubmit)}>
        <SearchInput
          type="text"
          placeholder="Enter movie or series name"
          {...register('query', { required: true })}
        />
        <Button type="submit">Search</Button>
        {errors.query && <span>This field is required</span>}
      </form>
      {results && (
        <ResultsContainer>
          {results.map((result) => (
            <Result key={result.id}>
              <ResultImage
                src={
                  result.poster_path
                    ? `https://image.tmdb.org/t/p/w500/${result.poster_path}`
                    : `https://creol.ucf.edu/wp-content/uploads/sites/2/2018/11/No-Image-Available-200x300.jpg`
                }
                alt={result.title || result.name}
              />
              <ResultTitle>
                {result.title || result.name}
              </ResultTitle>
              <ButtonSecondary
                disabled={result.seen}
                onClick={() => markResultAsSeen(result.id)}
              >
                {result.seen ? 'Seen' : 'Mark as seen'}
              </ButtonSecondary>
            </Result>
          ))}
        </ResultsContainer>
      )}
      {updatedResults.length > 0 && (
        <SeenMovies results={updatedResults} />
      )}{' '}
      {/* Show the seen movies component if there are any */}
    </Container>
  );
}

export default SearchPage;
