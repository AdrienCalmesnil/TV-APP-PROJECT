import { useRouteError } from "react-router-dom";
import styled from "styled-components";

const ErrorContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 100px;
  margin-right: auto;
  margin-left: auto;
  width: 70%;
  font-size: 1.5em;
  color: #444;
  background-color: #f2f2f2;
  padding: 50px;
  border-radius: 5px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2);
  text-align: center;
`;

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