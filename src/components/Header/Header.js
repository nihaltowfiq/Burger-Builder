import React from "react";
import { NavLink } from "react-router-dom";
import { Nav, Navbar, NavbarBrand, NavItem } from "reactstrap";
import logo from "../../assests/logo.png";
import "./Header.css";

const Header = () => {
  return (
    <div
      className="container-fluid mb-3"
      style={{ backgroundColor: "#D70F64" }}
    >
      <Navbar>
        <NavbarBrand className="nav_logo" href="/">
          <img src={logo} alt="logo" />
        </NavbarBrand>
        <Nav className="ml-auto">
          <NavItem>
            <NavLink className="nav_link" exact to="/">
              Burger Builder
            </NavLink>
            <NavLink className="nav_link" to="/orders">
              Orders
            </NavLink>
          </NavItem>
        </Nav>
      </Navbar>
    </div>
  );
};

export default Header;
