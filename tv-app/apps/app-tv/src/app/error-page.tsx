import { useRouteError } from "react-router-dom";
import styled from "styled-components";

const ErrorContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 100px;
    font-size: 1.5em;
`

const ErrorTitle = styled.h1`
font-family: Arial;
font-size: 36px;
margin-bottom: 20px;
`

const ErrorText = styled.p`
    font-family: arial;
`

interface CustomError extends Error {
    status?: number;
    statusText?: string;
  }

export default function ErrorPage() {
  const error = useRouteError() as CustomError;

  return (
    <ErrorContainer>
      <ErrorTitle>Oops!</ErrorTitle>
      <ErrorText>Sorry, an unexpected error has occurred.</ErrorText>
      <p>
        <i>{error.statusText} - {error.status}</i>
      </p>
    </ ErrorContainer>
  );
}