import React, { useEffect, useState } from "react";
import styled from "styled-components";

const StyledShortener = styled.div`
	position: relative;
	top: 6rem;
	margin-right: 1.25rem;
	margin-left: 1.25rem;

	@media (min-width: 768px) {
		margin-right: 2rem;
		margin-left: 2rem;
	}

	@media (min-width: 1024px) {
		margin-right: 7rem;
		margin-left: 7rem;
	}

	@media (min-width: 1440px) {
		margin-left: 10rem;
		margin-right: 10rem;
	}
`;

const Shortener = () => {
	const [copy, setCopy] = useState(false);
	const [shortedLinks, setShortedLinks] = useState([]);
	const [loading, setLoading] = useState(false);
	const [showWarning, setShowWarning] = useState(false);
	const [urlInput, setUrlInput] = useState('');

	const handleChangeInput = (event) => {
		if(event.target.value){
			setShowWarning(false);
		}
		setUrlInput(event.target.value);
	}

	const handleSubmit = async (event) => {
		event.preventDefault();
		if(!urlInput){
			event.preventDefault();
			setShowWarning(true);
			setLoading(false);
			return;
		}
		setLoading(true);
		try {
			const response = await fetch(`https://api.shrtco.de/v2/shorten?url=${urlInput}`, {
				method: "POST"
			});
			const data = await response.json();
			setShortedLinks([...shortedLinks, data['result']]);
			setUrlInput('');
		} catch (error) {
			console.error();
		} finally {
			setLoading(false);
		}
	}

	const copyToClipboard = (text) => {
		navigator.clipboard.writeText(text)
      .then(() => {
				setCopy(true);
			})
      .catch((error) => console.error(`Error copying to clipboard: ${error}`));
	}

	return(
		<StyledShortener>
			<div className='link-form-wrapper'>
				<form onSubmit={handleSubmit}>
					<div className='input-form'>
						<input 
							id="url" 
							name="url" 
							type="text" 
							value={urlInput} 
							onChange={handleChangeInput}
							style={{ borderColor: showWarning ? 'hsl(0, 87%, 67%)' : 'transparent' }} 
							placeholder="Shorten a link here..." />
						{showWarning && <span className='warning-message'>Please add a link</span>}
					</div>
					<button 
						id='submit-btn' 
						type='submit' 
						disabled={showWarning}
						style={
							{ 
								opacity: urlInput.length === 0 ? 0.6 : 1, 
								marginBottom: showWarning ? 'auto' : '0' 
							}
						}
						>{loading? 'loading...' : 'Shorten It!'}</button>
				</form>
			</div>
			{shortedLinks.map((link, index) => (
				<div key={index} className='item-shortened'>
					<div className='real-link'>{link.original_link}</div>
					<div className='item-shortened__url'>
						<p className='item-shortened__url-link'>{link.short_link}</p>
						<button 
							type='button' 
							onClick={() => copyToClipboard(link.short_link)}
							style={{ backgroundColor: copy ? 'hsl(257, 27%, 26%)' : 'hsl(180, 66%, 49%)' }}>{copy ? 'Copied!' : 'Copy'}</button>
					</div>
				</div>
			))}
		</StyledShortener>
	);
}

export default Shortener;