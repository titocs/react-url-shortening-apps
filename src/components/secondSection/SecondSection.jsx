import React from "react";
import styled from "styled-components";
import BrandFeature from "./BrandFeature";
import BrandRecognitionImage from '../../icon/icon-brand-recognition.svg';
import DetailedRecordImage from '../../icon/icon-detailed-records.svg';
import FullyCustomizeImage from '../../icon/icon-fully-customizable.svg';

const StyledSecondSection = styled.section`
	padding-top: 3rem;
	padding-bottom: 3rem;
	background-color: hsl(0, 0%, 95%);

	@media (min-width: 1280px) {
		padding-top: 4rem;
		padding-bottom: 4rem;
	}
`;

const SecondSection = () => {
	return(
		<StyledSecondSection>
			<div className='sec-section-title'>
				<h1>Advanced Statistics</h1>
				<p>Track how your links are performing across the web with our advanced statistics dashboard.</p>
			</div>
			<div className='brand-section'>
				<div className='vertical-line'></div>
				<BrandFeature
					id="brand-recognition-feature"
					image={BrandRecognitionImage}
					title="Brand Recognition"
					description="Boost your brand recognition with each click. Generic links dont mean a thing. Branded links help instil confidence in your content."></BrandFeature>
				<BrandFeature
					id="detailed-records-feature"
					image={DetailedRecordImage}
					title="Detailed Records"
					description="Gain insights into who is clicking your links. Knowing when and where people engage with your content helps inform better decisions."></BrandFeature>
				<BrandFeature
					id="fully-customizable-feature"
					image={FullyCustomizeImage}
					title="Fully Customizable"
					description="Improve brand awareness and content discoverability through customizable links, supercharging audience engagement."></BrandFeature>
			</div>
		</StyledSecondSection>
	);
}

export default SecondSection;