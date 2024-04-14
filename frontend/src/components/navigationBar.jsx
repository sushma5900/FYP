import React, { useContext } from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { Cart, Gear, PersonCircle, PersonFill } from "react-bootstrap-icons";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { CacheContext } from "../cacheProvider";

const StyledNavbar = styled(Navbar)`
  background-color: #C37960;
  min-height: 10vh;
  margin: 0;
`;

const LogoImage = styled.img`
  height: 3rem;
  width: 3rem;
  margin: 0.25rem 0.75rem;
`;

const NavWrapper = styled.div`
  .navbar-nav {
    align-self: flex-end;
    align-items: center;
    gap: 1.5rem;
  }
`;

const NavLinkWrapper = styled(Nav.Link)`
  color: var(--bs-white);
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 1rem;
  border-radius: 0.5rem;
  transition: background-color 0.3s, color 0.3s;

  &:hover {
    background-color: rgba(255, 255, 255, 0.1);
    color: var(--bs-white);
  }
`;

const IconWrapper = styled.span`
  margin-right: 0.5rem;
`;

export default function NavigationBar() {
  const cache = useContext(CacheContext).cache;
  const isAdmin = cache["isAdmin"];
  const userName = cache["userName"];

  return (
    <StyledNavbar variant="dark" expand="md" collapseOnSelect>
      <Container fluid style={{ justifyContent: "space-between" }}>
        <Navbar.Brand as={Link} to="/">
          <LogoImage src={process.env.PUBLIC_URL + "/logo.png"} alt="Logo" />
          BMS
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse style={{ justifyContent: "flex-end" }}>
          <NavWrapper>
            <Nav>
              <NavLinkWrapper as={Link} to="/">
                <IconWrapper><PersonFill /></IconWrapper>
                Home
              </NavLinkWrapper>
              <NavLinkWrapper as={Link} to="/menu">
                <IconWrapper><PersonFill /></IconWrapper>
                Menu
              </NavLinkWrapper>
              <NavLinkWrapper as={Link} to="/about">
                <IconWrapper><PersonFill /></IconWrapper>
                About
              </NavLinkWrapper>
              <NavLinkWrapper as={Link} to="/cart"
                //make it bigger
                className="fs-4 fw-bold
              "
              >
                <IconWrapper><Cart /></IconWrapper>
                
              </NavLinkWrapper>
              {userName ? (
                <NavLinkWrapper as={Link} to="/profile">
                  <IconWrapper><PersonCircle /></IconWrapper>
                  
                </NavLinkWrapper>
              ) : (
                <NavLinkWrapper as={Link} to="/login">
                  <IconWrapper><PersonFill /></IconWrapper>
                  Login
                </NavLinkWrapper>
              )}
              {isAdmin ? (
                <NavLinkWrapper as={Link} to="/admin/products">
                  <IconWrapper><Gear /></IconWrapper>
                  Admin
                </NavLinkWrapper>
              ) : null}
            </Nav>
          </NavWrapper>
        </Navbar.Collapse>
      </Container>
    </StyledNavbar>
  );
}
