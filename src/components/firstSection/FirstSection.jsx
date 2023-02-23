import React from "react";
import styled from "styled-components";
import Navbar from "./Navbar";
import Hero from '../../icon/illustration-working.svg';

const StyledFirstSection = styled.section`
	background-color: white;
`;

const JumbotronHero = styled.div`
	display: flex;
	align-items: center;
	flex-direction: column;

	@media (min-width: 768px) {
		flex-direction: row-reverse;
	}
`;

const HeroSection = styled.div`
	background-image: url(${Hero});
	width: 100%;
	height: 55vh;
	background-size: cover;
	background-position: 30px 0px;
	background-repeat: no-repeat;

	@media (min-width: 1024px) {
		height: 58vh;
		background-position: 50px 0px;
	}

	@media (min-width: 1440px) {
		width: 84%;
	}
`;

const GetStartedBtn = styled.button`
	background-color: hsl(180, 66%, 49%);
	border: none;
	padding: 15px 50px;
	color: white;
	border-radius: 27px;
	font-weight: bold;
	font-size: 17px;
	transition: background-color 0.5s;

	&:hover {
		background-color: hsl(180deg 66% 79%);
	}
`;

const FirstSection = (props) => {
	return(
		<StyledFirstSection>
			<Navbar toggleShows={props.toggleShow}></Navbar>
			<JumbotronHero>
				<HeroSection></HeroSection>
				<div className='side-jumbotron-description'>
					<h1>More than just shorter links</h1>
					<p>Build your brand's recognition and get detailed insights on how your links are performing</p>
					<GetStartedBtn>Get Started</GetStartedBtn>
				</div>
			</JumbotronHero>
		</StyledFirstSection>
	);
	
}

export default FirstSection;