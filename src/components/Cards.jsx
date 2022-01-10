import { Context } from "../Context.js";
import Card from "./Card.jsx";
import styled from "styled-components";
import { useContext } from "react";
import Home from "./Home.jsx";

export default function Cards() {
  const { cities } = useContext(Context);
  return (
    <CardsContainer className="cards">
      {cities.length > 0 ? (
        cities?.map((c) => (
          <Card
            id={c.id}
            key={c.id}
            humidity={c.humidity}
            pressure={c.pressure}
            name={c.name}
            img={c.img}
            max={c.max}
            wind={c.wind}
            min={c.min}
            description={c.description}
          />
        ))
      ) : (
        <Home />
      )}
    </CardsContainer>
  );
}

export const CardsContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 2rem;
  flex-wrap: wrap;
  margin: 2rem 0;
`;
