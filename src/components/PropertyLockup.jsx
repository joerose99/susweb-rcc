import React from 'react';
import Box from '@mui/material/Box';
import perryLaneHotelLogo from '../assets/perry-lane-hotel-logo.png';
import { CORAL_LINK, SURFACE_WHITE } from '../theme/tokens';

/**
 * Perry Lane Hotel header lockup.
 * White logo plate keeps the mark legible on the Dark Slate header.
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
			aria-label='Perry Lane Hotel sustainability home'
			sx={{
				display: 'inline-flex',
				alignItems: 'center',
				textDecoration: 'none',
				color: 'inherit',
				minWidth: 0,
				maxWidth: '100%',
				lineHeight: 0,
				backgroundColor: SURFACE_WHITE,
				borderRadius: '2px',
				px: { xs: 1, md: 1.25 },
				py: { xs: 0.5, md: 0.65 },
				'&:focus-visible': {
					outline: `2px solid ${CORAL_LINK}`,
					outlineOffset: 4,
					borderRadius: '2px',
				},
			}}>
			<Box
				component='img'
				src={perryLaneHotelLogo}
				alt='Perry Lane Hotel logo featuring a geometric square icon above the hotel name.'
				sx={{
					height: { xs: 44, md: 52 },
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
