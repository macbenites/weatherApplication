import styled, { keyframes } from "styled-components";
import logo from "../img/Sun.svg";

import { FaInstagram, FaLinkedin, FaGithub, FaReact } from "react-icons/fa";

function Footer() {
  return (
    <FootContent>
      <Description>
        <Logo>
          <img src={logo} alt="Sun" />
          <TextLogo>
            Weather<span>App</span>
          </TextLogo>
        </Logo>
        <p>
          The purpose of WeatherApp is to show detailed information about the
          consulted city, and also to be able to practice frontend web
          development.
        </p>
      </Description>
      <FooterLower>
        <p>
          MIT License &copy; {new Date().getFullYear()} Developed by Marlon
          Acosta.
        </p>
        <Contact>
          <LinkContact
            href="https://www.instagram.com/marlonacostab/"
            target={"_blank"}
            rel="noreferrer"
          >
            <FaInstagram size={"2.3rem"} />
          </LinkContact>

          <LinkContact
            href="https://www.linkedin.com/in/marlonalexisacostabenites/"
            target={"_blank"}
            rel="noreferrer"
          >
            <FaLinkedin size={"2.3rem"} />
          </LinkContact>

          <LinkContact
            href="https://github.com/macbenites"
            target={"_blank"}
            rel="noreferrer"
          >
            <FaGithub size={"2.3rem"} />
          </LinkContact>
          <LinkContact
            href="https://reactjs.org/"
            target={"_blank"}
            rel="noreferrer"
          >
            <Rotate size={"2.3rem"} />
          </LinkContact>
        </Contact>
      </FooterLower>
    </FootContent>
  );
}

export default Footer;

const FootContent = styled.footer`
  padding: 1rem 2rem;
  position: relative;
  color: var(--paragraph);
  background-color: var(--background-color);
`;

const TextLogo = styled.div`
  text-shadow: 0px 4px 4px rgba(255, 255, 255, 0.1);
  span {
    font-weight: 100;
    font-size: 1.3rem;
  }
`;
const FooterLower = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-end;

  p {
    font-size: 0.8rem;
    font-weight: 200;
  }

  @media (max-width: 768px) {
    flex-direction: column-reverse;
    align-items: center;
    margin-top: 3rem;
  }
`;
const Description = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 3rem;
  text-align: left;
  max-width: 300px;
  flex-direction: column;
`;

const Contact = styled.div`
  display: flex;
  justify-content: space-between;
  color: var(--paragraph);
`;

const LinkContact = styled.a`
  margin: 0 1rem;
  color: var(--paragraph);
`;

const Logo = styled.div`
  display: flex;
  align-items: center;
  font-weight: 600;
  font-size: 1.7rem;
  color: var(--headline);

  @media (min-width: 768px) {
    img {
      display: none;
    }
  }
`;

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`;

const Rotate = styled(FaReact)`
  display: inline-block;
  animation: ${rotate} 3s linear infinite;
`;
