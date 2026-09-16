import React from 'react';
import Box from '@mui/material/Box';
import ritzCarltonPentagonCityLogo from '../assets/ritz-carlton-pentagon-city-logo.png';
import { CORAL_LINK } from '../theme/tokens';

/**
 * The Ritz-Carlton, Pentagon City header lockup.
 * White mark on transparent ground, sized for the black sticky header.
 */
const PropertyLockup = ({ onNavigateHome }) => {
	const handleClick = (event) => {
		event.preventDefault();
		if (typeof onNavigateHome === 'function') {
			onNavigateHome();
			return;
		}
		window.scrollTo({ top: 0, behavior: 'smooth' });
	};

	return (
		<Box
			component='a'
			href='#'
			onClick={handleClick}
			aria-label='The Ritz-Carlton, Pentagon City sustainability home'
			sx={{
				display: 'inline-flex',
				alignItems: 'center',
				textDecoration: 'none',
				color: 'inherit',
				minWidth: 0,
				maxWidth: '100%',
				lineHeight: 0,
				'&:focus-visible': {
					outline: `2px solid ${CORAL_LINK}`,
					outlineOffset: 4,
					borderRadius: '0px',
				},
			}}>
			<Box
				component='img'
				src={ritzCarltonPentagonCityLogo}
				alt='The Ritz-Carlton, Pentagon City logo with lion-and-crown crest above the hotel name.'
				sx={{
					height: { xs: 52, md: 64 },
					width: 'auto',
					maxWidth: { xs: 200, sm: 240, md: 280 },
					display: 'block',
					objectFit: 'contain',
					objectPosition: 'left center',
					backgroundColor: 'transparent',
					flexShrink: 0,
				}}
			/>
		</Box>
	);
};

export default PropertyLockup;
