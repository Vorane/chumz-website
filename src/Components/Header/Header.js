import React, { Component } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import basketIcon from "../../assets/images/pigicon.png";

const NavHeader = styled.header`
  position: fixed;
  width: 100%;
  z-index: 1;
  @media (max-width: 576px) {
    padding-left: 0px;
    padding-right: 0px;
  }
  -webkit-box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.75);
  box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.75);
`;

const Nav = styled.header`
  z-index: 2;
  @media (max-width: 576px) {
    background: #f4f4f4;
  }
`;
const NavItem = styled.li`
  text-align: center;
  flex: 1;
  list-style-type: none;
  padding: 10px;
`;

const NavLink = props => (
  <NavItem>
    <Link {...props} style={{ color: "inherit" }} />
  </NavItem>
);

const IconLink = styled.li`
  text-align: left;
`;

const Icon = styled.img`
  height: 50px;
  width: 50px;
`;

class Header extends Component {
  state = {
    navCollapsed: true
  };

  _onToggleNav = () => {
    this.setState({ navCollapsed: !this.state.navCollapsed });
  };

  render() {
    const { navCollapsed } = this.state;

    return (
      <NavHeader>
        <div className="container-fluid">
          <Nav className=" row navbar navbar-expand-md">
            <IconLink to="/home" className="navbar-brand">
              <NavLink to="/home">
                <Icon src={basketIcon} />
              </NavLink>
            </IconLink>

            <button
              className="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarNav3"
              aria-controls="navbarNav3"
              aria-expanded="false"
              aria-label="Toggle navigation"
              onClick={this._onToggleNav}
            >
              <span className="navbar-toggler-icon" />
            </button>

            <div
              className={(navCollapsed ? "collapse" : "") + " navbar-collapse"}
              id="navbarNav3"
            >
              <ul className="navbar-nav ml-auto">
                <NavLink to="/Home" className="nav-item nav-link">
                  <a className="nav-link" onClick={this._onToggleNav}>
                    Home
                  </a>
                </NavLink>

                <NavLink to="/contact" className="nav-item nav-link">
                  <a className="nav-link" onClick={this._onToggleNav}>
                    Contact
                  </a>
                </NavLink>
                <NavLink to="/about" className="nav-item nav-link">
                  <a className="nav-link" onClick={this._onToggleNav}>
                    About
                  </a>
                </NavLink>
              </ul>
            </div>
          </Nav>
        </div>
      </NavHeader>
    );
  }
}

export default Header;
