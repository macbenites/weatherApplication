import styled, { keyframes } from "styled-components";
import logo from "../img/Sun.svg";
import {
  FaInstagram,
  FaLinkedin,
  FaGithub,
  FaFacebookSquare,
  FaReact,
} from "react-icons/fa";

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
          The purpose of WeatherApp is to display detailed information about the
          consulted city.
        </p>
      </Description>
      <FooterLower>
        <p>
          MIT License &copy; {new Date().getFullYear()} Developed by Marlon
          Acosta.
        </p>
        <Contact>
          <li>
            <LinkContact
              href="https://www.instagram.com/marlonacostab/"
              target={"_blank"}
              rel="noreferrer"
            >
              <FaInstagram size={"2.3rem"} />
            </LinkContact>
          </li>
          <li>
            <LinkContact
              href="https://www.linkedin.com/in/marlonalexisacostabenites/"
              target={"_blank"}
              rel="noreferrer"
            >
              <FaLinkedin size={"2.3rem"} />
            </LinkContact>
          </li>
          <li>
            <LinkContact
              href="https://github.com/macbenites"
              target={"_blank"}
              rel="noreferrer"
            >
              <FaGithub size={"2.3rem"} />
            </LinkContact>
          </li>
          <li>
            <LinkContact
              href="https://reactjs.org/"
              target={"_blank"}
              rel="noreferrer"
            >
              <Rotate size={"2.3rem"} />
            </LinkContact>
          </li>
        </Contact>
      </FooterLower>
    </FootContent>
  );
}

export default Footer;

const FootContent = styled.footer`
  padding: 1rem 2rem;
  background-color: #16161a;
  color: #94a1b2;
`;

const TextLogo = styled.div`
  text-shadow: 0px 4px 4px rgba(255, 255, 255, 0.1);
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
  max-width: 350px;
  flex-direction: column;
`;

const Contact = styled.ul`
  display: flex;
  justify-content: space-around;
  max-width: 350px;
  color: #94a1b2;
  li {
    list-style: none;
  }
`;

const LinkContact = styled.a`
  margin: 0 2rem;
  color: #94a1b2;
`;

const Logo = styled.div`
  display: flex;
  align-items: center;
  font-weight: 600;
  font-size: 1.7rem;
  color: #fffffe;
  span {
    font-weight: 100;
    font-size: 1.3rem;
  }
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
