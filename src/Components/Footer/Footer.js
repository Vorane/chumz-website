import React from "react";
import pigIcon from "../../assets/images/pigicon.svg";

import styled from "styled-components";
import { Link } from "react-router-dom";
const NavItem = styled.li`
  text-align: center;
  flex: 1;
  list-style-type: none;
`;
const NavLink = props => (
  <NavItem>
    <Link {...props} style={{ color: "inherit" }} />
  </NavItem>
);
const Footer = () => {
  return (
    <footer class="fdb-block footer-small">
      <div class="container">
        <div class="row align-items-center text-center">
          <div class="col-12 col-lg-4 text-lg-left">© 2019 Chumz</div>

          <div class="col-12 col-lg-4 mt-4 mt-lg-0">
            <NavLink to="/home" replace>
              <img alt="piggy" src={pigIcon} height="40" />
            </NavLink>
          </div>

          <div class="col-12 col-lg-4 text-lg-right mt-4 mt-lg-0">
            <ul class="nav justify-content-lg-end justify-content-center">
              <NavLink to="/faqs" replace className="nav-item">
                <a className="nav-link">FAQs</a>
              </NavLink>

              <NavLink to="/about" replace className="nav-item">
                <a className="nav-link">About</a>
              </NavLink>

              <NavLink to="/policy" replace className="nav-item">
                <a className="nav-link">Privacy Policy</a>
              </NavLink>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
