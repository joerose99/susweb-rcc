import React from 'react';
import Box from '@mui/material/Box';
import ritzCarltonChicagoLogo from '../assets/ritz-carlton-chicago-logo.png';
import { CORAL_LINK } from '../theme/tokens';

/**
 * The Ritz-Carlton, Chicago header lockup.
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
			aria-label='The Ritz-Carlton, Chicago sustainability home'
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
				src={ritzCarltonChicagoLogo}
				alt='The Ritz-Carlton, Chicago logo with lion-and-crown crest above the hotel name.'
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
