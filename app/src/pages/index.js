import React from 'react'
import styled from 'styled-components'
import phonebanner from '../images/phonebanner.png'

import googlePlayIcon from '../images/googleplay.png'
import section2Image from '../images/section2image.png'

// import trackingImage from "../images/showcase/tracking.png"
// import presetsImage from "../images/showcase/presets.png"
// import leaderboardImage from "../images/showcase/leaderboard.png"
import bannerBackground from '../images/banner-pattern.svg'
import chamaImage from '../images/chama.png'
import groupChatImage from '../images/chama/groupchat.png'
import transactionHistoryImage from '../images/chama/transactionhistory.png'
import authorizationImage from '../images/chama/authorization.png'
import competitionImage from '../images/competition.png'

import testimonialImage1 from '../images/testimonials/testimonial-1.png'
import testimonialImage2 from '../images/testimonials/testimonial-2.png'
import testimonialImage3 from '../images/testimonials/testimonial-3.png'

import awardIcon from '../icons/award.svg'
import bellIcon from '../icons/bell.svg'
import calendarIcon from '../icons/calendar.svg'
import usersIcon from '../icons/users.svg'
import crosshairIcon from '../icons/crosshair.svg'
import barchartIcon from '../icons/barchart.svg'

import businessImage from '../images/categories/business.jpg'
import emergencyImage from '../images/categories/emergency.jpg'
import graduationImage from '../images/categories/graduation.jpg'
import headphonesImage from '../images/categories/headphones.jpg'
import landImage from '../images/categories/land.jpg'
import otherImage from '../images/categories/other.jpg'
import rentImage from '../images/categories/rent.jpg'
import sneakersImage from '../images/categories/sneakers.jpg'
import calendarImage from '../images/categories/calendar.jpg'
import Layout from '../components/Layout/layout'

import FeatureItem from '../components/FeatureItem'

const HomeContainer = styled.section``

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
				<div className='container'>
					<div className='row'>
						<div className='col-12  col-sm-6 align-items-center'>
							<CTA>
								<Title>CHUMZ</Title>
								<Description>
									Building a saving culture.
								</Description>
								<a
									href='https://play.google.com/store/apps/details?id=com.chumz.app'
									className=''>
									<img
										alt='play store'
										height='50'
										src={googlePlayIcon}
									/>
								</a>
							</CTA>
						</div>
						<div className='col-12 col-sm-6'>
							<BannerImage
								alt='image'
								className='img-fluid'
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
		<Wrapper className=''>
			<div className='container-fluid '>
				<div className='row align-items-center text-center'>
					<div className='col-12 col-sm-5 d-block d-sm-none'>
						<img
							alt='saving made easy'
							className='img-fluid'
							src={section2Image}
						/>
					</div>
					<div className='col-12 col-sm-7'>
						<Title>Saving made easy</Title>
						<Description className='lead'>
							Achieve your savings goals today!
						</Description>
						<Description className='lead'>
							stay on track by sending your reminders.
						</Description>
						<Description className='lead'>
							Set your goals and Chumz will help you
						</Description>
						<Description className='mt-4'>
							<a
								href='https://play.google.com/store/apps/details?id=com.chumz.app'
								className='btn btn-secondary btn-large'>
								<h2>Start saving</h2>
							</a>
						</Description>
					</div>

					<div className='col-12 col-sm-5 d-none d-sm-block'>
						<img
							alt='features'
							className='img-fluid'
							src={section2Image}
						/>
					</div>
				</div>
			</div>
		</Wrapper>
	)
}
const Section3 = () => {
	return (
		<section>
			<div className='container-fluid'>
				<div className='row'>
					{[
						{
							title: 'Goals',
							icon: crosshairIcon,
							description:
								'Create, track and achieve all your savings goals.',
						},
						{
							title: 'Reminders',
							icon: bellIcon,
							description:
								"Don't lose track of your savings. Choose to get reminders daily, weekly or monthly.u",
						},
						{
							title: 'Reports',
							icon: barchartIcon,
							description:
								'See your saving performance over time. Get detailed well designed reports along with suggestions for improvements.',
						},
						{
							title: 'Groups',
							icon: usersIcon,
							description:
								'Create savings groups and save with your family, friends and colleagues',
						},
						{
							title: 'Tracking',
							icon: calendarIcon,
							description:
								'Set goal targets and savings plans. Chumz will help you track your goals on an easy to use interface.',
						},
						{
							title: 'Leader boards',
							icon: awardIcon,
							description:
								'See how you compare with the rest of the Chumz community in terms of the goals achieved and how much you save',
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
		padding: 1rem;
	`
	const ChamaCard = styled.div`
		background-color: ${(props) => props.color};
		border-radius: 1rem;
		height: 100%;
	`

	const ChamaTitleContainer = styled.div`
		padding: 1rem 0rem;
		min-height: 100px;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
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
		@media (min-width: 576px) {
		}

		@media (min-width: 768px) {
			height: 200px;
		}

		@media (min-width: 992px) {
			height: 300px;
		}

		@media (min-width: 1200px) {
		}

		@media (min-width: 1824px) {
		}
	`

	return (
		<section className='fdb-block'>
			<div className='container-fluid'>
				<div>
					<Title>Forget Whatsapp groups</Title>
					<Title> save on chumz </Title>
					<h3>
						Join forces with friends, family, chama, colleagues to
						save for a common goal
					</h3>
					<a
						href='https://play.google.com/store/apps/details?id=com.chumz.app'
						className='btn btn-secondary btn-large'>
						<h2>learn more</h2>
					</a>
				</div>
				<img
					alt='saving groups'
					className='img-fluid'
					src={chamaImage}
				/>
			</div>
			<OptionContainer>
				<div className='container'>
					<div className='row'>
						<ChamaCardContainer className='col-12 col-sm-4'>
							<ChamaCard color={'#B3E5FC'}>
								<ChamaTitleContainer>
									<ChamaTitle color={'#03A9F4'}>
										{' '}
										Group chat
									</ChamaTitle>
								</ChamaTitleContainer>
								<ChamaImageContainer>
									<ChamaImage
										className='img-fluid'
										src={groupChatImage}
									/>
								</ChamaImageContainer>
							</ChamaCard>
						</ChamaCardContainer>
						<ChamaCardContainer className='col-12 col-sm-4'>
							<ChamaCard color={'#FFE0B2'}>
								<ChamaTitleContainer>
									<ChamaTitle color={'#FF9800'}>
										Withdrawal approval
									</ChamaTitle>
								</ChamaTitleContainer>
								<ChamaImageContainer>
									<ChamaImage
										className='img-fluid'
										src={authorizationImage}
									/>
								</ChamaImageContainer>
							</ChamaCard>
						</ChamaCardContainer>
						<ChamaCardContainer className='col-12 col-sm-4'>
							<ChamaCard color={'#B2DFDB'}>
								<ChamaTitleContainer>
									<ChamaTitle color={'#009688'}>
										Transaction history
									</ChamaTitle>
								</ChamaTitleContainer>
								<ChamaImageContainer>
									<ChamaImage
										className='img-fluid'
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
		<section className='fdb-block'>
			<div className='container-fluid'>
				<TitleContainer>
					<Title>Test your grit in our savings leader board</Title>
					<Description>
						Fancy yourself competitive? Compete with other players
						and stand to win prizes
					</Description>
				</TitleContainer>
				<CompetitionImage
					className='img-fluid'
					src={competitionImage}
				/>
			</div>
		</section>
	)
}

const SavingCategoriesSection = () => {
	const CategoryCard = styled.div`
		margin-top: 1rem;

		border-radius: 0.28571429rem;
		box-shadow: 0 1px 3px 0 #d4d4d5, 0 0 0 1px #d4d4d5;
	`

	const CategoryImageContainer = styled.div`
		@media (min-width: 576px) {
		}

		@media (min-width: 768px) {
			text-align: right;
			padding: 0px;
		}

		@media (min-width: 992px) {
		}

		@media (min-width: 1200px) {
		}

		@media (min-width: 1824px) {
		}
	`
	const CategoryDescriptionContainer = styled.div`
		padding: 1rem 2rem;
	`
	const CategoryImage = styled.div`
		width: 100%;
		height: 200px;
		background-color: red;
		background-image: url('${(props) => props.image}');
		background-size: cover;
		background-repeat: no-repeat;
	`
	const CategoryTitle = styled.h2`
		text-align: left;
		margin: 0;
	`
	const CategoryField = styled.div`
		text-align: left;
	`
	const CategoryValue = styled.p`
		text-align: left;
		margin: 0;
	`
	const CategoryTitleContainer = styled.div`
		min-height: 100px;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: flex-start;
	`
	return (
		<section class='fdb-block'>
			<div class='container-fluid'>
				<div class='row text-center'>
					<div class='col-12'>
						<h1>Curated saving plans</h1>
						<p class='lead' />
					</div>
				</div>

				<div className='container-fluid'>
					<div className='row'>
						{[
							{
								goals: 25,
								amount: 11400,
								name: 'Tech Accessories',
								image: headphonesImage,
							},
							{
								goals: 14,
								amount: 2926,
								name: '52 Week Challenge',
								image: calendarImage,
							},
							{
								goals: 9,
								amount: 11900,
								name: 'Emergency',
								image: emergencyImage,
							},
							{
								goals: 11,
								amount: 10370,
								name: 'Land',
								image: landImage,
							},
							{
								goals: 8,
								amount: 4450,
								name: 'Sports Shoes',
								image: sneakersImage,
							},
							{
								goals: 11,
								amount: 2028,
								name: 'Rent',
								image: rentImage,
							},
							{
								goals: 22,
								amount: 9600,
								name: 'Education',
								image: graduationImage,
							},

							{
								goals: 4,
								amount: 14048,
								name: 'Business',
								image: businessImage,
							},
							{
								goals: 37,
								amount: 73254,
								name: 'General',
								image: otherImage,
							},
						]
							.sort((a, b) => b.amount - a.amount)
							.map((item, index) => (
								<div
									className='col-12 col-sm-12 col-md-4 col-lg-3'
									key={index}>
									<CategoryCard className='container-fluid'>
										<div className='row'>
											<CategoryImage
												image={item.image}
												src={item.image}
											/>
											{/* <CategoryImageContainer className='col-12 col-sm-4 col-md-5 container'>
											</CategoryImageContainer> */}
											<CategoryDescriptionContainer className='col-12 col-sm-8 col-md-7'>
												<CategoryTitleContainer>
													<CategoryTitle>
														{item.name}
													</CategoryTitle>
												</CategoryTitleContainer>
												<CategoryField>
													<CategoryValue>
														{item.goals} goals
													</CategoryValue>
												</CategoryField>
												<CategoryField>
													<CategoryValue>
														KES {item.amount} saved
													</CategoryValue>
												</CategoryField>
											</CategoryDescriptionContainer>
										</div>
									</CategoryCard>
								</div>
							))}
					</div>
				</div>
			</div>
		</section>
	)
}

const TestimonialSection = ({ testimonials }) => {
	const QuoteImageContainer = styled.div`
		display: flex;
		flex-direction: row;
		justify-content: flex-end;
	`

	const QuoteImage = styled.img``

	const TestimonialCard = styled.div`
		margin-top: 1rem;
		background-color: #009d86;
		padding: 1rem;
		margin-top: 1rem;
		height: 100%;
	`
	const TestimonialTitle = styled.h2`
		text-align: left;
		margin: 0;
		color: #fff;
		font-family: Cera-Bold;
	`
	const TestimonialQuote = styled.h4`
		color: #fff;
		text-align: left;
		margin: 0;
		font-weight: bold;
	`
	return (
		<section class='fdb-block'>
			<div class='container'>
				<div class='row text-center'>
					<div class='col-12'>
						<h1>Testimonial</h1>
						<p class='lead'>Don't just take our word for it</p>
					</div>
				</div>

				<div className='container'>
					<div className='row'>
						{testimonials.map((item, index) => (
							<div className='col-12 col-sm-6 col-md-4'>
								<TestimonialCard>
									<QuoteImageContainer>
										<QuoteImage
											src={item.image}
											className='img img-fluid'
										/>
									</QuoteImageContainer>
									<div>
										<TestimonialTitle>
											{item.name}
										</TestimonialTitle>
										<TestimonialQuote>
											{item.comment}
										</TestimonialQuote>
									</div>
								</TestimonialCard>
							</div>
						))}
					</div>
				</div>
			</div>
		</section>
	)
}

const Home = () => {
	return (
		<Layout>
			<HomeContainer>
				<Banner />

				<Section2 />

				<Section3 />

				<ChamaSection />

				<CompetitionSection />

				<SavingCategoriesSection />

				<TestimonialSection
					testimonials={[
						{
							image: testimonialImage1,
							name: 'Jack kinga',
							comment:
								'Chumz has helped me think differently about saving due to ease of use',
						},
						{
							image: testimonialImage2,
							name: 'Kelvin Kamau',
							comment:
								'Chumz has enabled me get to several of my  financial goals',
						},
						{
							image: testimonialImage3,
							name: 'Emily Wakarima',
							comment:
								"The app is great! I'm now able to save for different events in my personal life, and also with my girlfriends, right from my phone!!!",
						},
					]}
				/>
				<section className='fdb-block'>
					<CTAContainer className='container'>
						<div className='row justify-content-center align-items-center'>
							<div className='col-xs-6 col-sm-4'>
								<h2>Ready to get started?</h2>
							</div>
							<div className='col-xs-6 col-sm-4'>
								<p>
									Start saving today and be on track to your
									dream of financial freedom
								</p>
							</div>
							<div className='col-xs-12 col-sm-4'>
								<p className='mt-4'>
									<a
										href='https://play.google.com/store/apps/details?id=com.chumz.app'
										className='btn btn-secondary btn-large'>
										<h2>Start saving</h2>
									</a>
								</p>
							</div>
						</div>
					</CTAContainer>
				</section>
			</HomeContainer>
		</Layout>
	)
}

export default Home
