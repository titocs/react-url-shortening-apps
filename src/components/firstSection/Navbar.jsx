import React, { useState } from "react";
import styled from "styled-components";
import logo from "../../icon/logo.svg"
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

const NavbarStyled = styled.nav`
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding: 1.25rem;

	@media (min-width: 768px) {
		padding: 1.25rem 2rem;
	}

	@media (min-width: 1024px) {
		padding: 2rem 7rem;
	}

	@media (min-width: 1440px) {
		padding: 2rem 10rem;
	}
	
`;

const LoginSection = styled.div`
	display: none;

	@media (min-width: 768px) {
		display: flex;
		align-items: center;
		gap: 20px;
	}
`;

const DesktopNavWrapper = styled.div`
	@media (min-width: 768px) {
		display: flex;
		align-items: center;
		gap: 20px;
	}
`;

const LoginButton = styled.div`
	color: hsl(257, 7%, 63%);
	font-size: 14px;
	font-weight: bold;
	display: flex;
`;

const SignupButton = styled.div`
	background-color: hsl(180,66%,49%);
	padding: 10px 20px;
	text-align: center;
	color: white;
	font-weight: bold;
	border-radius: 54px;
	transition: background-color 0.5s;
	font-size: 13px;

	&:hover {
		background-color: hsl(180deg 66% 79%);
	}
`;

const HamburgerButton = styled.button`
	font-size: 33px;
	padding: 0;
	color: gray;
	border: none;
	background-color: transparent;

	@media (min-width: 768px) {
		display: none;
	}
`;

const Navbar = (props) => {
	const onHandleNav = () => {
		props.toggleShows();
	};

	return(
		<Router>
			<NavbarStyled>
				<DesktopNavWrapper>
					<img src={logo} alt="company-logo" />
					<nav className="desktop-nav">
						<ul>
							<li><Link to=''>Features</Link></li>
							<li><Link to=''>Pricing</Link></li>
							<li><Link to=''>Resources</Link></li>
						</ul>
					</nav>
				</DesktopNavWrapper>
				<LoginSection>
					<Link>
						<LoginButton>Login</LoginButton>
					</Link>
					<Link>
						<SignupButton>Sign Up</SignupButton>
					</Link>
				</LoginSection>
				<HamburgerButton onClick={onHandleNav}>☰</HamburgerButton>
			</NavbarStyled>
		</Router>
	);
}

export default Navbar;