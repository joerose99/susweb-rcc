import React from 'react';
import Box from '@mui/material/Box';
import denverMarriottTechCenterLogo from '../assets/denver-marriott-tech-center-logo.png';
import { BRAND_RED } from '../theme/tokens';

/**
 * Approved Denver Marriott Tech Center header lockup.
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
				src={denverMarriottTechCenterLogo}
				alt='Denver Marriott Tech Center'
				sx={{
					height: { xs: 66, md: 78 },
					width: 'auto',
					maxWidth: { xs: 300, sm: 345, md: 390 },
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
