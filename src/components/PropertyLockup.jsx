import React from 'react';
import Box from '@mui/material/Box';
import bethesdaNorthMarriottLogo from '../assets/bethesda-north-marriott-logo.png';
import { BRAND_RED } from '../theme/tokens';

/**
 * Approved Denver Marriott Tech Center header lockup.
 * Logo asset is temporarily carried over from the prior property draft.
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
			aria-label='Denver Marriott Tech Center sustainability home'
			sx={{
				display: 'inline-flex',
				alignItems: 'center',
				textDecoration: 'none',
				color: 'inherit',
				minWidth: 0,
				maxWidth: '100%',
				lineHeight: 0,
				'&:focus-visible': {
					outline: `2px solid ${BRAND_RED}`,
					outlineOffset: 4,
					borderRadius: '2px',
				},
			}}>
			<Box
				component='img'
				src={bethesdaNorthMarriottLogo}
				alt='Denver Marriott Tech Center'
				sx={{
					height: { xs: 40, md: 48 },
					width: 'auto',
					maxWidth: { xs: 180, sm: 210, md: 240 },
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
