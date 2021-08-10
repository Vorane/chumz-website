import React, { Fragment } from "react";
import pigIcon from "../../assets/images/pigicon.svg";

import callIcon from "../../assets/icons/call-outline.svg"
import mailIcon from "../../assets/icons/mail-outline.svg"
import navigateIcon from "../../assets/icons/navigate-outline.svg"

import styled from "styled-components";
import { Link } from "react-router-dom";

const ContactSection = styled.div`
  padding: 1em 0em;
`
const IconContainer = styled.div`
  padding: 2em 0em;
`
const NavItem = styled.li`

flex: 1;
list-style-type: none;
`;
const NavLink = props => (
  <NavItem>
    <Link {...props} style={{ color: "inherit" }} />
  </NavItem>
);

const Footer = () => (
  <div >



    <ContactSection className="bg-dark">
      <div className="container">
        <div className="row-50"></div>
        <div className="row justify-content-center text-center">
          <div className="col-12 col-md mr-auto ml-auto">

            <IconContainer>

              <img alt="image" height="40" className="mb-2" src={callIcon} />
            </IconContainer>
            <p className="lead">+254 717 134 114</p>
          </div>

          {/* <div className="col-12 col-md pt-4 pt-md-0 mr-auto ml-auto">

            <IconContainer>

              <img alt="image" height="40" className="mb-2" src={navigateIcon} />
            </IconContainer>
            <p className="lead">123 6th St.<br />Melbourne, FL 32904 </p>
          </div> */}

          <div className="col-12 col-md pt-4 pt-md-0 mr-auto ml-auto">
            <IconContainer>
              <img alt="image" height="40" className="mb-2" src={mailIcon} />
            </IconContainer>
            <p className="lead">info@moneto.co.ke</p>
          </div>
        </div>
        <div className="row-50"></div>
      </div>
    </ContactSection>


    <footer className="fdb-block footer-large">
      <div className="container">
        <div className="row align-items-top text-center">
          <div className="col-12 col-sm-6 col-md-4 col-lg-3 text-sm-left">
            <h3><strong>Pages</strong></h3>
            <nav className="nav flex-column">
              <NavLink to="/home" replace className="nav-item">
                <a className="nav-link active" >Home</a>
              </NavLink>

              <NavLink to="/about" replace className="nav-item">
                <a className="nav-link" >Team</a>
              </NavLink>

            </nav>
          </div>

          <div className="col-12 col-sm-6 col-md-4 col-lg-3 mt-5 mt-sm-0 text-sm-left">
            <h3><strong>Legal</strong></h3>
            <nav className="nav flex-column">
              <NavLink to="/privacy-policy" replace className="nav-item">
                <a className="nav-link active" >Privacy Policy</a>
              </NavLink>
              <NavLink to="/terms" replace className="nav-item">
                <a className="nav-link" >Terms</a>
              </NavLink>
              <NavLink to="/faqs" replace className="nav-item">
                <a className="nav-link" >FAQ</a>
              </NavLink>

            </nav>
          </div>

          <div className="col-12 col-md-4 col-lg-3 text-md-left mt-5 mt-md-0">
            <h3><strong>About Us</strong></h3>
            <img alt="piggy" src={pigIcon} height="40" />
            <p>We are a community dedicated to achieving personal financial freedom.</p>
          </div>

          <div className="col-12 col-lg-2 ml-auto text-lg-left mt-4 mt-lg-0">
            <h3><strong>Follow Us</strong></h3>
            <p className="lead">

              <a className="mx-2"><i className="fab fa-twitter" aria-hidden="true"></i></a>
              <a className="mx-2"><i className="fab fa-facebook" aria-hidden="true"></i></a>
              <a className="mx-2"><i className="fab fa-instagram" aria-hidden="true"></i></a>

            </p>
          </div>
        </div>

        <div className="row mt-3">
          <div className="col text-center">
            © 2021 Moneto Ventures. All Rights Reserved
       </div>
        </div>
      </div>
    </footer>
  </div>


)

export default Footer;
