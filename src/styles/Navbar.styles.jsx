import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const Nav = styled.nav`
  background-color: ${({ theme }) => theme.palette.primary.dark};
  box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.4);
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 100;
`;

// z-index: 100;
// The value can be written as it is wanted, but writting 100 it is assured to have the Nav styled component in the top level of all
// If there are multiple divs overlapping. To order the divs(A,B and C), it is necessary to use z-index, which of them is on top on them.
// C=3 B=2 A=1

// attrs = attributes, it is just defined, if it is written styled.img. it will be found a lot of options
export const Logo = styled.img.attrs({ src: "img/logo.png" })`
  height: 60px;
`;

// When the breakpoint is reached, for small screen the hamburger menu appears. For the big screen, hamburguer menu it will be not displayed (for that it is used display:none as initial value)
export const MenuIcon = styled.div`
  display: none;
  cursor: pointer;
  @media screen and (max-width: ${({ theme }) => theme.breakpoint}) {
    display: flex;
    align-items: center;
    font-size: 36px;
    color: white;
  }
`;

 // To show the menu for small screens, with the hamburguer menu: max-height: ${({ show }) => (show === "true" ? "300px" : "0")};
 // show will be send to the component as a prop
 // if the show exists, it is true, the height of the menu it will be 300px, it not 0. There will not be menu
export const Menu = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  @media screen and (max-width: ${({ theme }) => theme.breakpoint}) {
    flex-direction: column;
    overflow: hidden;
    width: 100%;
    max-height: ${({ show }) => (show === true ? "300px" : "0")};
    transition: max-height 0.3s ease-in-out;
  }
`;

// Using boolean value
  // max-height: ${({ show }) => (show === true ? "300px" : "0")};
// Or using string value "true"
  // max-height: ${({ show }) => (show === "true" ? "300px" : "0")};
// Navbar.jsx you have to change :  <Menu show={open}> to  <Menu show={open.toString()}>    


 // NavLink comes from react router dom. If it is had a component that it is wanted to style, it has to be used parenthesis: styled.()
export const MenuLink = styled(NavLink)`
  padding: 1rem 2rem;
  color: ${({ theme }) => theme.palette.secondary.light};
  text-align: center;
  text-decoration: none;
  transition: all 0.3s ease-in-out;
  font-size: 20px;
  &:hover {
    color: ${({ theme }) => theme.palette.secondary.dark};
  }
  &.active {
    font-weight: bold;
    color: ${({ theme }) => theme.palette.secondary.main};
  }

  @media screen and (max-width: ${({ theme }) => theme.breakpoint}) {
    width: 100%;
  }
`;
