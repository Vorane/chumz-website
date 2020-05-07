import React from "react"
import styled from "styled-components"
import phonebanner from "../../assets/images/phonebanner.png"

import googlePlayIcon from "../../assets/images/googleplay.png"
import section2Image from "../../assets/images/secion2image.png"

import trackingImage from "../../assets/images/showcase/tracking.png"
import presetsImage from "../../assets/images/showcase/presets.png"
import leaderboardImage from "../../assets/images/showcase/leaderboard.png"
import bannerBackground from "../../assets/images/banner-pattern.svg"
import chamaImage from "../../assets/images/chama.png"
import groupChatImage from "../../assets/images/chama/groupchat.png"
import transactionHistoryImage from "../../assets/images/chama/transactionhistory.png"
import authorizationImage from "../../assets/images/chama/authorization.png"
import competitionImage from "../../assets/images/competition.png"

import awardIcon from "../../assets/icons/award.svg"
import bellIcon from "../../assets/icons/bell.svg"
import calendarIcon from "../../assets/icons/calendar.svg"
import usersIcon from "../../assets/icons/users.svg"
import crosshairIcon from "../../assets/icons/crosshair.svg"
import barchartIcon from "../../assets/icons/barchart.svg"

import anniversaryImage from "../../assets/images/categories/anniversary.png"
import cookerImage from "../../assets/images/categories/cooker.png"
import graduationImage from "../../assets/images/categories/graduation.png"
import rainydayImage from "../../assets/images/categories/rainyday.png"
import tripImage from "../../assets/images/categories/trip.png"
import gymImage from "../../assets/images/categories/gym.png"
import healthcareImage from "../../assets/images/categories/healthcare.png"
import speakersImage from "../../assets/images/categories/speakers.png"

import FeatureItem from "./Components/FeatureItem"

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

const Section2 = () => {
	const Wrapper = styled.section`
		padding: 2rem;
		@media (min-width: 576px) {
		}

		@media (min-width: 768px) {
			padding: 2rem;
		}

		@media (min-width: 992px) {
		}

		@media (min-width: 1200px) {
			padding: 9rem 5rem;
		}

		@media (min-width: 1824px) {
		}
	`
	const Title = styled.h1`
		color: #060039;
		@media (min-width: 576px) {
		}

		@media (min-width: 768px) {
		}

		@media (min-width: 992px) {
		}

		@media (min-width: 1200px) {
		}

		@media (min-width: 1824px) {
		}
	`
	const Description = styled.p`
		@media (min-width: 576px) {
		}

		@media (min-width: 768px) {
		}

		@media (min-width: 992px) {
		}

		@media (min-width: 1200px) {
		}

		@media (min-width: 1824px) {
		}
	`
	return (
		<Wrapper className="">
			<div className="container-fluid ">
				<div className="row align-items-center text-center">
					<div className="col-12 col-sm-5 d-block d-sm-none">
						<img alt="image" className="img-fluid" src={section2Image} />
					</div>

					<div className="col-12 col-sm-7">
						<Title>Saving made easy</Title>
						<Description className="lead">
							Achieve the goals, milestones you set out for yourself today.
						</Description>
						<Description className="lead">
							It all starts by setting an easy goal. It’s time to achieve the
							dream.
						</Description>
						<Description className="lead">
							Chumz gives you nudges and reminders to help you stay on track
						</Description>
						<Description className="mt-4">
							<a
								href="https://play.google.com/store/app/details?id=com.chumz.app"
								className="btn btn-secondary btn-large"
							>
								<h2>Start saving</h2>
							</a>
						</Description>
					</div>

					<div className="col-12 col-sm-5 d-none d-sm-block">
						<img alt="image" className="img-fluid" src={section2Image} />
					</div>
				</div>
			</div>
		</Wrapper>
	)
}
const Section3 = () => {
	const Item = ({ feature }) => {}

	return (
		<section>
			<div className="container-fluid">
				<div className="row">
					{[
						{
							title: "Goals",
							icon: crosshairIcon,
							description:
								"lorem ipsum dolor sit amet consectetur adipiscing elit.",
						},
						{
							title: "Reminders",
							icon: bellIcon,
							description:
								"lorem ipsum dolor sit amet consectetur adipiscing elit.",
						},
						{
							title: "Reports",
							icon: barchartIcon,
							description:
								"lorem ipsum dolor sit amet consectetur adipiscing elit.",
						},
						{
							title: "Groups",
							icon: usersIcon,
							description:
								"lorem ipsum dolor sit amet consectetur adipiscing elit.",
						},
						{
							title: "Tracking",
							icon: calendarIcon,
							description:
								"lorem ipsum dolor sit amet consectetur adipiscing elit.",
						},
						{
							title: "Leaderboards",
							icon: awardIcon,
							description:
								"lorem ipsum dolor sit amet consectetur adipiscing elit.",
						},
					].map((item, index) => (
						<FeatureItem feature={item} />
					))}
				</div>
			</div>
		</section>
	)
}

const ChamaSection = () => {
	const Title = styled.h1`
		text-align: center;
		@media (min-width: 576px) {
		}

		@media (min-width: 768px) {
		}

		@media (min-width: 992px) {
		}

		@media (min-width: 1200px) {
		}

		@media (min-width: 1824px) {
		}
	`

	const OptionContainer = styled.div`
		padding: 2rem 0rem;
		@media (min-width: 576px) {
		}

		@media (min-width: 768px) {
			padding: 4rem 0rem;
		}

		@media (min-width: 992px) {
		}

		@media (min-width: 1200px) {
			padding: 6rem 0rem;
		}

		@media (min-width: 1824px) {
		}
	`

	const ChamaCardContainer = styled.div`
		padding: 2rem;
	`
	const ChamaCard = styled.div`
		background-color: ${(props) => props.color};
		border-radius: 1rem;
	`

	const ChamaTitleContainer = styled.div`
		padding: 1rem 0rem;
	`
	const ChamaTitle = styled.h5`
		font-size: 2rem;
		color: ${(props) => props.color};
		font-family: Cera-Bold;
		@media (min-width: 576px) {
		}

		@media (min-width: 768px) {
			font-size: 2rem;
		}

		@media (min-width: 992px) {
		}

		@media (min-width: 1200px) {
			font-size: 2rem;
		}

		@media (min-width: 1824px) {
		}
	`

	const ChamaImageContainer = styled.div`
		padding: 0rem 1rem;
	`
	const ChamaImage = styled.img`
		height: 300px;
	`

	const ChamaFeaturesSection = styled.div``
	return (
		<section className="fdb-block">
			<div className="container-fluid">
				<div>
					<Title>Your chama just found a new home</Title>
					<h3>
						Join forces with friends, family, colleagures to save for a common
						goal
					</h3>
				</div>
				<img className="img-fluid" src={chamaImage} />
			</div>
			<OptionContainer>
				<div className="container-fluid">
					<div className="row">
						<ChamaCardContainer className="col-12 col-sm-4">
							<ChamaCard color={"#B3E5FC"}>
								<ChamaTitleContainer>
									<ChamaTitle color={"#03A9F4"}> Group chat</ChamaTitle>
								</ChamaTitleContainer>
								<ChamaImageContainer>
									<ChamaImage className="img-fluid" src={groupChatImage} />
								</ChamaImageContainer>
							</ChamaCard>
						</ChamaCardContainer>
						<ChamaCardContainer className="col-12 col-sm-4">
							<ChamaCard color={"#FFE0B2"}>
								<ChamaTitleContainer>
									<ChamaTitle color={"#FF9800"}>Withdrawal approval</ChamaTitle>
								</ChamaTitleContainer>
								<ChamaImageContainer>
									<ChamaImage className="img-fluid" src={authorizationImage} />
								</ChamaImageContainer>
							</ChamaCard>
						</ChamaCardContainer>
						<ChamaCardContainer className="col-12 col-sm-4">
							<ChamaCard color={"#B2DFDB"}>
								<ChamaTitleContainer>
									<ChamaTitle color={"#009688"}>Transaction history</ChamaTitle>
								</ChamaTitleContainer>
								<ChamaImageContainer>
									<ChamaImage
										className="img-fluid"
										src={transactionHistoryImage}
									/>
								</ChamaImageContainer>
							</ChamaCard>
						</ChamaCardContainer>
					</div>
				</div>
			</OptionContainer>
		</section>
	)
}
const CategoriesSection = () => {
	const Title = styled.h1`
		text-align: center;
		@media (min-width: 576px) {
		}

		@media (min-width: 768px) {
		}

		@media (min-width: 992px) {
		}

		@media (min-width: 1200px) {
		}

		@media (min-width: 1824px) {
		}
	`

	return (
		<section className="fdb-block">
			<div className="container-fluid">
				<div>
					<Title>Your chama just found a new home</Title>
					<h3>
						Join forces with friends, family, colleagures to save for a common
						goal
					</h3>
				</div>
				<img className="img-fluid" src={chamaImage} />
			</div>
		</section>
	)
}
const CompetitionSection = () => {
	const TitleContainer = styled.div`
		padding: 0rem 3rem;
	`
	const Title = styled.h1`
		text-align: center;
		@media (min-width: 576px) {
		}

		@media (min-width: 768px) {
			text-align: right;
		}

		@media (min-width: 992px) {
		}

		@media (min-width: 1200px) {
		}

		@media (min-width: 1824px) {
		}
	`

	const Description = styled.h3`
		text-align: center;
		@media (min-width: 576px) {
		}

		@media (min-width: 768px) {
			text-align: right;
		}

		@media (min-width: 992px) {
		}

		@media (min-width: 1200px) {
		}

		@media (min-width: 1824px) {
		}
	`

	const CompetitionImage = styled.img``

	return (
		<section className="fdb-block">
			<div className="container-fluid">
				<TitleContainer>
					<Title>Test your grit in our savings learderboard</Title>
					<Description>
						Fancy yourself competitive? Compete with other players and stand to
						win prizes
					</Description>
				</TitleContainer>
				<CompetitionImage className="img-fluid" src={competitionImage} />
			</div>
		</section>
	)
}

const Home = () => {
	return (
		<HomeContainer>
			<Banner />

			<Section2 />

			<Section3 />

			<ChamaSection />

			<CompetitionSection />

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
