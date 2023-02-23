import React from "react";
import styled from "styled-components";

const BrandImageWrapper = styled.div`
	width: 75px;
	height: 75px;
	background-color: red;
	padding: 13px;
	display: flex;
	align-items: center;
	border-radius: 72px;
	position: absolute;
	left: 50%;
	top: -36px;
	transform: translateX(-50%);
	background-color: hsl(255, 11%, 22%);

	@media (min-width: 1280px) {
		left: 60px;
	}
`;

const BrandFeature = (props) => {
	return(
		<div id={props.id} className="brand-feature-parent">
			<BrandImageWrapper>
				<img className="brand-image" src={props.image} alt="" />
			</BrandImageWrapper>
			<h1>{props.title}</h1>
			<p>{props.description}</p>
		</div>
	);
}

export default BrandFeature;