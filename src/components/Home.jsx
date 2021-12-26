import styled from "styled-components";
import homeDraw from "../img/homeDraw.svg";

styled;

function Home() {
  return (
    <HomeContainer>
      <Info>
        <h1>
          Find
          <br /> your weather
        </h1>
        <p>
          Find the meteorological compilation of different real-time sources.
        </p>
      </Info>
      <DrawHome src={homeDraw} alt="weatherHome" />
    </HomeContainer>
  );
}

export default Home;

const HomeContainer = styled.div`
  background-color: #16161a;
  padding: 1rem 2rem;
  display: flex;
  justify-content: space-evenly;
  flex-direction: column;
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

const Info = styled.div`
  h1 {
    color: #fffffe;
    margin: 0%;
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
const DrawHome = styled.img`
  width: 100%;
  @media screen and (min-width: 768px) {
    max-width: 40%;
  }
`;
