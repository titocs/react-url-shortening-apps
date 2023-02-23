import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import styled from "styled-components";

const StyledMobileNavigation = styled.div`
	width: 89%;
	left: 50%;
	transform: translateX(-50%);
	position: absolute;
	background-color: hsl(257,27%,26%);
	border-radius: 10px;
	padding: 2.5rem 1rem;
	top: 6rem;

	@media (min-width: 768px) {
		display: none !important;
	}
`;

const LoginButton = styled.div`
	color: white;
	margin-top: 1.5rem;
	margin-bottom: 1.5rem;
	font-size: 17px;
	font-weight: bold;
`;

const SignupButton = styled.div`
	background-color: hsl(180,66%,49%);
	padding: 13px 50px;
	text-align: center;
	color: white;
	font-weight: bold;
	border-radius: 54px;
`;

const MobileNavigation = (props) => {
	return(
		<StyledMobileNavigation style={{ display: props.show? 'block' : 'none' }}>
			<Router>
				<nav>
					<ul className="list-navigation">
						<li><Link to="">Features</Link></li>
						<li><Link to="">Pricing</Link></li>
						<li><Link to="">Resources</Link></li>
					</ul>
				</nav>
				<div>
					<Link to="">
						<LoginButton>Login</LoginButton>
					</Link>
					<Link to="">
						<SignupButton>Signup</SignupButton>
					</Link>
				</div>
			</Router>
		</StyledMobileNavigation>
	);
}

export default MobileNavigation;