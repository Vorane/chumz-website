import React from "react"
import phonebanner from "../../assets/images/phonebanner.png"

import googlePlayIcon from "../../assets/images/googleplay.png"
import freedomImage from "../../assets/images/freedom.png"

import trackingImage from "../../assets/images/showcase/tracking.png"
import presetsImage from "../../assets/images/showcase/presets.png"
import leaderboardImage from "../../assets/images/showcase/leaderboard.png"
import bannerBackground from "../../assets/images/banner-pattern.svg"
import chumzLogo from "../../assets/images/chumzlogo.png"

import accessibleIcon from "../../assets/icons/accessible.png"
import adviceIcon from "../../assets/icons/advice.png"
import consistentIcon from "../../assets/icons/consistent.png"
import mobileIcon from "../../assets/icons/mobile.png"

import anniversaryImage from "../../assets/images/categories/anniversary.png"
import cookerImage from "../../assets/images/categories/cooker.png"
import graduationImage from "../../assets/images/categories/graduation.png"
import rainydayImage from "../../assets/images/categories/rainyday.png"
import tripImage from "../../assets/images/categories/trip.png"
import gymImage from "../../assets/images/categories/gym.png"
import healthcareImage from "../../assets/images/categories/healthcare.png"
import speakersImage from "../../assets/images/categories/speakers.png"

import styled from "styled-components"

const HomeContainer = styled.section``
const HeaderSection = styled.section``
const BannerSection = styled.section`
	background-image: url(${bannerBackground});
	background-size: cover;
	background-position-x: left;
	color: #121212;
`

const ChumzName = styled.h1`
	color: #3d3d3d;
	font-weight: 900;
`
const ValueProposition = styled.h1`
	font-size: 4em;
	font-weight: 900;
	color: #cc3300;
`

const FeaturesSection = styled.section`
	background-color: transparent;
`

const FeaturesHeaderText = styled.h1`
	padding-top: 10px;
	padding-bottom: 20px;
`

const FeatureDescription = styled.p`
	color: #3d3d3d;
`

const CTAContainer = styled.div`
	padding: 50px 20px;
	display: flex;
	flex-direction: row;
	justify-content: space-around;
	align-items: center;
	background-color: #000033;
	color: white;
`

const Banner = ({}) => {
	const Wrapper = styled.section`
		padding: 1rem;
		@media (min-width: 576px) {
		}

		@media (min-width: 768px) {
			padding: 2rem;
		}

		@media (min-width: 992px) {
		}

		@media (min-width: 1200px) {
			padding: 3rem;
		}

		@media (min-width: 1824px) {
		}
	`

	const Content = styled.div`
		background-image: url(${bannerBackground});
		background-size: cover;
		background-position: center;
		border-radius: 1rem;
		background-color: #060039;
		padding: 5rem 2rem 0rem 2rem;
		-webkit-box-shadow: 0px 0px 5px 0px rgba(112, 112, 112, 1);
		-moz-box-shadow: 0px 0px 5px 0px rgba(112, 112, 112, 1);
		box-shadow: 0px 0px 5px 0px rgba(112, 112, 112, 1);
	`

	const CTA = styled.div`
		height: 100%;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		tex-align: center;
		@media (min-width: 576px) {
		}

		@media (min-width: 768px) {
			padding-top: 2rem;
			padding-left: 2rem;
			justify-content: flex-start;
			align-items: flex-start;
			tex-align: left;
		}
		
		@media (min-width: 992px) {
			padding-top: 3rem;
			padding-left: 3rem;
		}
		
		@media (min-width: 1200px) {
			padding-top: 4rem;
			padding-left: 4rem;
		}

		@media (min-width: 1824px) {
		}
	`

	const Title = styled.h1`
		color: #fff;
		@media (min-width: 576px) {
		}
	`
	const Description = styled.h3`
		color: #fff;
		font-size: 1rem;
		text-align: center @media (min-width: 576px) {
			font-size: 2rem;
		}

		@media (min-width: 768px) {
			text-align: left;
		}

		@media (min-width: 992px) {
			font-size: 3rem;
		}

		@media (min-width: 1200px) {
		}

		@media (min-width: 1824px) {
		}
	`
	const BannerImage = styled.img`
		max-height: 450px;
		@media (min-width: 576px) {
		}

		@media (min-width: 768px) {
		}

		@media (min-width: 992px) {
		}

		@media (min-width: 1200px) {
			max-height: 550px;
		}

		@media (min-width: 1824px) {
		}
	`

	return (
		<Wrapper>
			<Content>
				<div className="container">
					<div className="row">
						<div className="col-12  col-sm-6 align-items-center">
							<CTA>
								<Title>CHUMZ</Title>
								<Description>Building a saving culture.</Description>
								<a
									href="https://play.google.com/store/app/details?id=com.chumz.app"
									className=""
								>
									<img alt="image" height="50" src={googlePlayIcon} />
								</a>
							</CTA>
						</div>
						<div className="col-12 col-sm-6">
							<BannerImage
								alt="image"
								className="img-fluid"
								height={60}
								src={phonebanner}
							/>
						</div>
					</div>
				</div>
			</Content>
		</Wrapper>
	)
}

const Home = () => {
	return (
		<HomeContainer>

			<Banner />

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
	)
}

export default Home
