import styled from "styled-components";
import logo from "../img/Sun.svg";
import weather from "../img/WeatherApp.svg";
import {
  FaInstagram,
  FaLinkedin,
  FaGithub,
  FaFacebookSquare,
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
          Happy Hues, plus the majority of my side-projects, are designed &
          built visually (without code) using
        </p>
      </Description>
      <FooterLower>
        <p>
          &copy; {new Date().getFullYear()} WeatherApp. All Rights Reserved.
        </p>
        <Contact>
          <LinkContact
            href="https://www.instagram.com/marlonacostab/"
            target={"_blank"}
          >
            <FaInstagram size={"2.3rem"} />
          </LinkContact>
          <LinkContact
            href="https://www.linkedin.com/in/marlonalexisacostabenites/"
            target={"_blank"}
          >
            <FaLinkedin size={"2.3rem"} />
          </LinkContact>
          <LinkContact href="https://github.com/macbenites" target={"_blank"}>
            <FaGithub size={"2.3rem"} />
          </LinkContact>
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

  @media screen and (max-width: 768px) {
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

const Contact = styled.div`
  display: flex;
  justify-content: space-around;
  max-width: 300px;
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
  @media screen and (min-width: 768px) {
    img {
      display: none;
    }
  }
`;
