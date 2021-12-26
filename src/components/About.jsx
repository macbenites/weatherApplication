import React from "react";
import styled from "styled-components";
import blob from "../img/blob.png";

export default function About() {
  return (
    <AboutContainer>
      <AboutMe>
        <h1>
          Hey There 👋 ,
          <br />
          I'm Marlon Acosta
        </h1>
        <p>
          I'm currently studying computer systems engineering and I recently
          joined a bootcamp to be a full stack web developer because since I
          discovered the world of web development I feel that it has become my
          passion, that's why I keep learning and researching constantly 🙌🚀
        </p>
      </AboutMe>
      <img src={blob} alt="Picture" />
    </AboutContainer>
  );
}

const AboutContainer = styled.div`
  background-color: #16161a;
  padding: 1rem 2rem;
  display: flex;
  justify-content: space-evenly;
  flex-direction: column;
  align-items: center;
  border-radius: 1rem;
  margin: 2rem 2rem;
  padding: 3rem 3rem;

  @media screen and (min-width: 768px) {
    flex-direction: row;
    justify-content: space-around;
    margin: 2rem 3rem;
    padding: 3rem 0;
  }
`;

const AboutMe = styled.div`
  h1 {
    color: #fffffe;
  }
  p {
    color: #94a1b2;
  }
  img {
    width: 100%;
  }
  @media screen and (min-width: 768px) {
    max-width: 40%;
  }
`;
