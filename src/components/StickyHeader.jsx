import React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import theMavenWordmarkHeader from '../assets/the-maven-wordmark-header.png';
import { MAVEN_EVENTS_INQUIRY_URL, MAVEN_RESERVATIONS_URL } from '../constants/mavenExternalLinks';

const MAVEN_BLUE = '#394F71';
const MAVEN_TAN = '#AF986E';
const MAVEN_DARK = '#2B2320';
const HEADER_BG = '#FFFCF9';
const FONT_CONDENSED = '"Roboto Condensed", "Helvetica Neue", Arial, sans-serif';

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
				backgroundColor: HEADER_BG,
				borderBottom: `1px solid rgba(57, 79, 113, 0.09)`,
				backdropFilter: 'blur(10px)',
			}}>
			<Box
				sx={{
					maxWidth: 1320,
					mx: 'auto',
					px: { xs: 2, sm: 4 },
					height: { xs: 72, md: 80 },
					display: 'grid',
					gridTemplateColumns: { xs: 'auto 1fr', md: 'auto 1fr auto' },
					alignItems: 'center',
					gap: { xs: 1.5, md: 2.5 },
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
						component='img'
						src={logoSrc}
						alt={logoAlt}
						sx={{
							height: { xs: 30, md: 36 },
							width: 'auto',
							maxWidth: { xs: 200, sm: 240, md: 280 },
							display: 'block',
							objectFit: 'contain',
							objectPosition: 'left center',
						}}
					/>
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
						{ label: 'Community', href: '#community' },
						{ label: 'Initiatives', href: '#initiatives' },
						{ label: 'Methodology', href: '#methodology' },
					].map((item) => (
						<Box
							key={item.href}
							component='a'
							href={item.href}
							onClick={(event) => handleAnchorClick(event, item.href)}
							sx={{
								fontFamily: FONT_CONDENSED,
								fontSize: '11.5px',
								letterSpacing: '0.14em',
								textTransform: 'uppercase',
								fontWeight: 500,
								color: MAVEN_DARK,
								textDecoration: 'none',
								whiteSpace: 'nowrap',
								paddingY: '6px',
								paddingX: '2px',
								borderBottom: '2px solid transparent',
								transition: 'color 180ms ease, border-color 180ms ease',
								'&:hover': {
									color: MAVEN_BLUE,
									borderBottomColor: 'rgba(175, 152, 110, 0.45)',
								},
								'&:focus-visible': {
									color: MAVEN_BLUE,
									outline: `2px solid ${MAVEN_TAN}`,
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
							px: { xs: 1.75, sm: 2.2 },
							py: 0.7,
							fontFamily: FONT_CONDENSED,
							fontSize: '0.7rem',
							fontWeight: 600,
							letterSpacing: '0.1em',
							textTransform: 'uppercase',
							color: '#FFFFFF',
							backgroundColor: MAVEN_BLUE,
							borderRadius: '999px',
							boxShadow: 'none',
							border: `1px solid ${MAVEN_BLUE}`,
							'&:hover': {
								backgroundColor: '#2f425d',
								borderColor: '#2f425d',
								boxShadow: '0 6px 16px rgba(57, 79, 113, 0.22)',
							},
							'&:focus-visible': {
								boxShadow: `0 0 0 2px ${HEADER_BG}, 0 0 0 4px ${MAVEN_TAN}`,
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
							px: { xs: 1.75, sm: 2.2 },
							py: 0.7,
							fontFamily: FONT_CONDENSED,
							fontSize: '0.7rem',
							fontWeight: 600,
							letterSpacing: '0.1em',
							textTransform: 'uppercase',
							color: MAVEN_DARK,
							backgroundColor: 'rgba(255, 255, 255, 0.35)',
							borderRadius: '999px',
							borderColor: MAVEN_TAN,
							borderWidth: '1px',
							boxShadow: 'none',
							'&:hover': {
								backgroundColor: 'rgba(226, 205, 169, 0.22)',
								borderColor: '#9c865c',
								color: MAVEN_BLUE,
								boxShadow: 'none',
							},
							'&:focus-visible': {
								boxShadow: `0 0 0 2px ${HEADER_BG}, 0 0 0 4px ${MAVEN_TAN}`,
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
