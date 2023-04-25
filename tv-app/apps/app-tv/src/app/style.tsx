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

export const Button = styled.button`
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

export const ButtonSecondary = styled.button`
    background: initial;
    border: 1px solid #FF4742;
    border-radius: 6px;
    box-shadow: rgba(0, 0, 0, 0.1) 1px 2px 4px;
    color: #FF4742;
    cursor: pointer;
    font-size: 16px;
    font-weight: 800;
    line-height: 16px;
    min-height: 40px;
    padding: 12px 14px;
    vertical-align: middle;
    }

    :hover,:active {
    background-color: #FF4742;
    background-position: 0 0;
    color: #FFFFFF;
    }

    :active {
    opacity: .5;
    }
`;