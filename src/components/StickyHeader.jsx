import React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';

const ACCENT_GREEN = '#8D9A73';

const StickyHeader = ({ logoSrc, logoAlt = 'Hotel logo' }) => {
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
				backgroundColor: '#DFDFDF',
				borderBottom: '1px solid rgba(26,26,24,0.08)',
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
					component='img'
					src={logoSrc}
					alt={logoAlt}
					sx={{
						height: { xs: 34, md: 40 },
						width: 'auto',
						maxWidth: '100%',
						display: 'block',
					}}
				/>

				<Box
					component='nav'
					aria-label='Page sections'
					sx={{
						display: { xs: 'none', md: 'flex' },
						justifyContent: 'center',
						gap: 2.25,
					}}>
					{[
						{ label: 'Impact', href: '#impact' },
						{ label: 'Reporting', href: '#live-impact-reporting' },
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
							className='lux-link'
							sx={{
								fontSize: '12px',
								letterSpacing: '0.08em',
								textTransform: 'uppercase',
								fontWeight: 600,
								'&:hover': {
									color: ACCENT_GREEN,
									fontWeight: 700,
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
						gap: 1,
					}}>
					<Button
						component='a'
						href='#'
						onClick={(event) => handleAnchorClick(event, '#')}
						variant='contained'
						sx={{
							px: 2.2,
							py: 0.75,
							fontSize: '0.72rem',
							color: '#FFFFFF',
							backgroundColor: '#22221F',
							'&:hover': {
								backgroundColor: '#1A1A18',
								boxShadow: 'none',
								color: ACCENT_GREEN,
								fontWeight: 700,
							},
						}}>
						Book a Room
					</Button>
					<Button
						component='a'
						href='#events'
						onClick={(event) => handleAnchorClick(event, '#events')}
						variant='outlined'
						sx={{
							px: 2.2,
							py: 0.75,
							fontSize: '0.72rem',
							color: '#1A1A18',
							borderColor: 'rgba(26,26,24,0.34)',
							'&:hover': {
								borderColor: '#1A1A18',
								backgroundColor: 'rgba(245,245,243,0.7)',
								color: ACCENT_GREEN,
								fontWeight: 700,
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
