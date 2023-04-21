import React, { useState } from 'react';
import styled from 'styled-components';

const API_KEY = '44939c2eaad9e8d15f23cf86e5f8babe';
const API_URL = 'https://api.themoviedb.org/3/search/multi';

const SearchContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 50px;
`;

const SearchTitle = styled.h1`
  font-family: Arial;
  font-size: 36px;
  margin-bottom: 20px;
`;

const Button = styled.button`
  background: #FF4742;
  border: 1px solid #FF4742;
  border-radius: 6px;
  box-shadow: rgba(0, 0, 0, 0.1) 1px 2px 4px;
  box-sizing: border-box;
  color: #FFFFFF;
  cursor: pointer;
  display: inline-block;
  font-family: nunito,roboto,proxima-nova,"proxima nova",sans-serif;
  font-size: 16px;
  font-weight: 800;
  line-height: 16px;
  min-height: 40px;
  outline: 0;
  padding: 12px 14px;
  text-align: center;
  text-rendering: geometricprecision;
  text-transform: none;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
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

const SearchResultsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin-top: 20px;
`;

const SearchResult = styled.div`
  margin: 10px;
  width: 200px;
  height: 300px;
`;

const SearchResultImage = styled.img`
  width: 100%;
  height: 80%;
  object-fit: cover;
  border-radius: 5px;
`;

const SearchResultTitle = styled.h3`
  font-family: Arial;
  font-size: 16px;
  margin-top: 10px;
`;

interface SearchResponse {
  results: SearchResult[];
}

interface SearchResult {
  id: number;
  title?: string;
  name?: string;
  poster_path: string;
}

function SearchPage() {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState<SearchResult[]>([]);

  const search = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const response = await fetch(
      `${API_URL}?api_key=${API_KEY}&query=${query}`
    );
    const data = await response.json();
    setResults(data.results);
  };

  return (
    <SearchContainer>
      <SearchTitle>Search for Movies and Series</SearchTitle>
      <form onSubmit={search}>
        <SearchInput
          type="text"
          placeholder="Enter movie or series name"
          value={query}
          onChange={(event) => setQuery(event.target.value)}
        />
        <Button type="submit">Search</Button>
      </form>
      {results && (
        <SearchResultsContainer>
          {results.map((result) => (
            <SearchResult key={result.id}>
              <SearchResultImage
                src={`https://image.tmdb.org/t/p/w500/${result.poster_path}`}
                alt={result.title || result.name}
              />
              <SearchResultTitle>{result.title || result.name}</SearchResultTitle>
            </SearchResult>
          ))}
        </SearchResultsContainer>
      )}
    </SearchContainer>
  );
};

export default SearchPage;
