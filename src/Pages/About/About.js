import React from "react";
import styled from "styled-components";

import pigIcon from "../../assets/images/pigicon.png";
import evans from "../../assets/images/people/evans.jpg";
import samuel from "../../assets/images/people/samuel.jpg";
import njogu from "../../assets/images/people/njogu.png";
import padu from "../../assets/images/people/padu.jpg";
import tim from "../../assets/images/people/tim.png";
import albert from "../../assets/images/people/albert.jpg";

const PeopleImage = styled.img`
  -webkit-filter: grayscale(100%); /* Safari 6.0 - 9.0 */
  filter: grayscale(100%);
`;

const About = () => {
  return (
    <div>
      <section className="fdb-block team-8">
        <div className="container">
          <div className="row text-left justify-content-left">
            <div className="col-8">
              <h1>Our Amazing Team</h1>
              <p className="lead">
                With mobile phone on the raise a majority of people in the
                emerging markets unbanked Chumz is building an easier way of the
                unbanked to get the ability to save their funds.
              </p>
              <p className="lead">
                Chumz enables anyone to create a goal and save as little as Kes
                5 to their savings account.
              </p>
              <p className="lead">
                The service guides the user on how to make more savings through
                research based behavioural psychology mechanism and through a
                user friendly navigation experience
              </p>
            </div>
          </div>

          <div className="row-100" />

          <div className="row justify-content-center text-left">
            <div className="col-sm-6">
              <div className="row align-items-center">
                <div className="col-4">
                  <PeopleImage
                    alt="image"
                    className="img-fluid rounded-circle"
                    src={samuel}
                  />
                </div>

                <div className="col-8">
                  <h3>
                    <strong>Samuel Njuguna</strong>
                  </h3>
                  <p className="lead">Business Development</p>
                </div>
              </div>
            </div>

            <div className="col-sm-6">
              <div className="row align-items-center">
                <div className="col-4">
                  <PeopleImage
                    alt="image"
                    className="img-fluid rounded-circle"
                    src={njogu}
                  />
                </div>

                <div className="col-8">
                  <h3>
                    <strong>Samuel Njogu</strong>
                  </h3>
                  <p className="lead">User Experience & Interface Designer</p>
                </div>
              </div>
            </div>
          </div>

          <div className="row-70" />

          <div className="row justify-content-center text-left">
            <div className="col-sm-6">
              <div className="row align-items-center">
                <div className="col-4">
                  <PeopleImage
                    alt="image"
                    className="img-fluid rounded-circle"
                    src={tim}
                  />
                </div>

                <div className="col-8">
                  <h3>
                    <strong>Titus Marenye</strong>
                  </h3>
                  <p className="lead">Chief Financial Officer</p>
                </div>
              </div>
            </div>

            <div className="col-sm-6">
              <div className="row align-items-center">
                <div className="col-4">
                  <PeopleImage
                    alt="image"
                    className="img-fluid rounded-circle"
                    src={albert}
                  />
                </div>

                <div className="col-8">
                  <h3>
                    <strong>Albert Kosgei</strong>
                  </h3>
                  <p className="lead">
                    Senior App and Backend system developer
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="row-70" />

          <div className="row justify-content-center text-left">
            <div className="col-sm-6">
              <div className="row align-items-center">
                <div className="col-4">
                  <PeopleImage
                    alt="image"
                    className="img-fluid rounded-circle"
                    src={padu}
                  />
                </div>

                <div className="col-8">
                  <h3>
                    <strong>Njuguna Njoki</strong>
                  </h3>
                  <p className="lead">
                    senior content developer and operations office
                  </p>
                </div>
              </div>
            </div>

            <div className="col-sm-6">
              <div className="row align-items-center">
                <div className="col-4">
                  <PeopleImage
                    alt="image"
                    className="img-fluid rounded-circle"
                    src={evans}
                  />
                </div>

                <div className="col-8">
                  <h3>
                    <strong>Evans Munene</strong>
                  </h3>
                  <p className="lead">Web & Design Engineer</p>
                </div>
              </div>
            </div>
          </div>
          <div className="row-70" />
        </div>
      </section>
    </div>
  );
};

export default About;
