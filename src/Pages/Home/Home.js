import React from "react";
import phonebanner from "../../assets/images/phonebanner.png";

import googlePlayIcon from "../../assets/images/googleplay.png";
import freedomImage from "../../assets/images/freedom.png";

import trackingImage from "../../assets/images/showcase/tracking.png";
import presetsImage from "../../assets/images/showcase/presets.png";
import leaderboardImage from "../../assets/images/showcase/leaderboard.png";
import bannerBackground from "../../assets/images/bannerbackground.png";
import chumzLogo from "../../assets/images/chumzlogo.png";

import accessibleIcon from "../../assets/icons/accessible.png";
import adviceIcon from "../../assets/icons/advice.png";
import consistentIcon from "../../assets/icons/consistent.png";
import mobileIcon from "../../assets/icons/mobile.png";

import anniversaryImage from "../../assets/images/categories/anniversary.png";
import cookerImage from "../../assets/images/categories/cooker.png";
import graduationImage from "../../assets/images/categories/graduation.png";
import rainydayImage from "../../assets/images/categories/rainyday.png";
import tripImage from "../../assets/images/categories/trip.png";
import gymImage from "../../assets/images/categories/gym.png";
import healthcareImage from "../../assets/images/categories/healthcare.png";
import speakersImage from "../../assets/images/categories/speakers.png";

import styled from "styled-components";

const HomeContainer = styled.section``;
const HeaderSection = styled.section``;
const BannerSection = styled.section`
  background-image: url(${bannerBackground});
  background-size: cover;
  background-position-x: left;
  color: #121212;
`;

const ChumzName = styled.h1`
  color: #3d3d3d;
  font-weight: 900;
`;
const ValueProposition = styled.h1`
  font-size: 4em;
  font-weight: 900;
  color: #cc3300;
`;

const FeaturesSection = styled.section`
  background-color: transparent;
`;

const FeaturesHeaderText = styled.h1`
  padding-top: 10px;
  padding-bottom: 20px;
`;

const FeatureDescription = styled.p`
  color: #3d3d3d;
`;

const CTAContainer = styled.div`
  padding: 50px 20px;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  background-color: #000033;
  color: white;
`;

const Home = () => {
  return (
    <HomeContainer>
      <HeaderSection className="fdb-block">
        <BannerSection className="fdb-block">
          <div className="container align-items-end d-flex">
            <div className="row align-items-center justify-content-center text-left">
              <div className="col-xs-12 col-sm-7">
                <img alt="image" height="60" src={chumzLogo} />
                <ValueProposition>Build a saving culture</ValueProposition>
                <p className="lead">
                  Chumz : enabling you to reach your savings goal by starting as
                  low as Kes 5
                </p>
                <p className="mt-4">
                  <a
                    href="https://play.google.com/store/app/details?id=com.chumz.app"
                    className=""
                  >
                    <img alt="image" height="80" src={googlePlayIcon} />
                  </a>
                </p>
              </div>

              <div className="col-xs-12 col-sm-4">
                <img
                  alt="image"
                  className="img-fluid rounded-0"
                  src={phonebanner}
                />
              </div>
            </div>
          </div>
        </BannerSection>

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
                <FeatureDescription>
                  Save any amount as low as kes 5 in a fun way.
                </FeatureDescription>
              </div>

              <div className="col-12 col-sm-6 col-lg-3 pt-4 pt-sm-0">
                <img alt="image" className="fdb-icon" src={consistentIcon} />
                <h3>
                  <strong>Consistency</strong>
                </h3>
                <FeatureDescription>
                  Create and track savings goals for different saving plans
                </FeatureDescription>
              </div>

              <div className="col-12 col-sm-6 col-lg-3 pt-4 pt-lg-0">
                <img alt="image" className="fdb-icon" src={adviceIcon} />
                <h3>
                  <strong>Support</strong>
                </h3>
                <FeatureDescription>
                  Receive frequent advice and tips on how to meet your goals.
                </FeatureDescription>
              </div>

              <div className="col-12 col-sm-6 col-lg-3 pt-4 pt-lg-0">
                <img alt="image" className="fdb-icon" src={mobileIcon} />
                <h3>
                  <strong>Easy</strong>
                </h3>
                <FeatureDescription>
                  Begin from anywhere and anytime by saving money from your
                  mobile money instantly
                </FeatureDescription>
              </div>
            </div>
          </div>
        </FeaturesSection>
      </HeaderSection>

      <section className="fdb-block">
        <div className="container align-items-center justify-content-center d-flex">
          <div className="row align-items-center text-left">
            <div className="col-12 col-sm-5 ml-auto pt-5 pt-lg-0">
              <h1>Freedom is priceless</h1>
              <p className="lead">
                Achieve the goals, milestones you set out for yourself today.
              </p>
              <p className="lead">
                It all starts by setting an easy goal. It’s time to achieve the
                dream.
              </p>
              <p className="mt-4">
                <a
                  href="https://play.google.com/store/app/details?id=com.chumz.app"
                  className="btn btn-secondary btn-large"
                >
                  <h2>Start saving</h2>
                </a>
              </p>
            </div>

            <div className="col-12 col-sm-7">
              <img alt="image" className="img-fluid" src={freedomImage} />
            </div>
          </div>
        </div>
      </section>

      <section class="fdb-block">
        <div class="container-fluid">
          <div class="row text-center">
            <div class="col-12">
              <h1>There is a saving plan for everyone</h1>
              <p class="lead" />
            </div>
          </div>

          <div class="row text-left justify-content-center mt-5">
            <div class="col-6 col-sm-3 pt-5 pt-sm-0">
              <img
                alt="image"
                class="img-fluid rounded"
                src={anniversaryImage}
              />
              <h3>
                <strong>Loved ones</strong>
              </h3>
            </div>
            <div class="col-6 col-sm-3 pt-5 pt-sm-0">
              <img
                alt="image"
                class="img-fluid rounded"
                src={graduationImage}
              />
              <h3>
                <strong>Education</strong>
              </h3>
            </div>

            <div class="col-6 col-sm-3 pt-5 pt-sm-0">
              <img alt="image" class="img-fluid rounded" src={cookerImage} />
              <h3>
                <strong>Home appliances</strong>
              </h3>
            </div>

            <div class="col-6 col-sm-3 pt-5 pt-sm-0">
              <img alt="image" class="img-fluid rounded" src={rainydayImage} />
              <h3>
                <strong>unexpected events</strong>
              </h3>
            </div>
          </div>
          <div class="row text-left justify-content-center mt-5">
            <div class="col-6 col-sm-3 pt-5 pt-sm-0">
              <img alt="image" class="img-fluid rounded" src={gymImage} />
              <h3>
                <strong>Self Improvement</strong>
              </h3>
            </div>
            <div class="col-6 col-sm-3 pt-5 pt-sm-0">
              <img
                alt="image"
                class="img-fluid rounded"
                src={healthcareImage}
              />
              <h3>
                <strong>Wellness</strong>
              </h3>
            </div>

            <div class="col-6 col-sm-3 pt-5 pt-sm-0">
              <img alt="image" class="img-fluid rounded" src={speakersImage} />
              <h3>
                <strong>Entertainment</strong>
              </h3>
            </div>

            <div class="col-6 col-sm-3 pt-5 pt-sm-0">
              <img alt="image" class="img-fluid rounded" src={tripImage} />
              <h3>
                <strong>Adventure</strong>
              </h3>
            </div>
          </div>
        </div>
      </section>

      <section class="fdb-block">
        <div class="container">
          <div class="row justify-content-center">
            <div class="col-12 text-left">
              <h1>Showcase</h1>

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

          <div class="row text-left mt-5">
            <div class="col-12 col-sm-6 col-md-3 col-lg-3  mr-md-auto ml-md-0 pt-5 pt-md-0">
              <img alt="image" class="img-fluid rounded" src={trackingImage} />
              <h3>
                <strong>Tracking</strong>
              </h3>
              <p>
                View the progress of your goal on a regular basis. Should you
                miss a target, there are provisions to get you back on track
              </p>
            </div>

            <div class="col-12 col-sm-6 col-md-3 col-lg-3  pt-5 pt-md-0">
              <img alt="image" class="img-fluid rounded" src={presetsImage} />
              <h3>
                <strong>Curated Goals</strong>
              </h3>
              <p>
                Not sure what to save for? Access the list of curated goals from
                the chumz team to quickly get you started.
              </p>
            </div>

            <div class="col-12 col-sm-6 col-md-3 col-lg-3  ml-md-auto mr-md-0 pt-5 pt-md-0">
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
            <div class="col-12 col-sm-6 col-md-3 col-lg-3  mr-md-auto ml-md-0">
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

      <section className="fdb-block">
        <CTAContainer className="container">
          <div className="row justify-content-center align-items-center">
            <div className="col-xs-6 col-sm-4">
              <h2>Ready to get started?</h2>
            </div>
            <div className="col-xs-6 col-sm-4">
              <p>
                Start saving today and be on trackto your dream of financial
                freedom
              </p>
            </div>
            <div className="col-xs-12 col-sm-4">
              <p className="mt-4">
                <a
                  href="https://play.google.com/store/app/details?id=com.chumz.app"
                  className="btn btn-secondary btn-large"
                >
                  <h2>Start saving</h2>
                </a>
              </p>
            </div>
          </div>
        </CTAContainer>
      </section>
    </HomeContainer>
  );
};

export default Home;
