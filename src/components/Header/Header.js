import React from "react";
import { connect } from "react-redux";
import { NavLink } from "react-router-dom";
import { Nav, Navbar, NavbarBrand, NavItem } from "reactstrap";
import logo from "../../assests/logo.png";
import "./Header.css";
import { alterLogout } from "../../redux/alterAuthActions";

const Header = ({ email, alterLogout }) => {
  const username = localStorage.getItem("username");

  let links = null;
  if (email === null) {
    links = (
      <Nav className="ml-auto">
        <NavItem>
          <NavLink className="nav_link" exact to="/login">
            Login
          </NavLink>
        </NavItem>
      </Nav>
    );
  } else {
    links = (
      <Nav className="ml-auto">
        <NavItem>
          <NavLink className="nav_link" exact to="/">
            Burger Builder
          </NavLink>
          <NavLink className="nav_link" exact to="/orders">
            Orders
          </NavLink>
          <NavLink className="nav_link" exact to="/login" onClick={alterLogout}>
            Logout
          </NavLink>
        </NavItem>
      </Nav>
    );
  }
  return (
    <div
      className="container-fluid mb-3"
      style={{ backgroundColor: "#D70F64" }}
    >
      <Navbar>
        <NavbarBrand className="nav_logo" href="/">
          <img src={logo} alt="logo" />
        </NavbarBrand>

        {username && (
          <h5 className="text-white ml-4">
            Welcome,{" "}
            <span style={{ textTransform: "capitalize" }}>{username}</span>
          </h5>
        )}

        {links}
      </Navbar>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    email: state.email,
  };
};

const mapDispatchToProps = { alterLogout };

export default connect(mapStateToProps, mapDispatchToProps)(Header);
