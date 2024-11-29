import { useState } from "react";
import { useAuth } from "../context/AuthContext";
import { Logo, Menu, MenuIcon, MenuLink, Nav } from "../styles/Navbar.styles";
import { Container, Stack } from "../styles/UI.styles";
import { Link } from "react-router-dom";
import { MdMenu } from "react-icons/md";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  // These are coming for the AuthContext
  const { isAuth, logout } = useAuth();
  // const data = useAuth();
  // const{isAuth, logout} = data;

  return (
    // <Nav></Nav> style component wrap the whole Navbar code
    <Nav>
      <Container>
        <Stack direction="row" align="center" justify="space-between">
          <Link to="/">
            <Logo />
          </Link>
          {/* To create the "hamburger" menu(tree lines, compress menu). When you click the icon, it will be showed the mnu. So we need to create a state for that: const [open, setOpen] = useState(false); */}
          <MenuIcon>
            <MdMenu onClick={() => setOpen(!open)} />
          </MenuIcon>
          {/* With the alternative using string value the attributtes should receive something as string show="....", it will receive the props as a string, for that reason we should use: 
              show={open.toString()} */}
          <Menu show={open}>
            <MenuLink to="/about">About</MenuLink>
            <MenuLink to="https://github.com" target="_blank">
              {/* Sending directly to github */}
              GitHub
            </MenuLink>
            {/* If there is user, it will show logout, if not it will show login */}
            {isAuth ? (
              <MenuLink to="/login" onClick={() => logout()}>
                Logout
              </MenuLink>
            ) : (
              <MenuLink to="/login">Login</MenuLink>
            )}
          </Menu>
        </Stack>
      </Container>
    </Nav>
  );
};

export default Navbar;
