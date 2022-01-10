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
          <HeadLine>
            <h2>{city?.name}</h2>
            <img
              src={`https://cdn.ipwhois.io/flags/${city?.country.toLowerCase()}.svg`}
              alt="flag"
            />
          </HeadLine>
          <br />
          <strong>Temperature :</strong> {Math.round(city?.temp || 0)} °C
          <br />
          <strong>Weather :</strong> {city?.weather}
          <br />
          <strong>Wind :</strong> {city?.wind} km/h
          <br />
          <strong>Amount of Clouds :</strong> {city?.clouds}
          <br />
          <strong>Latitude :</strong> {city?.latitud}º<br />
          <strong>Longitude :</strong> {city?.longitud}º<br />
          <br />
        </WeatherInfo>
      )}
    </CityContainer>
  );
}
export default City;

const CityContainer = styled.div`
  border-radius: 1rem;
  width: 250px;
  height: auto;
  padding: 1.3rem 2rem;
  background-color: var(--background-color);
  margin: 2rem auto;
`;

const WeatherInfo = styled.div`
  h2 {
    color: var(--headline);
  }
  color: var(--paragraph);
  img {
    width: 32px;
    height: 24px;
    border-radius: 5px;
  }

  strong {
    color: var(--headline);
  }
`;

const HeadLine = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
