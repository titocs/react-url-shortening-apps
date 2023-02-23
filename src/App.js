import './App.css';
import React, { Component, useState }  from 'react';
import styled from 'styled-components';
import './styles/style.css'
import './styles/responsive.css'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Footer from './components/Footer';
import BoostBg from './icon/bg-boost-mobile.svg';
import BoostBgDesktop from './icon/bg-boost-desktop.svg'
import MobileNavigation from './components/MobileNavigation';
import FirstSection from './components/firstSection/FirstSection';
import Shortener from './components/Shortener';
import SecondSection from './components/secondSection/SecondSection';

const Container = styled.div`
	padding-top: 1rem;
	position: relative;
`;

const GetStartedBtn = styled.button`
	background-color: hsl(180, 66%, 49%);
	border: none;
	padding: 15px 50px;
	color: white;
	border-radius: 27px;
	font-weight: bold;
	font-size: 17px;
`;

const BannerSection = styled.div`
	background-image: url(${BoostBg});
	background-color: hsl(257,27%,26%);
	background-repeat: no-repeat;
	background-size: cover;
	color: white;
	height: 241px;
	background-position: center center;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;

	@media (min-width: 1024px){
		background-image: url(${BoostBgDesktop});
	}
`;

const App = () => {
	const [displayNav, setDisplayNav] = useState(false);
	const toggleDisplay = () => {
		setDisplayNav(!displayNav);
	};

	return (
    <div className="App">
      <Container>
				<MobileNavigation show={displayNav}></MobileNavigation>
				<FirstSection toggleShow={toggleDisplay}></FirstSection>
				<Shortener></Shortener>
				<SecondSection></SecondSection>
			</Container>
			<BannerSection>
				<div className='boost'>Boost your links today</div>
				<GetStartedBtn id='footer-started-btn'>Get Started</GetStartedBtn>
			</BannerSection>
			<Footer></Footer>
    </div>
  );
}

export default App;
