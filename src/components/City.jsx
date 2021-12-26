import styled from "styled-components";
import { useCityById } from "../hooks/useCity";
import { useParams } from "react-router-dom";
import { Helmet } from "react-helmet";

function City() {
  const { ciudadId } = useParams();
  const city = useCityById(ciudadId);

  if (city.length === 0) {
    return null;
  }
  return (
    <CityContainer>
      <Helmet>
        <title>{city?.name} / weatherApplicaction </title>
      </Helmet>
      {city && (
        <WeatherInfo>
          <h2>{city?.name}</h2>
          Temperatura: {Math.round(city?.temp || 0)} °<br />
          Clima: {city?.weather}
          <br />
          Viento: {city?.wind} km/h
          <br />
          Cantidad de nubes: {city?.clouds}
          <br />
          Latitud: {city?.latitud}º<br />
          Longitud: {city?.longitud}º<br />
          Pais: {city?.country}
          <br />
        </WeatherInfo>
      )}
    </CityContainer>
  );
}
export default City;

const CityContainer = styled.div`
  background-color: #16161a;
  padding: 1rem 2rem;
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
    padding: 3rem 0;
  }
`;

const WeatherInfo = styled.div`
  h2 {
    color: #fffffe;
  }

  color: #94a1b2;
`;
