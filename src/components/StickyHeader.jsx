import React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import theMavenWordmarkHeader from '../assets/the-maven-wordmark-header.png';
import {
	MAVEN_EVENTS_INQUIRY_URL,
	MAVEN_HOTEL_HOME_URL,
	MAVEN_RESERVATIONS_URL,
} from '../constants/mavenExternalLinks';
import {
	BORDER_LIGHT,
	BRAND_RED,
	BRAND_RED_HOVER,
	BRAND_RED_SOFT,
	CHARCOAL,
	CHARCOAL_HOVER,
	FONT_HEADING,
	SHADOW_FOCUS,
	SHADOW_HOVER,
	WARM_WHITE,
	containerSx,
	primaryButtonSx,
	secondaryButtonSx,
} from '../theme/tokens';

const StickyHeader = ({ logoSrc = theMavenWordmarkHeader, logoAlt = 'The Maven Hotel' }) => {
	const handleAnchorClick = (event, href) => {
		if (!href || !href.startsWith('#')) {
			return;
		}

		event.preventDefault();
		if (href === '#') {
			window.scrollTo({ top: 0, behavior: 'smooth' });
			return;
		}

		const target = document.querySelector(href);
		if (target) {
			target.scrollIntoView({ behavior: 'smooth', block: 'start' });
		}
	};

	return (
		<Box
			component='header'
			sx={{
				position: 'sticky',
				top: 0,
				zIndex: 1200,
				backgroundColor: WARM_WHITE,
				borderBottom: `1px solid ${BORDER_LIGHT}`,
				backdropFilter: 'blur(10px)',
			}}>
			<Box
				sx={{
					...containerSx,
					height: { xs: 72, md: 80 },
					display: 'grid',
					gridTemplateColumns: { xs: 'auto 1fr', md: 'auto 1fr auto' },
					alignItems: 'center',
					gap: { xs: 1.5, md: 2.5 },
					py: 0,
				}}>
				<Box
					sx={{
						display: 'flex',
						alignItems: 'center',
						justifyContent: 'flex-start',
						pr: { xs: 1, md: 2 },
						py: 1,
					}}>
					<Box
						component='a'
						href={MAVEN_HOTEL_HOME_URL}
						target='_blank'
						rel='noopener noreferrer'
						aria-label={`${logoAlt} — visit hotel website`}
						sx={{
							display: 'inline-flex',
							alignItems: 'center',
							lineHeight: 0,
							textDecoration: 'none',
							color: 'inherit',
							'&:focus-visible': {
								outline: `2px solid ${BRAND_RED}`,
								outlineOffset: 4,
								borderRadius: '2px',
							},
						}}>
						<Box
							component='img'
							src={logoSrc}
							alt={logoAlt}
							sx={{
								height: { xs: 32, md: 38 },
								width: 'auto',
								maxWidth: { xs: 210, sm: 250, md: 290 },
								display: 'block',
								objectFit: 'contain',
								objectPosition: 'left center',
								backgroundColor: 'transparent',
								border: 0,
								boxShadow: 'none',
							}}
						/>
					</Box>
				</Box>

				<Box
					component='nav'
					aria-label='Page sections'
					sx={{
						display: { xs: 'none', md: 'flex' },
						justifyContent: 'center',
						alignItems: 'center',
						gap: { md: 2.75, lg: 3.25 },
						flexWrap: 'nowrap',
					}}>
					{[
						{ label: 'Impact', href: '#impact' },
						{ label: 'Reporting', href: '#live-reporting' },
						{ label: 'Events', href: '#events' },
						{ label: 'Initiatives', href: '#initiatives' },
						{ label: 'Methodology', href: '#methodology' },
					].map((item) => (
						<Box
							key={item.href}
							component='a'
							href={item.href}
							onClick={(event) => handleAnchorClick(event, item.href)}
							sx={{
								fontFamily: FONT_HEADING,
								fontSize: '11.5px',
								letterSpacing: '0.14em',
								textTransform: 'uppercase',
								fontWeight: 500,
								color: CHARCOAL,
								textDecoration: 'none',
								whiteSpace: 'nowrap',
								paddingY: '6px',
								paddingX: '2px',
								borderBottom: '2px solid transparent',
								transition: 'color 180ms ease, border-color 180ms ease',
								'&:hover': {
									color: BRAND_RED,
									borderBottomColor: 'rgba(166, 25, 46, 0.35)',
								},
								'&:focus-visible': {
									color: BRAND_RED,
									outline: `2px solid ${BRAND_RED}`,
									outlineOffset: 4,
									borderRadius: '2px',
									borderBottomColor: 'transparent',
								},
							}}>
							{item.label}
						</Box>
					))}
				</Box>

				<Box
					sx={{
						display: 'flex',
						justifyContent: 'flex-end',
						alignItems: 'center',
						gap: { xs: 0.75, sm: 1 },
						flexShrink: 0,
					}}>
					<Button
						component='a'
						href={MAVEN_RESERVATIONS_URL}
						target='_blank'
						rel='noopener noreferrer'
						variant='contained'
						disableElevation
						sx={{
							...primaryButtonSx,
							'&:hover': {
								...primaryButtonSx['&:hover'],
								backgroundColor: CHARCOAL_HOVER,
								borderColor: CHARCOAL_HOVER,
								boxShadow: SHADOW_HOVER,
							},
							'&:focus-visible': {
								boxShadow: SHADOW_FOCUS,
							},
						}}>
						Book a Room
					</Button>
					<Button
						component='a'
						href={MAVEN_EVENTS_INQUIRY_URL}
						target='_blank'
						rel='noopener noreferrer'
						variant='outlined'
						disableElevation
						sx={{
							...secondaryButtonSx,
							backgroundColor: 'rgba(255, 255, 255, 0.55)',
							'&:hover': {
								backgroundColor: BRAND_RED_SOFT,
								borderColor: BRAND_RED_HOVER,
								color: BRAND_RED,
								boxShadow: 'none',
							},
							'&:focus-visible': {
								boxShadow: SHADOW_FOCUS,
							},
						}}>
						Plan an Event
					</Button>
				</Box>
			</Box>
		</Box>
	);
};

export default StickyHeader;
