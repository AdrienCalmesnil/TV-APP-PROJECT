import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 50px;
`;

export const Title = styled.h1`
  font-family: Arial;
  font-size: 36px;
  margin-bottom: 20px;
`;

export const ResultsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin-top: 20px;
`;

export const Result = styled.div`
  margin: 40px 40px 80px;
  width: 200px;
  height: 300px;
`;

export const ResultImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 5px;
  box-shadow: 0px 0px 8px 0px #000000;
`;

export const ResultTitle = styled.h3`
  font-family: Arial;
  font-size: 16px;
  margin-top: 10px;
`;