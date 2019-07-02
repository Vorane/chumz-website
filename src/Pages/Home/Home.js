import React from "react";
import phonebanner from "../../assets/images/phonebanner.png";

import googlePlayIcon from "../../assets/images/googleplay.png";
import freedomImage from "../../assets/images/freedom.png";

import trackingImage from "../../assets/images/showcase/tracking.png";
import presetsImage from "../../assets/images/showcase/presets.png";
import leaderboardImage from "../../assets/images/showcase/leaderboard.png";
import bannerImage from "../../assets/images/banner.svg";

import accessibleIcon from "../../assets/icons/accessible.png";
import adviceIcon from "../../assets/icons/advice.png";
import consistentIcon from "../../assets/icons/consistent.png";
import mobileIcon from "../../assets/icons/mobile.png";

import styled from "styled-components";

const HomeContainer = styled.section`
  background-image: url(${bannerImage});
`;
const BannerSection = styled.section`
  background-image: url(${bannerImage});
`;

const ChumzName = styled.h1`
  color: white;
`;

const FeaturesSection = styled.section`
  background-color: transparent;
`;

const FeaturesHeaderText = styled.h1`
  padding-top: 10px;
  padding-bottom: 20px;
`;

const Home = () => {
  return (
    <HomeContainer>
      <BannerSection className="fdb-block">
        <div className="container align-items-end justify-content-center d-flex">
          <div className="row align-items-top text-left">
            <div className="col-12 col-md-6 col-lg-5">
              <ChumzName>Chumz</ChumzName>
              <h1>Build a saving culture</h1>
              <p className="lead">
                Chumz : enabling you to reach your savings goal by starting as
                low as Kes 5
              </p>
              <p className="mt-4">
                <a href="https://www.froala.com" className="">
                  <img alt="image" height="40" src={googlePlayIcon} />
                </a>
              </p>
            </div>

            <div className="col-12 col-sm-4 col-md-6 col-lg-4 m-auto pt-5">
              <img
                alt="image"
                className="img-fluid rounded-0"
                src={phonebanner}
              />
            </div>
          </div>
        </div>

        <FeaturesSection className="fdb-block">
          <div className="container">
            <div className="row text-center">
              <div className="col-12">
                <FeaturesHeaderText>Why Chumz?</FeaturesHeaderText>
              </div>
            </div>
            <div className="row text-center justify-content-center mt-5">
              <div className="col-12 col-sm-6 col-lg-3">
                <img alt="image" className="fdb-icon" src={accessibleIcon} />
                <h3>
                  <strong>Accessible</strong>
                </h3>
                <p>Save any amount as low as kes 5 in a fun way.</p>
              </div>

              <div className="col-12 col-sm-6 col-lg-3 pt-4 pt-sm-0">
                <img alt="image" className="fdb-icon" src={consistentIcon} />
                <h3>
                  <strong>Consistency</strong>
                </h3>
                <p>Create and track savings goals for different saving plans</p>
              </div>

              <div className="col-12 col-sm-6 col-lg-3 pt-4 pt-lg-0">
                <img alt="image" className="fdb-icon" src={adviceIcon} />
                <h3>
                  <strong>Support</strong>
                </h3>
                <p>
                  Receive frequent advice and tips on how to meet your goals.
                </p>
              </div>

              <div className="col-12 col-sm-6 col-lg-3 pt-4 pt-lg-0">
                <img alt="image" className="fdb-icon" src={mobileIcon} />
                <h3>
                  <strong>Easy</strong>
                </h3>
                <p>
                  Begin from anywhere and anytime by saving money from your
                  mobile money instantly
                </p>
              </div>
            </div>
          </div>
        </FeaturesSection>
      </BannerSection>

      <section className="fdb-block">
        <div className="container align-items-center justify-content-center d-flex">
          <div className="row align-items-center text-left">
            <div className="col-12 col-lg-5 ml-auto pt-5 pt-lg-0">
              <h1>Freedom is priceless</h1>
              <p className="lead">
                Achieve the goals, milestones you set out for yourself today.
              </p>
              <p className="lead">
                It all starts by setting an easy goal. It’s time to achieve the
                dream.
              </p>
              <p className="mt-4">
                <a href="https://www.froala.com" className="btn btn-secondary">
                  Start saving
                </a>
              </p>
            </div>

            <div className="col-12 col-sm-6">
              <img alt="image" className="img-fluid" src={freedomImage} />
            </div>
          </div>
        </div>
      </section>

      <section class="fdb-block">
        <div class="container">
          <div class="row justify-content-center">
            <div class="col-12 text-left">
              <h1>Showcase</h1>
              <p class="lead" />
            </div>
          </div>

          <div class="row text-left mt-5">
            <div class="col-12 col-sm-8 col-md-4 col-lg-3 m-sm-auto mr-md-auto ml-md-0">
              <img alt="image" class="img-fluid rounded" src={trackingImage} />
              <h3>
                <strong>Tracking</strong>
              </h3>
              <p>
                View the progress of your goal on a regular basis. Should you
                miss a target, there are provisions to get you back on track
              </p>
            </div>

            <div class="col-12 col-sm-8 col-md-4 col-lg-3 m-sm-auto pt-5 pt-md-0">
              <img alt="image" class="img-fluid rounded" src={presetsImage} />
              <h3>
                <strong>Curated Goals</strong>
              </h3>
              <p>
                Not sure what to save for? Access the list of curated goals from
                the chumz team to quickly get you started.
              </p>
            </div>

            <div class="col-12 col-sm-8 col-md-4 col-lg-3 m-sm-auto ml-md-auto mr-md-0 pt-5 pt-md-0">
              <img
                alt="image"
                class="img-fluid rounded"
                src={leaderboardImage}
              />
              <h3>
                <strong>Competition</strong>
              </h3>
              <p>Compete with other users to gain an edge and stand to win.</p>
            </div>
          </div>
          <div class="row text-left mt-5">
            <div class="col-12 col-sm-8 col-md-4 col-lg-3 m-sm-auto mr-md-auto ml-md-0">
              <img alt="image" class="img-fluid rounded" src={trackingImage} />
              <h3>
                <strong>Tracking</strong>
              </h3>
              <p>
                View the progress of your goal on a regular basis. Should you
                miss a target, there are provisions to get you back on track
              </p>
            </div>
          </div>
        </div>
      </section>
    </HomeContainer>
  );
};

export default Home;
