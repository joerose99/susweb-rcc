import React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';

const StickyHeader = ({ logoSrc, logoAlt = 'Hotel logo' }) => {
	return (
		<Box
			component='header'
			sx={{
				position: 'sticky',
				top: 0,
				zIndex: 1200,
				backgroundColor: 'var(--bg-base, #FAFAF8)',
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
						{ label: 'Events', href: '#events' },
						{ label: 'Initiatives', href: '#initiatives' },
						{ label: 'Methodology', href: '#methodology' },
					].map((item) => (
						<Box
							key={item.href}
							component='a'
							href={item.href}
							className='lux-link'
							sx={{
								fontSize: '12px',
								letterSpacing: '0.08em',
								textTransform: 'uppercase',
								fontWeight: 600,
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
						variant='contained'
						sx={{
							px: 2.2,
							py: 0.75,
							fontSize: '0.72rem',
							color: '#FFFFFF',
							backgroundColor: '#22221F',
							'&:hover': { backgroundColor: '#1A1A18', boxShadow: 'none' },
						}}>
						Book a Room
					</Button>
					<Button
						component='a'
						href='#'
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
