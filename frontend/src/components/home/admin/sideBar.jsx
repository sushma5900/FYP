import React from "react";
import { Nav, NavItem, NavLink, TabContainer, TabContent, TabPane } from "react-bootstrap";
import { Link } from "react-router-dom";
import styled from "styled-components";

const BlockEnclosure = styled.div.attrs({ className: "sidebar" })`
  padding: 1rem;
  background-color: #f8f9fa; /* Light gray background color */
`;

const StyledNav = styled(Nav)`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const StyledNavItem = styled(NavItem)`
  text-align: center;
`;

const StyledNavLink = styled(NavLink)`
  color: #212529; /* Dark color for the links */
  &:hover {
    color: #007bff; /* Color on hover */
  }
`;

export default function SideBar() {
  return (
    <BlockEnclosure>
      <TabContainer defaultActiveKey={"products"}>
        <StyledNav variant="pills">
          <StyledNavItem>
            <StyledNavLink as={Link} to="/admin/products" eventKey={"products"}>
              Products
            </StyledNavLink>
          </StyledNavItem>
          <StyledNavItem>
            <StyledNavLink as={Link} to="/admin/coupons" eventKey={"coupons"}>
              Coupons
            </StyledNavLink>
          </StyledNavItem>
          <StyledNavItem>
            <StyledNavLink as={Link} to="/admin/users" eventKey={"users"}>
              Users
            </StyledNavLink>
          </StyledNavItem>
          <StyledNavItem>
            <StyledNavLink as={Link} to="/admin/orders" eventKey={"orders"}>
              Orders
            </StyledNavLink>
          </StyledNavItem>
          <StyledNavItem>
            <StyledNavLink as={Link} to="/admin/reviews" eventKey={"reviews"}>
              Reviews
            </StyledNavLink>
          </StyledNavItem>
        </StyledNav>
        <TabContent>
          <TabPane eventKey={"products"} />
          <TabPane eventKey={"coupons"} />
          <TabPane eventKey={"users"} />
          <TabPane eventKey={"orders"} />
          <TabPane eventKey={"reviews"} />
        </TabContent>
      </TabContainer>
    </BlockEnclosure>
  );
}
