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
          When you search for a city name in the <strong>WeatherApp</strong>,
          you will get a card with weather information. Also, by clicking on the
          name of the city you will be able to get much more information about
          the weather in the city. And remember that you can only search a
          maximum of 3 cities.
        </p>
      </Info>
      <DrawHome src={homeDraw} alt="weatherHome" />
    </HomeContainer>
  );
}

export default Home;

const HomeContainer = styled.div`
  background-color: var(--background-color);
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
    color: var(--headline);
    margin: 0%;
  }
  p {
    color: var(--paragraph);
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
  max-width: 1000px;
  max-height: 600px;
  @media screen and (min-width: 768px) {
    max-width: 40%;
  }
`;
