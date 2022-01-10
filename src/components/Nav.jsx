import { useState } from "react";
import logo from "../img/Sun.svg";
import styled from "styled-components";
import { Link } from "react-router-dom";
function Nav() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <NavContent>
      <IconLink to="/">
        <Logo>
          <img src={logo} alt="Weather" />
          <LogoNav>
            Weather<span>App</span>
          </LogoNav>
        </Logo>
      </IconLink>
      <Hamburger
        onClick={() => {
          setIsOpen(!isOpen);
        }}
      >
        <span />
        <span />
        <span />
      </Hamburger>
      <NavMenu isOpen={isOpen}>
        <ContainerLink>
          <NavLink
            to="/"
            onClick={() => {
              setIsOpen(!isOpen);
            }}
          >
            Home
          </NavLink>
        </ContainerLink>
        <ContainerLink>
          <NavLink
            to="/about"
            onClick={() => {
              setIsOpen(!isOpen);
            }}
          >
            AboutMe
          </NavLink>
        </ContainerLink>
      </NavMenu>
    </NavContent>
  );
}

const NavContent = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  padding: 1rem 2rem;
  margin-bottom: 2rem;
`;
const LogoNav = styled.div`
  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.5);
`;
const ContainerLink = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 2.8rem;
  margin: 0 1rem;
  &:hover {
    text-decoration: none;
    width: 100%;
    height: 2.8rem;
    background-color: var(--link-color);
    border-radius: 0.313rem;
  }

  @media (min-width: 768px) {
    &:hover {
      background-color: transparent;
    }
  }
`;
const IconLink = styled(Link)`
  font-size: 1.2rem;
  color: var(--headline);
  font-weight: 600;
  cursor: pointer;
  text-decoration: none;

  &:hover {
    text-decoration: none;
    color: var(--headline);
  }
`;

const Logo = styled.div`
  display: flex;
  align-items: center;
  font-weight: 600;
  font-size: 1.7rem;
  span {
    font-weight: 100;
    font-size: 1.3rem;
  }

  @media screen and (max-width: 768px) {
    img {
      display: none;
    }
  }
`;
const Hamburger = styled.div`
  display: none;
  flex-direction: column;
  cursor: pointer;

  span {
    height: 4px;
    width: 25px;
    background: var(--headline);
    margin-bottom: 4px;
    border-radius: 5px;
  }

  @media (max-width: 768px) {
    display: flex;
  }
`;

const NavMenu = styled.div`
  display: flex;
  align-items: center;

  @media (max-width: 768px) {
    overflow: hidden;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
    width: 100%;
    height: 300px;
    max-height: ${({ isOpen }) => (isOpen ? "600px" : "0")};
    transition: max-height 0.2s ease-in;
  }
`;
const NavLink = styled(Link)`
  font-size: 1.1rem;
  color: var(--paragraph);
  font-weight: 600;
  cursor: pointer;
  text-decoration: none;
  &:hover {
    color: var(--link-color);
    text-decoration: none;
  }
  @media (max-width: 768px) {
    &:hover {
      color: var(--headline);
      text-decoration: none;
    }
  }
`;
export default Nav;
