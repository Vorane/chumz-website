import React from 'react'

import { Helmet } from 'react-helmet'
import '../../pages/App.css'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import styled from 'styled-components'
import { withPrefix } from 'gatsby'

const Fill = styled.div`
	position: absolute;
	left: 0;
	right: 0;
	top: 0;
	bottom: 0;
`

const Content = styled(Fill)`
	text-align: center;
	padding-top: 6rem;

	@media (min-width: 576px) {
	}

	@media (min-width: 768px) {
		padding-top: 5rem;
	}

	@media (min-width: 992px) {
	}

	@media (min-width: 1200px) {
		padding-top: 4rem;
	}

	@media (min-width: 1824px) {
	}
`
export default function BodyLayout({ children }) {
	return (
		<>
			<Helmet>
				<link
					rel='stylesheet'
					href='https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css'
					integrity='sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO'
					crossorigin='anonymous'
				/>
				<link
					rel='stylesheet'
					href='https://use.fontawesome.com/releases/v5.3.1/css/all.css'
				/>
				<link
					type='text/css'
					rel='stylesheet'
					href='https://cdnjs.cloudflare.com/ajax/libs/froala-design-blocks/2.0.0/css/froala_blocks.min.css'
				/>
				<link
					type='text/css'
					rel='stylesheet'
					href={withPrefix('../../pages/App.css')}
				/>
			</Helmet>
			<body>
				<Header />
				<Content>
					{children}
					<Footer />
				</Content>
			</body>
		</>
	)
}
