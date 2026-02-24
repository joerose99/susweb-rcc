import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import LocalGroceryStoreIcon from '@mui/icons-material/LocalGroceryStore';
import HomeIcon from '@mui/icons-material/Home';
import BarChartIcon from '@mui/icons-material/BarChart';
import SchoolIcon from '@mui/icons-material/School';
import DirectionsCarIcon from '@mui/icons-material/DirectionsCar';
import TvIcon from '@mui/icons-material/Tv';
import ChecklistRtlIcon from '@mui/icons-material/ChecklistRtl';
import RocketLaunchIcon from '@mui/icons-material/RocketLaunch';
import PlaceIcon from '@mui/icons-material/Place';
import SummarizeIcon from '@mui/icons-material/Summarize';
import ForestIcon from '@mui/icons-material/Forest';
import GrassIcon from '@mui/icons-material/Grass';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import poweredByBioGreen from '../../assets/PoweredByBioGreen.svg';
import biogreenHowItWorksLogo from '../../assets/biogreen-how-it-works.png';
import howItWorksFoodIcon from '../../assets/how-it-works-food.png';
import howItWorksSproutIcon from '../../assets/how-it-works-sprout.png';
import howItWorksReportIcon from '../../assets/how-it-works-report.png';
import heroKitchenImage from '../../assets/hero-kitchen.png';

const GREEN_PRIMARY = '#7A923B';
const GREEN_SOFT = '#F2F5EC';
const GREEN_BORDER = '#6B8232';
const BG_WARM = '#F5F4F1';
const BG_BAND = '#ECEFE5';
const TEXT_DARK = '#2E2D33';
const BODY_GRAY = '#57565D';
const MUTED_GRAY = '#6B6A73';
const SECTION_PY = { xs: '60px', md: '78px' };
const CONTENT_MAX = 1320;

const sectionContainerSx = {
	maxWidth: CONTENT_MAX,
	mx: 'auto',
	px: { xs: 2, sm: 4 },
	py: SECTION_PY,
};

const sectionBandBaseSx = {
	position: 'relative',
	isolation: 'isolate',
	'&::before': {
		content: '""',
		position: 'absolute',
		top: 0,
		bottom: 0,
		left: '50%',
		width: '100vw',
		transform: 'translateX(-50%)',
		backgroundColor: 'var(--bg-base)',
		borderTop: '1px solid var(--band-divider)',
		zIndex: 0,
	},
	'& > *': {
		position: 'relative',
		zIndex: 1,
	},
};

const sectionBandAltSx = {
	...sectionBandBaseSx,
	'&::before': {
		...sectionBandBaseSx['&::before'],
		backgroundColor: 'var(--bg-alt)',
	},
};

const impactMetrics = [
	{
		eyebrow: 'Food scraps diverted',
		value: '500 tons',
		note: 'estimated from measured on-site inputs',
	},
	{
		eyebrow: 'Soil amendment generated (estimate)',
		value: '3200+',
		note: 'acres of farmland equivalent',
	},
	{
		eyebrow: 'Estimated CO₂e avoided (equivalency)',
		value: '250 trees',
		note: 'illustrative environmental equivalency',
	},
];

const reportingTiles = [
	{
		title: 'Weekly Food Scrap Diversion',
		value: '1,000+ lbs per week',
		equivalency: 'Comparable monthly weight: ~2 elephants',
	},
	{
		title: 'Weekly Soil Amendment Generated',
		value: '3+ cubic yards per week',
		equivalency: 'Annual coverage: ~50 football fields (estimate)',
	},
	{
		title: 'All-Time Climate Impact (CO₂e)',
		value: '89,000 miles driven avoided',
		equivalency: 'Comparable to Boston ↔ LA ~10x (estimate)',
	},
];

const equivalencyCards = [
	{
		icon: LocalGroceryStoreIcon,
		label: 'Monthly Equivalent',
		value: '~2 elephants',
	},
	{
		icon: GrassIcon,
		label: 'Annual Coverage',
		value: '~50 football fields',
	},
	{
		icon: PlaceIcon,
		label: 'Comparable Distance',
		value: 'Boston ↔ LA ~10×',
	},
];

const eventFlow = [
	'During your event: food scraps captured on-site',
	'On-site processing & tracking',
	'Post-event impact summary and reporting',
];

const plannerDeliverables = [
	'Event-specific diversion summary',
	'Estimated CO₂e impact',
	'Soil/compost output estimates (where applicable)',
	'Share-ready reporting highlights',
];

const initiatives = [
	{
		title: 'EV Charging',
		description: 'On-site charging supports lower-emission guest and fleet travel.',
		icon: LocalGroceryStoreIcon,
	},
	{
		title: 'LEED / Green Building Commitments',
		description: 'Building operations align with recognized sustainability standards.',
		icon: HomeIcon,
	},
	{
		title: 'Energy Efficiency',
		description: 'Operational optimization reduces energy intensity over time.',
		icon: BarChartIcon,
	},
	{
		title: 'Indoor Air Quality',
		description: 'Ventilation and filtration practices support healthier shared spaces.',
		icon: ForestIcon,
	},
	{
		title: 'Water Stewardship',
		description: 'Targeted efficiency measures support responsible water use.',
		icon: GrassIcon,
	},
	{
		title: 'Recycling & Diversion',
		description: 'Integrated streams keep valuable materials out of landfill.',
		icon: ChecklistRtlIcon,
	},
	{
		title: 'Sustainable Mobility',
		description: 'Mobility offerings encourage lower-impact transportation options.',
		icon: DirectionsCarIcon,
	},
	{
		title: 'Digital Room Keys',
		description: 'Digital-first access reduces physical material consumption.',
		icon: TvIcon,
	},
	{
		title: 'Linen & Towel Program',
		description: 'Guest-centered reuse options reduce laundry energy and water demand.',
		icon: PlaceIcon,
	},
	{
		title: 'Eco-Conscious Cleaning Products',
		description: 'Preferred products support healthier operations and indoor environments.',
		icon: SchoolIcon,
	},
	{
		title: 'Sustainable Purchasing',
		description: 'Procurement prioritizes responsible sourcing and supplier transparency.',
		icon: SummarizeIcon,
	},
	{
		title: 'Reduced Single-Use Plastics',
		description: 'Material choices reduce disposable plastics across guest touchpoints.',
		icon: RocketLaunchIcon,
	},
];

const CircularFoodSystems = () => {
	const scrollToSection = (sectionId) => {
		const target = document.getElementById(sectionId);
		if (target) {
			target.scrollIntoView({ behavior: 'smooth', block: 'start' });
		}
	};

	return (
		<Box
			data-page='circular-food-systems'
			sx={{
				minHeight: '100vh',
				backgroundColor: BG_WARM,
				'--bg-base': BG_WARM,
				'--bg-alt': '#F0F2EC',
				'--band-divider': 'rgba(107,106,115,0.08)',
				color: TEXT_DARK,
				fontFamily: '"Inter", "Helvetica", "Arial", sans-serif',
				lineHeight: 1.7,
				'& .lux-link': {
					display: 'inline-flex',
					alignItems: 'center',
					gap: '0.3em',
					fontWeight: 500,
					color: 'rgba(107,106,115,0.95)',
					textDecoration: 'underline',
					textDecorationColor: 'rgba(107,106,115,0.45)',
					textDecorationThickness: '1px',
					textUnderlineOffset: '3px',
					transition:
						'color 200ms ease, text-decoration-color 200ms ease, text-decoration-thickness 200ms ease',
					'&:hover': {
						color: GREEN_PRIMARY,
						textDecorationColor: GREEN_PRIMARY,
					},
					'&:focus-visible': {
						outline: `2px solid ${GREEN_PRIMARY}`,
						outlineOffset: '2px',
						textDecorationThickness: '2px',
					},
				},
				'& .lux-link--internal::after': {
					content: '"→"',
					fontSize: '0.9em',
					opacity: 0.9,
				},
				'& .lux-link--external::after': {
					content: '"↗"',
					fontSize: '0.86em',
					opacity: 0.9,
				},
				'& .lux-clickable': {
					position: 'relative',
					cursor: 'pointer',
					transition:
						'transform 220ms ease, border-color 220ms ease, box-shadow 220ms ease, color 220ms ease, font-weight 220ms ease',
					'&:hover': {
						transform: 'translateY(-2px)',
						borderColor: 'rgba(122, 146, 59, 0.35)',
						boxShadow: '0 6px 14px rgba(46,45,51,0.04)',
					},
					'&:focus-visible': {
						outline: `2px solid ${GREEN_PRIMARY}`,
						outlineOffset: '2px',
					},
					'& .lux-click-indicator': {
						opacity: 0,
						transition: 'opacity 220ms ease',
					},
					'&:hover .lux-click-indicator': {
						opacity: 0.85,
					},
				},
			}}>
			{/* Hero */}
			<Box
				className='section section--base'
				sx={{
					...sectionContainerSx,
					...sectionBandBaseSx,
					'&::before': {
						...sectionBandBaseSx['&::before'],
						borderTop: '1px solid transparent',
					},
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
							mb: 2.5,
						}}>
						Our Commitment to Circular Food Systems
					</Typography>
					<Typography
						sx={{
							fontFamily: '"Inter", sans-serif',
							fontSize: '20px',
							fontWeight: 400,
							color: MUTED_GRAY,
							mb: 1.5,
						}}>
						Farm to Table, Table to Farm
					</Typography>
					<Typography
						sx={{
							fontSize: '12px',
							letterSpacing: '0.08em',
							textTransform: 'uppercase',
							fontWeight: 500,
							color: MUTED_GRAY,
							mb: 2.25,
						}}>
						Measured on-site. Reported with transparency.
					</Typography>
					<Typography
						sx={{
							maxWidth: 820,
							mx: 'auto',
							fontSize: '18px',
							lineHeight: 1.75,
							color: BODY_GRAY,
						}}>
						Every meal and event helps divert food scraps on-site-returning nutrients to the local
						community.
					</Typography>
				</Box>

				<Box sx={{ width: '100%', mt: { xs: 5, md: 7 }, mb: { xs: 5, md: 6 } }}>
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

				<Box sx={{ textAlign: 'center', maxWidth: 860, mx: 'auto' }}>
					<Typography sx={{ fontSize: '18px', lineHeight: 1.75, color: BODY_GRAY }}>
						Sustainability is woven into our guest experience-guided by measurable action. Through on-site
						food cycling and transparent reporting, we reduce waste, support local soil health, and advance
						our climate commitments.
					</Typography>
				</Box>
			</Box>

			{/* Our Impact */}
			<Box className='section section--alt' sx={{ ...sectionContainerSx, ...sectionBandAltSx }}>
				<Box
					sx={{
						display: 'flex',
						flexWrap: 'wrap',
						justifyContent: 'space-between',
						alignItems: 'baseline',
						gap: 1.5,
						mb: 1,
					}}>
					<Typography
						component='h2'
						sx={{
							fontFamily: '"Playfair Display", serif',
							fontSize: { xs: '28px', md: '34px' },
							fontWeight: 400,
							color: TEXT_DARK,
						}}>
						Our Impact:
					</Typography>
					<Typography sx={{ fontSize: '12px', color: MUTED_GRAY }}>Last updated: [MM/DD/YYYY HH:MM]</Typography>
				</Box>
				<Typography sx={{ fontSize: '15px', lineHeight: 1.7, color: MUTED_GRAY, mb: 2 }}>
					Live, property-specific impact estimates based on data captured through BioGreen360&apos;s on-site
					systems.
				</Typography>
				<Box
					sx={{
						width: '100%',
						maxWidth: 360,
						height: '1px',
						backgroundColor: 'rgba(122, 146, 59, 0.45)',
						mb: 2.5,
					}}
				/>

				<Box
					sx={{
						display: 'flex',
						flexWrap: 'wrap',
						alignItems: 'stretch',
						justifyContent: 'space-between',
						borderTop: `1px solid rgba(107, 130, 50, 0.15)`,
						borderBottom: `1px solid rgba(107, 130, 50, 0.15)`,
						py: 2.5,
					}}>
					{impactMetrics.map((metric, idx) => (
						<Box
							key={metric.eyebrow}
							sx={{
								flex: '1 1 0',
								minWidth: 220,
								px: { xs: 0, sm: 3 },
								py: 1.5,
								textAlign: 'center',
								borderRight: idx < 2 ? { xs: 'none', md: `1px solid rgba(122, 146, 59, 0.35)` } : 'none',
							}}>
							<Typography sx={{ fontSize: '13px', color: MUTED_GRAY, mb: 1 }}>{metric.eyebrow}</Typography>
							<Typography
								sx={{
									fontFamily: '"Playfair Display", serif',
									fontSize: { xs: '36px', sm: '48px' },
									fontWeight: 300,
									lineHeight: 1.15,
									color: TEXT_DARK,
								}}>
								{metric.value}
							</Typography>
							<Typography sx={{ fontSize: '12px', color: MUTED_GRAY, mt: 1 }}>{metric.note}</Typography>
						</Box>
					))}
				</Box>

				<Box sx={{ textAlign: 'center', mt: 2.25 }}>
					<Typography sx={{ fontSize: '11px', color: 'rgba(107,106,115,0.85)', mb: 0.5 }}>
						Reporting powered by BioGreen360
					</Typography>
					<Box component='img' src={poweredByBioGreen} alt='BioGreen360' sx={{ height: 26 }} />
				</Box>

				<Box sx={{ textAlign: 'center', mt: 1.5 }}>
					<Box
						component='a'
						href='#methodology'
						className='lux-link lux-link--internal'
						sx={{
							fontSize: '11px',
							letterSpacing: '0.08em',
							textTransform: 'uppercase',
						}}>
						Methodology
					</Box>
				</Box>
			</Box>

			{/* Cornerstone Partnership */}
			<Box className='section section--base' sx={{ ...sectionContainerSx, ...sectionBandBaseSx }}>
				<Box
					sx={{
						display: 'grid',
						gridTemplateColumns: { xs: '1fr', md: '1fr 2fr' },
						gap: { xs: 3, md: 6 },
						alignItems: 'start',
					}}>
					<Box>
						<Box
							component='img'
							src={heroKitchenImage}
							alt='On-site food cycling partnership supporting circular food systems.'
							sx={{
								width: '100%',
								aspectRatio: '4 / 5',
								objectFit: 'cover',
								borderRadius: '12px',
								border: '1px solid rgba(46,45,51,0.08)',
								boxShadow: '0 4px 16px rgba(46,45,51,0.04)',
							}}
						/>
					</Box>
					<Box>
						<Typography
							component='h2'
							sx={{
								fontFamily: '"Playfair Display", serif',
								fontSize: { xs: '28px', md: '34px' },
								fontWeight: 400,
								lineHeight: 1.25,
								mb: 1.5,
							}}>
							A Cornerstone Partnership with BioGreen360
						</Typography>
						<Typography sx={{ fontSize: '16px', color: MUTED_GRAY, maxWidth: 740, mb: 1.5 }}>
							A long-term collaboration uniting refined hospitality with measurable sustainability outcomes.
						</Typography>
						<Typography
							sx={{
								fontSize: '11px',
								letterSpacing: '0.08em',
								textTransform: 'uppercase',
								fontWeight: 600,
								color: MUTED_GRAY,
								mb: 1.25,
							}}>
							At a glance
						</Typography>
						<Box
							sx={{
								display: 'grid',
								gridTemplateColumns: { xs: '1fr', md: 'repeat(3, minmax(0, 1fr))' },
								borderTop: '1px solid rgba(46,45,51,0.08)',
								borderBottom: '1px solid rgba(46,45,51,0.08)',
								mb: 2,
							}}>
							{[
								{ label: 'ON-SITE PROCESSING', target: 'how-it-works' },
								{ label: 'PROPERTY-LEVEL MEASUREMENT', target: 'live-impact-reporting' },
								{ label: 'SHAREABLE IMPACT REPORTING', target: 'zero-food-waste-events' },
							].map((item, index) => (
								<Box
									key={item.label}
									component='button'
									className='lux-clickable'
									onClick={() => scrollToSection(item.target)}
									sx={{
										appearance: 'none',
										border: 'none',
										background: 'transparent',
										py: 1.5,
										px: 1.25,
										textAlign: 'center',
										cursor: 'pointer',
										fontSize: '12px',
										color: BODY_GRAY,
										letterSpacing: '0.04em',
										fontWeight: 500,
										position: 'relative',
										borderRight:
											index < 2 ? { xs: 'none', md: '1px solid rgba(46,45,51,0.08)' } : 'none',
										'&:hover': {
											color: GREEN_PRIMARY,
											fontWeight: 700,
										},
									}}>
									{item.label}
									<Box
										component='span'
										className='lux-click-indicator'
										sx={{
											position: 'absolute',
											top: '6px',
											right: '8px',
											fontSize: '11px',
											color: GREEN_PRIMARY,
											lineHeight: 1,
										}}>
										→
									</Box>
								</Box>
							))}
						</Box>
						<Typography sx={{ fontSize: '16px', color: BODY_GRAY, lineHeight: 1.8 }}>
							Since [Month YYYY], we have partnered with BioGreen360 to integrate on-site food cycling into
							daily operations-capturing food scraps at the point of service and returning nutrients to the
							local ecosystem. The result is a program that supports waste reduction without compromising the
							guest experience.
						</Typography>
						<Typography sx={{ fontSize: '16px', color: BODY_GRAY, lineHeight: 1.8 }}>
							Together, we prioritize transparency through property-level tracking and reporting-designed to
							support responsible stewardship, continuous improvement, and long-term climate commitments.
						</Typography>
					</Box>
				</Box>
			</Box>

			{/* How it Works */}
			<Box
				id='how-it-works'
				className='section section--alt'
				sx={{ ...sectionContainerSx, ...sectionBandAltSx, scrollMarginTop: { xs: '80px', md: '96px' } }}>
				<Typography
					component='h2'
					sx={{
						fontFamily: '"Playfair Display", serif',
						fontSize: { xs: '28px', md: '34px' },
						fontWeight: 400,
						color: TEXT_DARK,
						textAlign: 'center',
						mb: { xs: 4, md: 6 },
					}}>
					How it Works
				</Typography>

				<Box
					sx={{
						display: 'flex',
						flexWrap: { xs: 'wrap', md: 'nowrap' },
						justifyContent: 'center',
						alignItems: 'flex-start',
						gap: { xs: 4, md: 0 },
					}}>
					{[
						{
							icon: <Box component='img' src={howItWorksFoodIcon} alt='Food scraps are collected' sx={{ height: 56, width: 'auto', objectFit: 'contain' }} />,
							label: 'Food scraps are collected',
						},
						{
							icon: <Box component='img' src={biogreenHowItWorksLogo} alt='Processed on-site with real-time tracking' sx={{ height: 56, width: 'auto', objectFit: 'contain' }} />,
							label: 'Processed on-site with real-time tracking',
						},
						{
							icon: <Box component='img' src={howItWorksSproutIcon} alt='Returned to soil locally to support growth' sx={{ height: 56, width: 'auto', objectFit: 'contain' }} />,
							label: 'Returned to soil locally to support growth',
						},
						{
							icon: <Box component='img' src={howItWorksReportIcon} alt='Transparent reporting shared with stakeholders' sx={{ height: 56, width: 'auto', objectFit: 'contain' }} />,
							label: 'Transparent reporting shared with stakeholders',
						},
					].map((step, index) => (
						<React.Fragment key={step.label}>
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
										width: { xs: 116, md: 128 },
										height: { xs: 116, md: 128 },
										flexShrink: 0,
										borderRadius: '50%',
										border: `2px solid ${GREEN_PRIMARY}`,
										backgroundColor: 'transparent',
										display: 'flex',
										alignItems: 'center',
										justifyContent: 'center',
										mb: 2.5,
									}}>
									{step.icon}
								</Box>
								<Typography sx={{ fontSize: '15px', lineHeight: 1.65, color: BODY_GRAY, maxWidth: 210, mx: 'auto' }}>
									{step.label}
								</Typography>
							</Box>
							{index < 3 && (
								<Box
									sx={{
										display: { xs: 'none', md: 'flex' },
										alignItems: 'center',
										flexShrink: 0,
										px: 1.25,
										alignSelf: 'center',
										mt: -14,
									}}>
									<ArrowForwardIcon sx={{ color: GREEN_PRIMARY, fontSize: 34 }} />
								</Box>
							)}
						</React.Fragment>
					))}
				</Box>
			</Box>

			{/* Live Sustainability Impact Reporting */}
			<Box
				id='live-impact-reporting'
				className='section section--base'
				sx={{ ...sectionContainerSx, ...sectionBandBaseSx, scrollMarginTop: { xs: '80px', md: '96px' } }}>
				<Typography
					component='h2'
					sx={{
						fontFamily: '"Playfair Display", serif',
						fontSize: { xs: '28px', md: '34px' },
						fontWeight: 400,
						mb: 1.5,
					}}>
					Live Sustainability Impact Reporting
				</Typography>
				<Box
					sx={{
						display: 'flex',
						flexWrap: 'wrap',
						justifyContent: 'space-between',
						alignItems: 'center',
						gap: 1.25,
						mb: 1.5,
					}}>
					<Typography sx={{ fontSize: '16px', color: MUTED_GRAY }}>
						Metrics shown are live or cumulative estimates based on on-site tracking.
					</Typography>
					<Box
						component='a'
						href='#methodology'
						className='lux-link lux-link--internal'
						sx={{
							fontSize: '12px',
						}}>
						ⓘ Estimates explained
					</Box>
				</Box>
				<Typography sx={{ fontSize: '12px', color: MUTED_GRAY, mb: 3 }}>
					Last Updated: MM/DD/YYYY
				</Typography>
				<Box
					sx={{
						display: 'grid',
						gridTemplateColumns: { xs: '1fr', md: 'repeat(3, minmax(0, 1fr))' },
						gap: 2,
					}}>
					{reportingTiles.map((tile) => (
						<Box
							key={tile.title}
							sx={{
								backgroundColor: '#FFFFFF',
								border: '1px solid rgba(107, 130, 50, 0.2)',
								borderRadius: '10px',
								p: { xs: 2.5, md: 3 },
								minHeight: 220,
								display: 'flex',
								flexDirection: 'column',
								justifyContent: 'center',
								textAlign: 'center',
								boxShadow: '0 2px 10px rgba(46,45,51,0.03)',
							}}>
							<Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: 1.25 }}>
								<Typography
									sx={{
										fontSize: '11px',
										color: MUTED_GRAY,
										letterSpacing: '0.08em',
										textTransform: 'uppercase',
										fontWeight: 600,
										mb: 0,
									}}>
									{tile.title}
								</Typography>
								<Typography
									component='h3'
									sx={{
										fontFamily: '"Playfair Display", serif',
										fontSize: { xs: '28px', md: '32px' },
										fontWeight: 400,
										lineHeight: 1.25,
										mb: 0,
									}}>
									{tile.value}
								</Typography>
							</Box>
						</Box>
					))}
					{equivalencyCards.map((card) => {
						const Icon = card.icon;
						return (
							<Box
								key={card.value}
								sx={{
									backgroundColor: '#FFFFFF',
									border: '1px solid rgba(107, 130, 50, 0.2)',
									borderRadius: '10px',
									p: { xs: 2.5, md: 3 },
									minHeight: 220,
									display: 'flex',
									flexDirection: 'column',
									textAlign: 'center',
									boxShadow: '0 2px 10px rgba(46,45,51,0.03)',
								}}>
								<Typography
									sx={{
										fontSize: '11px',
										color: MUTED_GRAY,
										letterSpacing: '0.08em',
										textTransform: 'uppercase',
										fontWeight: 600,
										mb: 1.25,
									}}>
									{card.label}
								</Typography>
								<Typography
									component='h3'
									sx={{
										fontFamily: '"Playfair Display", serif',
										fontSize: { xs: '28px', md: '32px' },
										fontWeight: 400,
										lineHeight: 1.25,
										mb: 1.5,
									}}>
									{card.value}
								</Typography>
								<Icon
									sx={{
										fontSize: { xs: 56, md: 64 },
										color: 'rgba(107, 130, 50, 0.85)',
										mt: 'auto',
										pt: 1.75,
										alignSelf: 'center',
									}}
								/>
							</Box>
						);
					})}
				</Box>
				<Typography sx={{ fontSize: '12px', color: MUTED_GRAY, mt: 2.25 }}>
					Equivalencies are provided for context and are not audited carbon claims.
				</Typography>
			</Box>

			{/* Zero Food Waste Events */}
			<Box
				id='zero-food-waste-events'
				className='section section--alt'
				sx={{ ...sectionContainerSx, ...sectionBandAltSx, scrollMarginTop: { xs: '80px', md: '96px' } }}>
				<Box
					sx={{
						display: 'grid',
						gridTemplateColumns: { xs: '1fr', md: '2fr 3fr' },
						gap: { xs: 2.5, md: 3 },
						alignItems: 'start',
						mb: 4,
					}}>
					<Box>
						<Typography
							component='h2'
							sx={{
								fontFamily: '"Playfair Display", serif',
								fontSize: { xs: '28px', md: '34px' },
								fontWeight: 400,
								mb: 1,
							}}>
							Zero Food Waste Events
						</Typography>
						<Typography sx={{ fontSize: '16px', fontWeight: 400, color: BODY_GRAY, lineHeight: 1.8, mb: 1.25 }}>
							Measurable sustainability for meetings, conferences, and group events.
						</Typography>
						<Box sx={{ width: 84, height: '2px', backgroundColor: GREEN_PRIMARY, mb: 1.5 }} />
						<Typography sx={{ fontSize: '16px', fontWeight: 400, color: BODY_GRAY, lineHeight: 1.8, mb: 1 }}>
							[Hotel Name] offers Zero Food Waste Events designed to help planners reduce environmental impact
							without compromising experience.
						</Typography>
						<Typography sx={{ fontSize: '16px', fontWeight: 400, color: BODY_GRAY, lineHeight: 1.8 }}>
							Food not consumed during qualifying events is diverted from landfill through on-site systems and
							tracked in real time. Following the event, clients receive a customized sustainability impact
							summary, including estimated carbon impact metrics powered by BioGreen360 reporting.
						</Typography>
					</Box>

					<Box
						component='img'
						src='https://images.unsplash.com/photo-1519167758481-83f550bb49b3?w=1200&q=80'
						alt='Hotel event space configured for a sustainable event.'
						sx={{
							width: '100%',
							aspectRatio: '16 / 8',
							objectFit: 'cover',
							borderRadius: '12px',
							border: '1px solid rgba(46,45,51,0.08)',
							boxShadow: '0 4px 16px rgba(46,45,51,0.04)',
						}}
					/>
				</Box>

				<Box
					sx={{
						display: 'grid',
						gridTemplateColumns: { xs: '1fr', md: '7fr 3fr' },
						gap: 2.5,
						alignItems: 'center',
						mb: 3.5,
					}}>
					<Box>
						<Typography
							sx={{
								fontFamily: '"Playfair Display", serif',
								fontSize: { xs: '26px', md: '30px' },
								fontWeight: 400,
								textAlign: 'center',
								mb: 2.5,
							}}>
							How it Works
						</Typography>

						<Box
							sx={{
								display: 'flex',
								flexWrap: { xs: 'wrap', md: 'nowrap' },
								justifyContent: 'center',
								alignItems: 'flex-start',
								gap: { xs: 3.5, md: 0 },
							}}>
							{[
								{
									icon: (
										<Box
											component='img'
											src={howItWorksFoodIcon}
											alt='During Your Event'
											sx={{ height: 56, width: 'auto', objectFit: 'contain' }}
										/>
									),
									title: 'During Your Event',
									description:
										'Food scraps generated from kitchens and service areas are collected on-site.',
								},
								{
									icon: (
										<Box
											component='img'
											src={biogreenHowItWorksLogo}
											alt='On-Site Processing & Tracking'
											sx={{ height: 56, width: 'auto', objectFit: 'contain' }}
										/>
									),
									title: 'On-Site Processing & Tracking',
									description:
										'Food scraps are processed through BioGreen360’s Food Cycling™ Platform with real-time tracking.',
								},
								{
									icon: (
										<Box
											component='img'
											src={howItWorksReportIcon}
											alt='Post-Event Impact Reporting'
											sx={{ height: 56, width: 'auto', objectFit: 'contain' }}
										/>
									),
									title: 'Post-Event Impact Reporting',
									description:
										'Clients receive an event-specific impact summary outlining estimated food waste diversion and carbon impact.',
								},
							].map((step, idx) => (
								<React.Fragment key={step.title}>
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
											width: { xs: 116, md: 128 },
											height: { xs: 116, md: 128 },
												borderRadius: '50%',
											border: `2px solid ${GREEN_PRIMARY}`,
											backgroundColor: 'transparent',
												display: 'flex',
												alignItems: 'center',
												justifyContent: 'center',
											mb: 2.5,
											}}>
											{step.icon}
										</Box>
										<Typography
											component='h3'
											sx={{
												fontSize: '22px',
												fontFamily: '"Playfair Display", serif',
												fontWeight: 400,
												color: TEXT_DARK,
												textAlign: 'center',
												lineHeight: 1.35,
												mb: 0.75,
												maxWidth: 280,
											}}>
											{step.title}
										</Typography>
										<Typography
											sx={{
												fontSize: '15px',
												color: BODY_GRAY,
												lineHeight: 1.65,
												textAlign: 'center',
												maxWidth: 310,
											}}>
											{step.description}
										</Typography>
									</Box>
									{idx < 2 && (
										<Box
											sx={{
												display: { xs: 'none', md: 'flex' },
												alignItems: 'center',
												flexShrink: 0,
												px: 1.25,
												alignSelf: 'flex-start',
												mt: 4.5,
											}}>
											<ArrowForwardIcon sx={{ color: GREEN_PRIMARY, fontSize: 34 }} />
										</Box>
									)}
								</React.Fragment>
							))}
						</Box>
					</Box>

					<Box
						sx={{
							backgroundColor: 'var(--bg-alt)',
							border: `3px solid ${GREEN_PRIMARY}`,
							borderRadius: '26px',
							p: { xs: 2, md: 2.5 },
							alignSelf: { xs: 'stretch', md: 'center' },
						}}>
						<Typography
							component='h3'
							sx={{
								fontFamily: '"Playfair Display", serif',
								fontSize: '22px',
								fontWeight: 400,
								mb: 1.1,
								textDecoration: 'underline',
								textDecorationColor: 'rgba(46,45,51,0.35)',
								textUnderlineOffset: '3px',
							}}>
							What Event Planners Receive:
						</Typography>
						<Box component='ul' sx={{ m: 0, pl: 2.1, color: BODY_GRAY }}>
							{[
								'Event specific food-waste diversion summary',
								'Estimated CO₂e impact metrics for stakeholder reporting',
								'Post-event sustainability documentation suitable for internal reporting and stakeholder communications',
							].map((item) => (
								<Box component='li' key={item} sx={{ fontSize: '14px', lineHeight: 1.7, mb: 0.45 }}>
									{item}
								</Box>
							))}
						</Box>
					</Box>
				</Box>

				<Box sx={{ textAlign: 'center' }}>
					<Button
						variant='contained'
						sx={{
							px: 3,
							py: 1.2,
							fontSize: '0.84rem',
							fontWeight: 500,
							letterSpacing: '0.06em',
							color: '#FFFFFF',
							backgroundColor: GREEN_BORDER,
							borderRadius: '9999px',
							boxShadow: 'none',
							'&:hover': { backgroundColor: GREEN_PRIMARY, boxShadow: 'none' },
						}}>
						CONTACT OUR SALES TEAM
					</Button>
					<Box sx={{ mt: 1.25 }}>
						<Box
							component='a'
							href='https://example.com/sample-event-impact-summary.pdf'
							target='_blank'
							rel='noopener noreferrer'
							className='lux-link lux-link--external'
							sx={{ fontSize: '14px' }}>
							Download a Sample Event Impact Summary
						</Box>
					</Box>
				</Box>
			</Box>

			{/* Community Impact */}
			<Box className='section section--base' sx={{ ...sectionContainerSx, ...sectionBandBaseSx }}>
				<Typography
					component='h2'
					sx={{
						fontFamily: '"Playfair Display", serif',
						fontSize: { xs: '28px', md: '34px' },
						fontWeight: 400,
						mb: 1.25,
					}}>
					Community Impact and Local Partnerships
				</Typography>
				<Typography sx={{ fontSize: '16px', color: MUTED_GRAY, mb: 3.5 }}>
					Keeping resources local-supporting soil health, education, and community resilience.
				</Typography>
				<Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', md: 'repeat(2, minmax(0, 1fr))' }, gap: 2 }}>
					{[
						{
							title: 'Soil Support for Local Nonprofit Partners',
							copy: 'A share of generated soil amendment is directed toward nonprofit-aligned land restoration and growing initiatives, where locally appropriate.',
							image:
								'https://images.unsplash.com/photo-1464226184884-fa280b87c399?w=1200&q=80',
							alt: 'Community members planting in a local garden focused on soil restoration.',
						},
						{
							title: 'Supporting On-Site / Local Garden Programs',
							copy: 'Program outputs can support culinary gardens and educational touchpoints that bring circularity to life for guests and teams.',
							image:
								'https://images.unsplash.com/photo-1471193945509-9ad0617afabf?w=1200&q=80',
							alt: 'Chef harvesting herbs from an on-site garden program.',
						},
					].map((story) => (
						<Box
							key={story.title}
							sx={{
								backgroundColor: '#FFFFFF',
								border: '1px solid rgba(46,45,51,0.06)',
								borderRadius: '10px',
								p: 2.5,
								minHeight: 236,
								display: 'flex',
								flexDirection: 'column',
							}}>
							<Box
								component='img'
								src={story.image}
								alt={story.alt}
								sx={{
									width: '100%',
									aspectRatio: '16 / 9',
									objectFit: 'cover',
									borderRadius: '8px',
									mb: 1.5,
									border: '1px solid rgba(46,45,51,0.14)',
								}}
							/>
							<Typography component='h3' sx={{ fontFamily: '"Playfair Display", serif', fontSize: '24px', fontWeight: 400, mb: 1 }}>
								{story.title}
							</Typography>
							<Typography sx={{ fontSize: '15px', color: BODY_GRAY, lineHeight: 1.7 }}>{story.copy}</Typography>
						</Box>
					))}
				</Box>
				<Box
					sx={{
						mt: 2,
						backgroundColor: GREEN_SOFT,
						borderRadius: '10px',
						px: 2,
						py: 1.5,
						display: 'inline-flex',
					}}>
					<Typography sx={{ fontSize: '14px', color: BODY_GRAY }}>
						Upcoming Community Engagement - Earth Day 2026
					</Typography>
				</Box>
			</Box>

			{/* Additional Sustainability Initiatives */}
			<Box className='section section--alt' sx={{ ...sectionContainerSx, ...sectionBandAltSx }}>
				<Typography
					component='h2'
					sx={{
						fontFamily: '"Playfair Display", serif',
						fontSize: { xs: '28px', md: '34px' },
						fontWeight: 400,
						mb: 2.5,
					}}>
					Additional Sustainability Initiatives
				</Typography>

				<Box
					sx={{
						display: 'grid',
						gridTemplateColumns: { xs: '1fr', sm: 'repeat(2, minmax(0, 1fr))', lg: 'repeat(3, minmax(0, 1fr))' },
						gap: 2,
					}}>
					{initiatives.map((initiative, idx) => {
						const Icon = initiative.icon;
						const row = Math.floor(idx / 3);
						const col = idx % 3;
						const isBaseTile = (row + col) % 2 === 0;
						return (
							<Box
								key={initiative.title}
								sx={{
									backgroundColor: isBaseTile ? 'var(--bg-base)' : 'var(--bg-alt)',
									borderRadius: '10px',
									border: '1px solid rgba(46,45,51,0.05)',
									p: 2.25,
									minHeight: 206,
									display: 'flex',
									flexDirection: 'column',
									justifyContent: 'center',
									alignItems: 'center',
									textAlign: 'center',
									gap: 0.7,
								}}>
								<Icon sx={{ color: GREEN_BORDER, fontSize: 38 }} />
								<Typography component='h3' sx={{ fontSize: '17px', fontWeight: 600, color: TEXT_DARK, mb: 0 }}>
									{initiative.title}
								</Typography>
								<Typography
									sx={{
										fontSize: '13px',
										color: BODY_GRAY,
										lineHeight: 1.6,
										display: '-webkit-box',
										overflow: 'hidden',
										WebkitLineClamp: 2,
										WebkitBoxOrient: 'vertical',
									}}>
									{initiative.description}
								</Typography>
							</Box>
						);
					})}
				</Box>

				<Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1.5, mt: 3 }}>
					<Button
						variant='outlined'
						sx={{
							px: 3,
							py: 1.15,
							fontSize: '0.84rem',
							fontWeight: 500,
							letterSpacing: '0.05em',
							color: TEXT_DARK,
							borderWidth: '1.5px',
							borderColor: GREEN_BORDER,
							borderRadius: '9999px',
							'&:hover': { borderColor: GREEN_PRIMARY, backgroundColor: GREEN_SOFT },
						}}>
						Explore Our Sustainability Commitments
					</Button>
					<Button
						variant='text'
						sx={{
							px: 2,
							fontSize: '0.84rem',
							fontWeight: 400,
							letterSpacing: '0.03em',
							color: GREEN_BORDER,
							textTransform: 'none',
							textDecoration: 'underline',
							textUnderlineOffset: '3px',
						}}>
						Contact Our Sustainability Team
					</Button>
				</Box>
			</Box>

			{/* Methodology / Transparency */}
			<Box
				id='methodology'
				sx={{
					backgroundColor: BG_BAND,
					borderTop: '1px solid rgba(46,45,51,0.08)',
					borderBottom: '1px solid rgba(46,45,51,0.08)',
					scrollMarginTop: { xs: '80px', md: '96px' },
				}}>
				<Box sx={sectionContainerSx}>
					<Typography
						component='h2'
						sx={{
							fontFamily: '"Playfair Display", serif',
							fontSize: { xs: '28px', md: '34px' },
							fontWeight: 400,
							mb: 1.5,
						}}>
						Reporting Transparency and Methodology
					</Typography>
					<Typography sx={{ fontSize: '15px', color: BODY_GRAY, lineHeight: 1.8, maxWidth: 1040, mb: 1.25 }}>
						Reported values combine direct operational measurements with standardized conversion factors to
						estimate diversion, soil amendment outputs, and climate equivalencies.
					</Typography>
					<Typography sx={{ fontSize: '15px', color: BODY_GRAY, lineHeight: 1.8, maxWidth: 1040, mb: 2 }}>
						Where available, metrics reflect property-specific activity; selected equivalencies are provided for
						context and communication, not as audited carbon claims.
					</Typography>

					<Typography component='h3' sx={{ fontFamily: '"Playfair Display", serif', fontSize: '24px', fontWeight: 400, mb: 1 }}>
						Understanding Reported Metrics
					</Typography>
					<Box component='ul' sx={{ m: 0, pl: 2.25, color: BODY_GRAY, mb: 2 }}>
						<Box component='li' sx={{ fontSize: '14px', lineHeight: 1.8 }}>
							Food scrap diversion is based on measured on-site capture and processing inputs.
						</Box>
						<Box component='li' sx={{ fontSize: '14px', lineHeight: 1.8 }}>
							Soil amendment outputs are estimated using operational conversion assumptions.
						</Box>
						<Box component='li' sx={{ fontSize: '14px', lineHeight: 1.8 }}>
							CO₂e equivalencies are illustrative and use standardized public reference factors.
						</Box>
					</Box>

					<Box sx={{ mb: 2.5 }}>
						<Typography sx={{ fontSize: '12px', color: MUTED_GRAY, mb: 0.5 }}>Sustainability reporting powered by BioGreen360</Typography>
						<Box component='img' src={poweredByBioGreen} alt='BioGreen360' sx={{ height: 28 }} />
					</Box>

					<Typography sx={{ fontSize: '12px', color: MUTED_GRAY, mb: 2.5 }}>
						Reported sustainability metrics are estimates based on measured inputs and standardized conversion
						factors; actual impacts may vary.
					</Typography>

					<Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1.5 }}>
						<Button
							variant='contained'
							sx={{
								px: 3,
								py: 1.15,
								fontSize: '0.84rem',
								fontWeight: 500,
								letterSpacing: '0.05em',
								color: '#FFFFFF',
								backgroundColor: GREEN_BORDER,
								boxShadow: 'none',
								borderRadius: '9999px',
								'&:hover': { backgroundColor: GREEN_PRIMARY, boxShadow: 'none' },
							}}>
							View Our Full Impact Report
						</Button>
						<Button
							variant='text'
							sx={{
								px: 2,
								fontSize: '0.84rem',
								fontWeight: 400,
								letterSpacing: '0.03em',
								color: GREEN_BORDER,
								textTransform: 'none',
								textDecoration: 'underline',
								textUnderlineOffset: '3px',
							}}>
							Inquire with Our Sustainability Team
						</Button>
					</Box>
				</Box>
			</Box>
		</Box>
	);
};

export default CircularFoodSystems;
