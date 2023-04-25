import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import styled from 'styled-components';
import { search } from '@tv-app/tmdb-api';
import { Link } from 'react-router-dom';
import SeenMovies from './seenMovies-page';
import { Container, Title, ResultsContainer, Result, ResultImage, ResultTitle } from './style';

const Button = styled.button`
  background: #FF4742;
  border: 1px solid #FF4742;
  border-radius: 6px;
  box-shadow: rgba(0, 0, 0, 0.1) 1px 2px 4px;
  color: #FFFFFF;
  cursor: pointer;
  font-size: 16px;
  font-weight: 800;
  line-height: 16px;
  min-height: 40px;
  padding: 12px 14px;
  vertical-align: middle;
}

:hover,:active {
  background-color: initial;
  background-position: 0 0;
  color: #FF4742;
}

:active {
  opacity: .5;
}
`;

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
    setResults(updatedResults);
    setUpdatedResults(updatedResults.filter((result) => result.seen)); // Update the seen movies state
  };

  return (
    <Container>
      <Link to="/information">
        <Button type="submit">Information</Button>
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
              <Button
                disabled={result.seen}
                onClick={() => markResultAsSeen(result.id)}
              >
                {result.seen ? 'Seen' : 'Mark as seen'}
              </Button>
            </Result>
          ))}
        </ResultsContainer>
      )}
      {updatedResults.length > 0 && (
        <SeenMovies updatedResults={updatedResults} />
      )}{' '}
      {/* Show the seen movies component if there are any */}
    </Container>
  );
}

export default SearchPage;
