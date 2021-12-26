import humidityIcon from "../img/humidity.svg";
import windIcon from "../img/wind.svg";
import pressureIcon from "../img/pressure.svg";
import { useContext } from "react";
import { Context } from "../Context";
import { Link } from "react-router-dom";
import styled from "styled-components";
import close from "../img/close.svg";

export default function Card({
  humidity,
  pressure,
  name,
  img,
  id,
  temp,
  min,
  wind,
  description,
}) {
  const { handleClose } = useContext(Context);
  return (
    <CardContent>
      <ButtonClose src={close} onClick={() => handleClose(id)} />
      <CardLink to={`/ciudad/${id}`}>{name}</CardLink>
      <CardMiddle>
        <div>
          <img
            className="iconoClima"
            src={"http://openweathermap.org/img/wn/" + img + "@2x.png"}
            width="90"
            height="90"
            alt="Icon Weather"
          />
        </div>
        <FontTemp>
          {temp} <span>/ {min} °C</span>
          <br />
          <p>{description}</p>
        </FontTemp>
      </CardMiddle>
      <CardInfo>
        {/* {infoCard.map((e) => (
          <Info measure={e} />
        ))} */}
        <InfoContainer>
          <InfoIcon>
            {/* <WiStrongWind size={"2.3rem"} color={"344CB7"} /> */}
            <img src={windIcon} alt="Wind" width={"30px"} height={"30px"} />
          </InfoIcon>
          <div>{wind} km/h</div>
        </InfoContainer>
        <InfoContainer>
          <InfoIcon>
            {/* <WiHumidity size={"2.3rem"} color={"A2D2FF"} /> */}
            <img src={humidityIcon} alt="Gout" width={"30px"} height={"30px"} />
          </InfoIcon>
          <div>{humidity} %</div>
        </InfoContainer>
        <InfoContainer>
          <InfoIcon>
            <img
              src={pressureIcon}
              alt="Pressure"
              width={"30px"}
              height={"30px"}
            />
          </InfoIcon>
          <div>{pressure} hPa</div>
        </InfoContainer>
      </CardInfo>
    </CardContent>
  );
}

const CardContent = styled.div`
  background-color: #16161a;
  border-radius: 1rem;
  width: 250px;
  height: auto;
  padding: 1.3rem 2rem;
  position: relative;
`;
const ButtonClose = styled.img`
  position: absolute;
  top: 15px;
  right: 15px;
  margin: 0 auto;
  width: 1.3rem;
  height: 1.3rem;
`;
const FontTemp = styled.div`
  color: azure;
  font-size: 2.6rem;
  font-weight: bold;
  span {
    font-weight: lighter;
    font-size: 1.5rem;
  }
`;
const CardLink = styled(Link)`
  color: white;
  font-size: 1.3rem;
  font-weight: 600;
  text-decoration: none;
  &:hover {
    text-decoration: none;
    color: blueviolet;
  }
`;

const CardMiddle = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: #94a1b2;

  h2 {
    margin: 0;
    font-weight: 900;
  }
  p {
    margin: 0px;
    font-size: 0.6rem;
    font-weight: 100;
  }
`;

const CardInfo = styled.div`
  display: flex;
  justify-content: space-between;
  text-align: center;
  font-size: 0.8rem;
`;
const InfoContainer = styled.div`
  color: white;
  font-size: 0.8rem;
  font-weight: bold;
`;
const InfoIcon = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 3.5rem;
  height: 3.5rem;
  margin: 0.8rem 0rem;
  backdrop-filter: blur(2px) saturate(181%);
  -webkit-backdrop-filter: blur(2px) saturate(181%);
  background-color: rgba(255, 255, 255, 0.281);
  border-radius: 0.5rem;
  color: white;
`;
