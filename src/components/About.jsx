import React from "react";
import styled, { keyframes } from "styled-components";
import blob from "../img/blob.png";
import { Helmet } from "react-helmet";

export default function About() {
  return (
    <AboutContainer>
      <Helmet>
        <title>AboutMe</title>
      </Helmet>
      <AboutMe>
        <Effect>¡Hello World!</Effect>
        <p>
          I'm currently studying computer systems engineering and I recently
          joined a bootcamp to be a full stack web developer because since I
          discovered the world of web development I feel that it has become my
          passion, that's why I keep learning and researching constantly 🙌🚀
        </p>
      </AboutMe>
      {/* <img src={blob} alt="Picture" /> */}
    </AboutContainer>
  );
}
export const AboutContainer = styled.div`
  background-color: var(--background-color);
  display: flex;
  justify-content: space-evenly;
  flex-direction: column;
  align-items: center;
  border-radius: 1rem;
  margin: 2rem 2rem;
  padding: 3rem 3rem;

  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: space-around;
    margin: 2rem 3rem;
    padding: 3rem 3rem;
  }
`;

const typing = keyframes`
  from {width :0}
`;

const blink = keyframes`
  50%{
    border-color: transparent;
  }
`;

const Effect = styled.span`
  font-size: 2rem;
  font-family: monospace;
  color: var(--headline);
  margin: 2rem 0;
  display: block;
  white-space: nowrap;
  border-right: 4px solid;
  width: 13ch;
  animation: ${typing} 2s steps(13), ${blink} 0.5s infinite step-end alternate;
  overflow: hidden;
`;
export const AboutMe = styled.div`
  p {
    color: var(--paragraph);
    font-size: 1.2rem;
  }
  img {
    width: 100%;
  }
  @media (min-width: 768px) {
    max-width: 40%;
  }
`;
