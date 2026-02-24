import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import poweredByBioGreen from '../../assets/PoweredByBioGreen.svg';
import biogreenHowItWorksLogo from '../../assets/biogreen-how-it-works.png';
import howItWorksFoodIcon from '../../assets/how-it-works-food.png';
import howItWorksSproutIcon from '../../assets/how-it-works-sprout.png';
import howItWorksReportIcon from '../../assets/how-it-works-report.png';

const GREEN_PRIMARY = '#7A923B';
const GREEN_BORDER = '#6b8232';
const BG_WARM = '#F5F4F1';
const TEXT_DARK = '#333144';
const BODY_GRAY = '#555';
const MUTED_GRAY = '#666';
const SECTION_PY = '72px';
const CONTENT_MAX = 1400;

const CircularFoodSystems = () => {
	return (
		<Box
			data-page='circular-food-systems'
			sx={{
				minHeight: '100vh',
				backgroundColor: BG_WARM,
				color: TEXT_DARK,
				fontFamily: '"Inter", "Helvetica", "Arial", sans-serif',
				lineHeight: 1.7,
			}}>
			{/* Hero Section */}
			<Box
				sx={{
					maxWidth: CONTENT_MAX,
					mx: 'auto',
					px: { xs: 2, sm: 4 },
					pt: '72px',
					pb: '72px',
				}}>
				<Box sx={{ textAlign: 'center' }}>
					<Typography
						sx={{
							fontFamily: '"Inter", sans-serif',
							fontSize: '1rem',
							fontWeight: 500,
							color: TEXT_DARK,
							letterSpacing: '0.08em',
							mb: 4,
						}}>
						HOTEL LOGO
					</Typography>
					<Typography
						component='h1'
						sx={{
							fontFamily: '"Playfair Display", serif',
							fontSize: { xs: '2.25rem', sm: '3rem', md: '52px' },
							fontWeight: 300,
							color: TEXT_DARK,
							lineHeight: 1.2,
							mb: 3,
						}}>
						Our Commitment to Circular Food Systems
					</Typography>
					<Typography
						sx={{
							fontFamily: '"Inter", sans-serif',
							fontSize: '20px',
							fontWeight: 400,
							color: MUTED_GRAY,
							mb: 4,
						}}>
						Farm to Table, Table to Farm
					</Typography>
					<Typography
						sx={{
							maxWidth: 700,
							mx: 'auto',
							fontSize: '17px',
							lineHeight: 1.75,
							color: BODY_GRAY,
						}}>
						Every meal and event supports on-site food waste diversion and local food growth initiatives.
					</Typography>
				</Box>

				{/* Hero Image */}
				<Box
					sx={{
						width: '100%',
						mt: '56px',
						mb: '72px',
					}}>
					<Box
						component='img'
						alt='Farm with fresh produce'
						src='https://images.unsplash.com/photo-1464226184884-fa280b87c399?w=1400&q=80'
						sx={{
							width: '100%',
							height: 'auto',
							borderRadius: '12px',
							objectFit: 'cover',
							maxHeight: 520,
							display: 'block',
							boxShadow: '0 4px 24px rgba(0,0,0,0.06)',
						}}
					/>
				</Box>

				{/* Intro paragraph */}
				<Box sx={{ textAlign: 'center', width: '100%' }}>
					<Typography
						sx={{
							fontSize: '19px',
							lineHeight: 1.75,
							color: BODY_GRAY,
						}}>
						[Hotel Name] has partnered with BioGreen360 since [Launch Date] to divert food scraps from landfills
						and support local food growth. Every event and meal turns food waste into community impact.
					</Typography>
				</Box>
			</Box>

			{/* Our Impact */}
			<Box
				sx={{
					maxWidth: CONTENT_MAX,
					mx: 'auto',
					px: { xs: 2, sm: 4 },
					pt: SECTION_PY,
					pb: SECTION_PY,
				}}>
				<Typography
					component='h2'
					sx={{
						fontFamily: '"Playfair Display", serif',
						fontSize: '30px',
						fontWeight: 400,
						color: TEXT_DARK,
						mb: 2,
					}}>
					Our Impact:
				</Typography>
				<Typography
					sx={{
						fontSize: '16px',
						lineHeight: 1.7,
						color: MUTED_GRAY,
						mb: 2,
					}}>
					Live, property-specific impact estimates based on data captured through BioGreen360's on-site systems.
				</Typography>
				<Box
					sx={{
						width: '100%',
						maxWidth: 320,
						height: '2px',
						backgroundColor: GREEN_PRIMARY,
						mb: '16px',
					}}
				/>

				<Box
					sx={{
						display: 'flex',
						flexWrap: 'wrap',
						alignItems: 'stretch',
						justifyContent: 'space-between',
						gap: 0,
						pt: 4,
					}}>
					<Box
						sx={{
							flex: '1 1 0',
							minWidth: 160,
							px: 3,
							py: 2,
							borderRight: { xs: 'none', sm: `2px solid ${GREEN_PRIMARY}` },
							textAlign: 'center',
						}}>
						<Typography sx={{ fontSize: '14px', color: MUTED_GRAY, mb: 1 }}>Diverting over</Typography>
						<Typography
							sx={{
								fontFamily: '"Playfair Display", serif',
								fontSize: { xs: '40px', sm: '52px' },
								fontWeight: 300,
								color: TEXT_DARK,
							}}>
							500 tons
						</Typography>
						<Typography sx={{ fontSize: '14px', color: MUTED_GRAY, mt: 1 }}>of leftover food</Typography>
					</Box>
					<Box
						sx={{
							flex: '1 1 0',
							minWidth: 160,
							px: 3,
							py: 2,
							borderRight: { xs: 'none', sm: `2px solid ${GREEN_PRIMARY}` },
							textAlign: 'center',
						}}>
						<Typography sx={{ fontSize: '14px', color: MUTED_GRAY, mb: 1 }}>Enough Fertilizer to support</Typography>
						<Typography
							sx={{
								fontFamily: '"Playfair Display", serif',
								fontSize: { xs: '40px', sm: '52px' },
								fontWeight: 300,
								color: TEXT_DARK,
							}}>
							3200+
						</Typography>
						<Typography sx={{ fontSize: '14px', color: MUTED_GRAY, mt: 1 }}>acres of farmland.</Typography>
					</Box>
					<Box
						sx={{
							flex: '1 1 0',
							minWidth: 160,
							px: 3,
							py: 2,
							textAlign: 'center',
						}}>
						<Typography sx={{ fontSize: '14px', color: MUTED_GRAY, mb: 1 }}>
							Estimated CO₂e reduction equivalent to planting
						</Typography>
						<Typography
							sx={{
								fontFamily: '"Playfair Display", serif',
								fontSize: { xs: '40px', sm: '52px' },
								fontWeight: 300,
								color: TEXT_DARK,
							}}>
							250 trees
						</Typography>
					</Box>
				</Box>

				<Box sx={{ display: 'flex', justifyContent: 'flex-end', mt: 4 }}>
					<Box sx={{ textAlign: 'right' }}>
						<Typography sx={{ fontSize: '12px', color: MUTED_GRAY, mb: 0.5 }}>reporting data powered by</Typography>
						<Box component='img' src={poweredByBioGreen} alt='BioGreen360' sx={{ height: 28 }} />
					</Box>
				</Box>
			</Box>

			{/* How it Works */}
			<Box
				sx={{
					maxWidth: CONTENT_MAX,
					mx: 'auto',
					px: { xs: 2, sm: 4 },
					pt: SECTION_PY,
					pb: SECTION_PY,
					textAlign: 'center',
				}}>
				<Typography
					component='h2'
					sx={{
						fontFamily: '"Playfair Display", serif',
						fontSize: { xs: '28px', md: '34px' },
						fontWeight: 400,
						color: TEXT_DARK,
						mb: { xs: 5, md: 7 },
					}}>
					How it Works
				</Typography>

				<Box
					sx={{
						display: 'flex',
						flexWrap: { xs: 'wrap', md: 'nowrap' },
						justifyContent: 'center',
						alignItems: 'flex-start',
						gap: { xs: 5, md: 0 },
					}}>
					{[
						{
							icon: <Box component='img' src={howItWorksFoodIcon} alt='Food scraps collected' sx={{ height: 56, width: 'auto', objectFit: 'contain' }} />,
							label: 'Food Scraps are Collected',
						},
						{
							icon: <Box component='img' src={biogreenHowItWorksLogo} alt='BioGreen360' sx={{ height: 56, width: 'auto', objectFit: 'contain' }} />,
							label: "Processed on-site through BioGreen360's Food Cycling™ Platform with real-time tracking",
						},
						{
							icon: <Box component='img' src={howItWorksSproutIcon} alt='Grow more food' sx={{ height: 56, width: 'auto', objectFit: 'contain' }} />,
							label: 'Turned into soil locally to grow more food.',
						},
						{
							icon: <Box component='img' src={howItWorksReportIcon} alt='Report' sx={{ height: 56, width: 'auto', objectFit: 'contain' }} />,
							label: 'Customers receive report outlining estimated food diversion and carbon impact.',
						},
					].map((step, index) => (
						<React.Fragment key={index}>
							<Box
								sx={{
									display: 'flex',
									flexDirection: 'column',
									alignItems: 'center',
									flex: { xs: '1 1 100%', md: '1 1 0' },
									minWidth: { xs: 0, md: 0 },
									px: { md: 1 },
								}}>
								<Box
									sx={{
										width: { xs: 120, md: 132 },
										height: { xs: 120, md: 132 },
										flexShrink: 0,
										borderRadius: '50%',
										border: `2px solid ${GREEN_PRIMARY}`,
										backgroundColor: 'transparent',
										display: 'flex',
										alignItems: 'center',
										justifyContent: 'center',
										mb: 3.5,
									}}>
									{step.icon}
								</Box>
								<Typography
									sx={{
										fontSize: '16px',
										lineHeight: 1.7,
										color: BODY_GRAY,
										maxWidth: 200,
										mx: 'auto',
									}}>
									{step.label}
								</Typography>
							</Box>
							{index < 3 && (
								<Box
									sx={{
										display: { xs: 'none', md: 'flex' },
										alignItems: 'center',
										flexShrink: 0,
										px: 1.5,
										alignSelf: 'center',
										mt: -16,
									}}>
									<ArrowForwardIcon sx={{ color: GREEN_PRIMARY, fontSize: 36 }} />
								</Box>
							)}
						</React.Fragment>
					))}
				</Box>
			</Box>

			{/* CTA */}
			<Box sx={{ textAlign: 'center', pt: '56px', pb: '56px' }}>
				<Button
					variant='outlined'
					sx={{
						px: '36px',
						py: '14px',
						fontSize: '0.9rem',
						fontWeight: 500,
						letterSpacing: '0.08em',
						color: TEXT_DARK,
						borderWidth: '2px',
						borderColor: GREEN_BORDER,
						borderRadius: '9999px',
						backgroundColor: 'transparent',
						fontFamily: '"Inter", sans-serif',
						transition: 'background-color 0.2s ease, border-color 0.2s ease',
						'&:hover': {
							borderWidth: '2px',
							borderColor: GREEN_PRIMARY,
							backgroundColor: 'rgba(122, 146, 59, 0.08)',
						},
					}}>
					BOOK YOUR EVENT
				</Button>
			</Box>
		</Box>
	);
};

export default CircularFoodSystems;
