import styled from "styled-components";
import { useCityById } from "../hooks/useCity";
import { useParams } from "react-router-dom";

function City() {
  const { ciudadId } = useParams();
  const city = useCityById(ciudadId);

  if (city.length === 0) {
    return null;
  }
  return (
    <CityContainer>
      <div>
        {city && (
          <div>
            <h2>{city?.name}</h2>
            <div>Temperatura: {Math.round(city?.temp || 0)} °C</div>
            <div>Clima: {city?.weather}</div>
            <div>Viento: {city?.wind} km/h</div>
            <div>Cantidad de nubes: {city?.clouds}</div>
            <div>Latitud: {city?.latitud}º</div>
            <div>Longitud: {city?.longitud}º</div>
            <div>Pais: {city?.country}</div>
          </div>
        )}
      </div>
    </CityContainer>
  );
}
export default City;

const CityContainer = styled.div`
  color: white;
`;
