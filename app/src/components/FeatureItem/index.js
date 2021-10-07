import React, { Component } from "react"
import styled from "styled-components"

const FeatureItem = styled.div`
	padding: 2em;
	border-top: 1px solid #d4d4d5;
	border-bottom: 1px solid #d4d4d5;
	background-color: ${(props) => (props.color ? props.color : "#fff")} ;
	-webkit-transition: background-color 500ms linear;
    -ms-transition: background-color 500ms linear;
    transition: background-color 500ms linear;
	
	min-height: 300px;
	display:flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;

	@media

	}

	@media (min-width: 768px) {
		border-left: 1px solid #d4d4d5;
		border-right: 1px solid #d4d4d5;
	}

	@media (min-width: 992px) {
	}

	@media (min-width: 1200px) {
	}

	@media (min-width: 1824px) {
	}
`
const FeatureIcon = styled.img`
	height: 3em;
	fill: red;
`

const Title = styled.h2`
	color: ${(props) => (props.color ? props.color : "#fff")};
	font-size: 1.5rem ;
	@media (min-width: 576px) {
	}

	@media (min-width: 768px) {
		font-size: 2rem;
	}

	@media (min-width: 992px) {
	}

	@media (min-width: 1200px) {
		font-size: 3rem;
	}

	@media (min-width: 1824px) {
	}
`
const Description = styled.p`
	color: ${(props) => (props.color ? props.color : "#fff")};
`
export default class index extends Component {
	constructor(props) {
		super(props)
		this.state = {
			hovered: false,
		}

		this.unHover = this.unHover.bind(this)
		this.hover = this.hover.bind(this)
	}

	unHover() {
		this.setState({
			...this.state,
			hovered: false,
		})
	}

	hover() {
		this.setState({
			...this.state,
			hovered: true,
		})
	}
	render() {
		let { feature } = this.props
		return (
			<FeatureItem
				className="col-12 col-sm-4 container"
				onMouseLeave={this.unHover}
				onMouseEnter={this.hover}
				color={this.state.hovered ? "#060039" : "#f5f5f5"}
			>
				<FeatureIcon
					alt="image"
					className="img-fluid"
					height="30"
					src={feature.icon}
					fill="red"
				/>
				<Title color={this.state.hovered ? "#fff" : "#3d3d3d"}>
					{feature.title}
				</Title>

				<Description color={this.state.hovered ? "#fff" : "#3d3d3d"}>
					{feature.description}
				</Description>
			</FeatureItem>
		)
	}
}
