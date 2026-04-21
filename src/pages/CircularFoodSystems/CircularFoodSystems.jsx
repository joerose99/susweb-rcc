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
import zeroFoodWasteEventsImage from '../../assets/zero-food-waste-events.png';
import cornerstonePartnershipImage from '../../assets/cornerstone-partnership.png';
import StickyHeader from '../../components/StickyHeader';

const MAVEN_BLUE = '#394F71';
const MAVEN_TAN = '#AF986E';
const MAVEN_TEXT = '#2B2320';
const MAVEN_WHITE = '#FFFFFF';
const FONT_DISPLAY = '"Sorts Mill Goudy", "Goudy Old Style", Georgia, serif';
const FONT_UI = '"Roboto Condensed", "Helvetica Neue", Arial, sans-serif';
const FONT_BODY = '"Inter", sans-serif';

const GREEN_PRIMARY = MAVEN_BLUE;
const GREEN_SOFT = 'rgba(226, 205, 169, 0.24)';
const GREEN_BORDER = MAVEN_BLUE;
const BG_WARM = '#FFFCF9';
const BG_BAND = '#F7F3EC';
const TEXT_DARK = MAVEN_TEXT;
const BODY_GRAY = 'rgba(43, 35, 32, 0.9)';
const MUTED_GRAY = 'rgba(57, 79, 113, 0.5)';
const SECTION_PY = { xs: '64px', md: '88px' };
const RADIUS_CARD = '12px';
const SHADOW_CARD = '0 12px 32px rgba(57, 79, 113, 0.07)';
const SHADOW_IMAGE = '0 16px 40px rgba(57, 79, 113, 0.09)';
const LINE_SUBTLE = 'rgba(57, 79, 113, 0.12)';
const LINE_MUTED = 'rgba(57, 79, 113, 0.1)';
const CONTENT_MAX = 1320;
const siteConfig = {
	eventsEnabled: true,
	restaurantEnabled: true,
	bookingUrl: '#',
	reservationUrl: '#',
	processingPathwayMode: 'mixed',
	eventTrackingMode: 'by_request',
	showEquivalencies: true,
	lastSync: '2026-03-04T15:30:00-07:00',
	// impactReportUrl: 'https://example.com/impact-report.pdf',
};

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
		value: '89,000 miles of driving',
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

const formatLastSync = (lastSyncValue) => {
	if (!lastSyncValue) {
		return null;
	}

	const parsedDate = new Date(lastSyncValue);
	if (Number.isNaN(parsedDate.getTime())) {
		return null;
	}

	const parts = new Intl.DateTimeFormat('en-US', {
		month: 'short',
		day: 'numeric',
		year: 'numeric',
		hour: 'numeric',
		minute: '2-digit',
		hour12: true,
		timeZoneName: 'short',
	}).formatToParts(parsedDate);

	const partValue = (type) => parts.find((part) => part.type === type)?.value ?? '';
	return `${partValue('month')} ${partValue('day')}, ${partValue('year')} ${partValue('hour')}:${partValue('minute')} ${partValue('dayPeriod')} ${partValue('timeZoneName')}`;
};

const CircularFoodSystems = () => {
	const scrollToSection = (sectionId) => {
		const target = document.getElementById(sectionId);
		if (target) {
			target.scrollIntoView({ behavior: 'smooth', block: 'start' });
		}
	};

	const {
		eventsEnabled,
		restaurantEnabled,
		processingPathwayMode,
		showEquivalencies,
	} = siteConfig;

	const processingCopyByMode = {
		onsite: {
			overviewLabel: 'ON-SITE PROCESSING',
			partnershipNarrative:
				'daily operations-capturing food scraps at the point of service and returning nutrients to the local ecosystem.',
			howItWorksProcessingLabel: 'Processed on-site with real-time tracking',
			eventOverview:
				'Unserved food from qualifying events is processed on-site and tracked throughout service.',
			eventProcessingDescription:
				'Food scraps are processed through BioGreen360’s Food Cycling™ Platform with real-time tracking.',
		},
		offsite: {
			overviewLabel: 'OFF-SITE PROCESSING',
			partnershipNarrative:
				'daily operations-capturing food scraps at the point of service and routing them through verified partner processing pathways.',
			howItWorksProcessingLabel: 'Processed through verified partner pathways with tracking',
			eventOverview:
				'Unserved food from qualifying events is captured on-site and processed through verified partner pathways.',
			eventProcessingDescription:
				'Food scraps are routed through verified partner processing pathways with real-time tracking.',
		},
		mixed: {
			overviewLabel: 'ON-SITE PROCESSING',
			partnershipNarrative:
				'daily operations-capturing food scraps at the point of service and returning nutrients to the local ecosystem.',
			howItWorksProcessingLabel: 'Processed on-site with real-time tracking',
			eventOverview:
				'Unserved food from qualifying events is processed on-site and tracked throughout service.',
			eventProcessingDescription:
				'Food scraps are processed through BioGreen360’s Food Cycling™ Platform with real-time tracking.',
		},
	};

	const processingCopy =
		processingCopyByMode[processingPathwayMode] ?? processingCopyByMode.mixed;

	const cornerstoneOverviewLinks = [
		{ label: processingCopy.overviewLabel, target: 'how-it-works' },
		{ label: 'PROPERTY-LEVEL MEASUREMENT', target: 'live-reporting' },
		{ label: 'SHAREABLE IMPACT REPORTING', target: 'events' },
	];

	const primaryProcessingSteps = [
		{
			icon: (
				<Box
					component='img'
					src={howItWorksFoodIcon}
					alt='Food scraps are collected'
					sx={{ height: 56, width: 'auto', objectFit: 'contain' }}
				/>
			),
			label: 'Food scraps are collected on-site',
		},
		{
			icon: (
				<Box
					component='img'
					src={biogreenHowItWorksLogo}
					alt={processingCopy.howItWorksProcessingLabel}
					sx={{ height: 56, width: 'auto', objectFit: 'contain' }}
				/>
			),
			label: 'Measured and tracked in the BioGreen360 system',
		},
		{
			icon: (
				<Box
					component='img'
					src={howItWorksSproutIcon}
					alt='Returned to soil locally to support growth'
					sx={{ height: 56, width: 'auto', objectFit: 'contain' }}
				/>
			),
			label: 'Managed through local composting / soil pathways',
		},
		{
			icon: (
				<Box
					component='img'
					src={howItWorksReportIcon}
					alt='Transparent reporting shared with stakeholders'
					sx={{ height: 56, width: 'auto', objectFit: 'contain' }}
				/>
			),
			label: 'Reporting available for guests and planners',
		},
	];

	const eventFlowSteps = [
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
			title: 'Tracking & Reporting',
			description: 'Food scraps are tracked through BioGreen360’s reporting system during service.',
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
				'Clients may receive an event-specific recap outlining measured diversion totals and optional equivalencies for context.',
		},
	];

	const eventPlannerDeliverables = [
		'Event-specific diversion summary (when tracking is enabled)',
		'Clear scope notes and definitions for reporting',
		'Optional equivalencies for context (illustrative)',
		'Post-event documentation suitable for internal reporting',
	];

	const equivalencyCardsToRender = showEquivalencies ? equivalencyCards : [];
	const equivalencyDisclaimer = 'Equivalencies are provided for context and are not audited carbon claims.';
	const formattedLastSync = formatLastSync(siteConfig.lastSync);
	const lastUpdatedLabel = formattedLastSync ?? 'Last sync: unavailable';
	const quickAnswersCards = [
		{
			title: 'What happens to food scraps?',
			body: 'Captured on-site and managed through local processing pathways.',
			href: '#how-it-works',
			scrollTarget: 'how-it-works',
		},
		{
			title: 'How often does this update?',
			body: "Reporting updates automatically through BioGreen360's reporting system.",
			href: '#live-reporting',
			scrollTarget: 'live-reporting',
		},
		{
			title: 'Can my event receive a recap?',
			body: 'Qualifying events may request impact reporting, subject to availability and operational capacity.',
			href: '#events',
			scrollTarget: 'events',
			requiresEvents: true,
		},
		{
			title: 'How is this calculated?',
			body: 'See definitions, scope notes, and methodology details for how metrics and equivalencies are presented.',
			href: '#methodology',
			scrollTarget: 'methodology',
		},
	].filter((card) => (card.requiresEvents ? eventsEnabled : true));

	return (
		<Box
			data-page='circular-food-systems'
			sx={{
				minHeight: '100vh',
				backgroundColor: BG_WARM,
				'--bg-base': MAVEN_WHITE,
				'--bg-alt': BG_BAND,
				'--band-divider': LINE_MUTED,
				color: TEXT_DARK,
				fontFamily: FONT_BODY,
				lineHeight: 1.72,
				'& h1': {
					fontFamily: FONT_DISPLAY,
					letterSpacing: '-0.02em',
					fontWeight: 400,
					color: TEXT_DARK,
				},
				'& h2': {
					fontFamily: FONT_DISPLAY,
					letterSpacing: '-0.015em',
					fontWeight: 400,
					color: TEXT_DARK,
				},
				'& h3': {
					fontFamily: FONT_BODY,
					letterSpacing: '-0.012em',
					fontWeight: 500,
					color: TEXT_DARK,
				},
				'& .micro-label': {
					fontFamily: FONT_UI,
					fontSize: '11px',
					letterSpacing: '0.14em',
					textTransform: 'uppercase',
					fontWeight: 600,
					color: MUTED_GRAY,
				},
				'& .lux-link': {
					display: 'inline-flex',
					alignItems: 'center',
					gap: '0.3em',
					fontFamily: FONT_UI,
					fontWeight: 500,
					color: MAVEN_BLUE,
					textDecoration: 'none',
					textDecorationThickness: '1px',
					textUnderlineOffset: '3px',
					borderBottom: '1px solid transparent',
					transition:
						'color 180ms ease, border-color 180ms ease, text-decoration-color 180ms ease, text-decoration-thickness 180ms ease',
					'&:hover': {
						color: MAVEN_TAN,
						textDecoration: 'underline',
						textDecorationColor: 'rgba(175, 152, 110, 0.55)',
						textDecorationThickness: '1px',
						borderBottomColor: 'transparent',
					},
					'&:focus-visible': {
						outline: `2px solid ${MAVEN_TAN}`,
						outlineOffset: '3px',
						borderRadius: '2px',
					},
				},
				'& .lux-link--internal::after': {
					content: '"→"',
					fontSize: '0.9em',
					opacity: 0.85,
				},
				'& .lux-link--external::after': {
					content: '"↗"',
					fontSize: '0.86em',
					opacity: 0.85,
				},
				'& .lux-clickable': {
					position: 'relative',
					cursor: 'pointer',
					transition:
						'transform 220ms ease, border-color 220ms ease, box-shadow 220ms ease, color 220ms ease, font-weight 220ms ease',
					'&:hover': {
						transform: 'translateY(-1px)',
						boxShadow: '0 12px 28px rgba(57, 79, 113, 0.1)',
					},
					'&:focus-visible': {
						outline: `2px solid ${MAVEN_TAN}`,
						outlineOffset: '2px',
					},
					'& .lux-click-indicator': {
						opacity: 0,
						transition: 'opacity 220ms ease',
					},
					'&:hover .lux-click-indicator': {
						opacity: 0.8,
					},
				},
				'& .MuiButton-root': {
					fontFamily: FONT_UI,
					borderRadius: '999px',
					textTransform: 'uppercase',
					letterSpacing: '0.1em',
					fontWeight: 600,
					boxShadow: 'none',
					transition: 'transform 200ms ease, box-shadow 200ms ease, background-color 200ms ease, border-color 200ms ease',
					'&.MuiButton-contained': {
						backgroundColor: MAVEN_BLUE,
						color: MAVEN_WHITE,
						'&:hover': {
							backgroundColor: '#2f425c',
							boxShadow: '0 10px 24px rgba(57, 79, 113, 0.22)',
						},
					},
					'&.MuiButton-outlined': {
						color: TEXT_DARK,
						borderWidth: '1px',
						borderColor: MAVEN_TAN,
						backgroundColor: 'rgba(255, 252, 249, 0.5)',
						'&:hover': {
							borderColor: '#9c865c',
							backgroundColor: GREEN_SOFT,
							color: MAVEN_BLUE,
							boxShadow: 'none',
						},
					},
					'&:hover': {
						transform: 'translateY(-1px)',
					},
				},
			}}>
			<StickyHeader />

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
					<Typography className='micro-label' sx={{ mb: 2.25 }}>
						LIVE REPORTING. CLEAR DEFINITIONS.
					</Typography>
					<Typography
						component='h1'
						sx={{
							fontFamily: FONT_DISPLAY,
							fontSize: { xs: '2.3rem', sm: '3.1rem', md: '56px' },
							fontWeight: 400,
							color: TEXT_DARK,
							letterSpacing: '-0.02em',
							lineHeight: 1.12,
							mb: 2.5,
						}}>
						Sustainability, The Maven Way.
					</Typography>
					<Typography
						sx={{
							fontSize: '20px',
							fontWeight: 400,
							color: BODY_GRAY,
							mb: 0,
						}}>
						At The Maven, we believe great stays should leave a lasting impression—on you, not the
						planet—through thoughtful, local choices rooted in community and character. From partnering
						with neighborhood makers to reducing waste behind the scenes, we&apos;re committed to doing
						better together. Stay Bold. Stay Curious. Stay Thoughtful.
					</Typography>
					<Box sx={{ textAlign: 'center', maxWidth: 860, mx: 'auto', mt: { xs: 2.25, md: 2.5 } }}>
						<Typography className='micro-label' sx={{ mb: 0, lineHeight: 1.65 }}>
							PROPERTY-LEVEL DATA • METHODOLOGY AVAILABLE • EVENT REPORTING BY REQUEST
						</Typography>
					</Box>
				</Box>

				<Box sx={{ width: '100%', mt: { xs: 4, md: 5.5 }, mb: 0 }}>
					<Box
						component='img'
						alt='Farm with fresh produce'
						src='https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=1600&q=80'
						sx={{
							width: '100%',
							height: 'auto',
							borderRadius: RADIUS_CARD,
							objectFit: 'cover',
							maxHeight: 520,
							display: 'block',
							boxShadow: SHADOW_IMAGE,
						}}
					/>
				</Box>

				<Box
					sx={{
						maxWidth: 900,
						mx: 'auto',
						mt: { xs: 3, md: 3.5 },
						mb: { xs: 5, md: 6 },
					}}>
					<Box
						component='ul'
						sx={{
							listStyle: 'disc',
							maxWidth: 820,
							mx: 'auto',
							mb: 0,
							pl: 3,
							fontSize: '18px',
							lineHeight: 1.75,
							color: BODY_GRAY,
							textAlign: 'left',
							listStylePosition: 'outside',
						}}>
						<Box component='li'>
							<Box
								component='a'
								href='#live-impact-reporting'
								onClick={(event) => {
									event.preventDefault();
									scrollToSection('live-reporting');
								}}
								className='lux-link lux-link--internal'>
								Live reporting data
							</Box>{' '}
							is pulled from BioGreen360&apos;s reporting system.
						</Box>
						<Box component='li'>
							Food scraps captured on-site are managed through local processing pathways based on property
							operations and partner availability.
						</Box>
						<Box component='li'>
							Qualifying events may request impact reporting, subject to availability and operational
							capacity.{' '}
							<Box
								component='a'
								href='#events'
								onClick={(event) => {
									event.preventDefault();
									scrollToSection('events');
								}}
								className='lux-link lux-link--internal'>
								Learn more
							</Box>
						</Box>
					</Box>
				</Box>

				<Box sx={{ mt: { xs: 1, md: 2 } }}>
					<Typography
						component='h2'
						sx={{
							fontSize: { xs: '28px', md: '34px' },
							fontWeight: 500,
							mb: 2.25,
						}}>
						Quick Answers
					</Typography>
				</Box>
				<Box
					sx={{
						display: 'grid',
						gridTemplateColumns: {
							xs: '1fr',
							sm: 'repeat(2, minmax(0, 1fr))',
							xl: 'repeat(4, minmax(0, 1fr))',
						},
						gap: { xs: 1.75, sm: 2 },
					}}>
					{quickAnswersCards.map((card) => (
						<Box
							key={card.title}
							component='a'
							href={card.href}
							onClick={(event) => {
								event.preventDefault();
								scrollToSection(card.scrollTarget);
							}}
							sx={{
								textDecoration: 'none',
								color: 'inherit',
								backgroundColor: MAVEN_WHITE,
								border: `1px solid ${LINE_SUBTLE}`,
								borderRadius: RADIUS_CARD,
								p: { xs: 2, md: 2.25 },
								display: 'flex',
								flexDirection: 'column',
								justifyContent: 'space-between',
								minHeight: { xs: 140, md: 152 },
								cursor: 'pointer',
								transition: 'transform 200ms ease, border-color 200ms ease, outline-color 200ms ease',
								outline: '2px solid transparent',
								outlineOffset: '0px',
								'&:hover': {
									transform: 'scale(1.02)',
									borderColor: 'rgba(175, 152, 110, 0.45)',
									outlineColor: 'rgba(175, 152, 110, 0.5)',
								},
								'&:focus-visible': {
									transform: 'scale(1.02)',
									borderColor: 'rgba(175, 152, 110, 0.45)',
									outlineColor: 'rgba(175, 152, 110, 0.5)',
								},
								'@media (prefers-reduced-motion: reduce)': {
									transition: 'border-color 200ms ease, outline-color 200ms ease',
									'&:hover, &:focus-visible': {
										transform: 'none',
									},
								},
							}}>
							<Typography
								component='h3'
								sx={{
									fontSize: '20px',
									fontWeight: 500,
									letterSpacing: '-0.012em',
									lineHeight: 1.3,
									mb: 1,
								}}>
								{card.title}
							</Typography>
							<Typography sx={{ fontSize: '14px', color: BODY_GRAY, lineHeight: 1.65 }}>
								{card.body}
							</Typography>
						</Box>
					))}
				</Box>
			</Box>

			{/* Our Impact */}
			<Box
				id='impact'
				className='section section--alt'
				sx={{
					...sectionContainerSx,
					...sectionBandAltSx,
					scrollMarginTop: { xs: '90px', md: '104px' },
				}}>
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
							fontSize: { xs: '28px', md: '34px' },
							fontWeight: 500,
							color: TEXT_DARK,
						}}>
						Our Impact:
					</Typography>
					<Typography className='micro-label'>{`Last Updated: ${lastUpdatedLabel}`}</Typography>
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
						backgroundColor: 'rgba(175, 152, 110, 0.35)',
						mb: 2.5,
					}}
				/>

				<Box
					sx={{
						display: 'flex',
						flexWrap: 'wrap',
						alignItems: 'stretch',
						justifyContent: 'space-between',
						borderTop: `1px solid ${LINE_SUBTLE}`,
						borderBottom: `1px solid ${LINE_SUBTLE}`,
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
								borderRight: idx < 2 ? { xs: 'none', md: `1px solid ${LINE_SUBTLE}` } : 'none',
							}}>
							<Typography className='micro-label' sx={{ mb: 1 }}>
								{metric.eyebrow}
							</Typography>
							<Typography
								sx={{
									fontSize: { xs: '36px', sm: '48px' },
									fontWeight: 500,
									letterSpacing: '-0.02em',
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
					<Typography className='micro-label' sx={{ mb: 0.5 }}>
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
			<Box
				className='section section--base'
				sx={{ ...sectionContainerSx, ...sectionBandBaseSx }}>
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
							src={cornerstonePartnershipImage}
							alt='On-site food cycling partnership supporting circular food systems.'
							sx={{
								width: '100%',
								aspectRatio: '4 / 5',
								objectFit: 'cover',
								borderRadius: RADIUS_CARD,
								border: `1px solid ${LINE_MUTED}`,
								boxShadow: SHADOW_IMAGE,
							}}
						/>
					</Box>
					<Box>
						<Typography
							component='h2'
							sx={{
								fontSize: { xs: '28px', md: '34px' },
								fontWeight: 500,
								lineHeight: 1.25,
								mb: 1.5,
							}}>
							A Cornerstone Partnership with BioGreen360
						</Typography>
						<Typography sx={{ fontSize: '16px', color: MUTED_GRAY, maxWidth: 740, mb: 1.5 }}>
							A long-term collaboration uniting refined hospitality with measurable sustainability outcomes.
						</Typography>
						<Typography className='micro-label' sx={{ mb: 1.25 }}>
							At a Glance
						</Typography>
						<Box
							sx={{
								display: 'grid',
								gridTemplateColumns: { xs: '1fr', md: 'repeat(3, minmax(0, 1fr))' },
								borderTop: `1px solid ${LINE_MUTED}`,
								borderBottom: `1px solid ${LINE_MUTED}`,
								mb: 2,
							}}>
							{cornerstoneOverviewLinks.map((item, index) => (
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
										fontSize: '11.5px',
										color: BODY_GRAY,
										fontWeight: 500,
										position: 'relative',
										borderRight:
											index < 2 ? { xs: 'none', md: `1px solid ${LINE_MUTED}` } : 'none',
										fontFamily: FONT_UI,
										textTransform: 'uppercase',
										letterSpacing: '0.08em',
										'&:hover': {
											color: MAVEN_BLUE,
											fontWeight: 600,
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
						<Typography className='micro-label' sx={{ mb: 1.25 }}>
							Roles
						</Typography>
						<Box
							sx={{
								display: 'grid',
								gridTemplateColumns: { xs: '1fr', md: 'repeat(3, minmax(0, 1fr))' },
								gap: 2,
							}}>
							<Box>
								<Typography
									component='h3'
									sx={{
										fontSize: '22px',
										fontWeight: 500,
										lineHeight: 1.35,
										mb: 0.75,
									}}>
									Hotel Operations
								</Typography>
								<Box component='ul' sx={{ m: 0, pl: 2.1, color: BODY_GRAY }}>
									<Box component='li' sx={{ fontSize: '14px', lineHeight: 1.7, mb: 0.35 }}>
										Collects food scraps on-site as part of daily operations.
									</Box>
									<Box component='li' sx={{ fontSize: '14px', lineHeight: 1.7, mb: 0.35 }}>
										Maintains collection practices that fit guest and staff workflows.
									</Box>
									<Box component='li' sx={{ fontSize: '14px', lineHeight: 1.7 }}>
										Coordinates with partners based on on-property logistics.
									</Box>
								</Box>
							</Box>
							<Box>
								<Typography
									component='h3'
									sx={{
										fontSize: '22px',
										fontWeight: 500,
										lineHeight: 1.35,
										mb: 0.75,
									}}>
									BioGreen360
								</Typography>
								<Box component='ul' sx={{ m: 0, pl: 2.1, color: BODY_GRAY }}>
									<Box component='li' sx={{ fontSize: '14px', lineHeight: 1.7, mb: 0.35 }}>
										Provides the measurement and reporting system used for this page.
									</Box>
									<Box component='li' sx={{ fontSize: '14px', lineHeight: 1.7, mb: 0.35 }}>
										Supports program setup, tracking, and reporting consistency.
									</Box>
									<Box component='li' sx={{ fontSize: '14px', lineHeight: 1.7 }}>
										Helps standardize definitions and scope notes across properties.
									</Box>
								</Box>
							</Box>
							<Box>
								<Typography
									component='h3'
									sx={{
										fontSize: '22px',
										fontWeight: 500,
										lineHeight: 1.35,
										mb: 0.75,
									}}>
									Local Processing Partners
								</Typography>
								<Box component='ul' sx={{ m: 0, pl: 2.1, color: BODY_GRAY }}>
									<Box component='li' sx={{ fontSize: '14px', lineHeight: 1.7, mb: 0.35 }}>
										Convert collected scraps into local composting / soil pathways where possible.
									</Box>
									<Box component='li' sx={{ fontSize: '14px', lineHeight: 1.7, mb: 0.35 }}>
										Processing pathways vary by property equipment and local logistics.
									</Box>
									<Box component='li' sx={{ fontSize: '14px', lineHeight: 1.7 }}>
										End uses and availability may vary by season and partner capacity.
									</Box>
								</Box>
							</Box>
						</Box>
					</Box>
				</Box>
			</Box>

			{/* How it Works */}
			{/* NOTE: Main How It Works section (below Partnership) */}
			<Box
				id='how-it-works'
				className='section section--alt'
				sx={{ ...sectionContainerSx, ...sectionBandAltSx, scrollMarginTop: { xs: '80px', md: '96px' } }}>
				<Typography
					component='h2'
					sx={{
						fontSize: { xs: '28px', md: '34px' },
						fontWeight: 500,
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
					{primaryProcessingSteps.map((step, index) => (
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
										border: `1px solid rgba(57, 79, 113, 0.2)`,
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
				<Typography sx={{ fontSize: '12px', color: MUTED_GRAY, textAlign: 'center', mt: 1.5, fontFamily: FONT_UI }}>
					Processing pathways vary by property. See scope notes in{' '}
					<Box component='a' href='#methodology' className='lux-link' sx={{ fontSize: 'inherit' }}>
						Methodology
					</Box>
					.
				</Typography>
				<Box
					sx={{
						mt: { xs: 5, md: 7 },
						display: 'grid',
						gridTemplateColumns: { xs: '1fr', md: 'minmax(0, 1fr) minmax(0, 1fr)' },
						gap: { xs: 3, md: 4.5 },
						alignItems: 'stretch',
					}}>
					<Box>
						{/* Placeholder image source; replace with approved local partner photo. */}
						<Box
							component='img'
							src='https://images.unsplash.com/photo-1523741543316-beb7fc7023d8?w=1400&q=80'
							alt='Local composting partner site with soil amendment piles'
							sx={{
								width: '100%',
								aspectRatio: { xs: '16 / 10', md: '4 / 3' },
								objectFit: 'cover',
								borderRadius: RADIUS_CARD,
								border: `1px solid ${LINE_SUBTLE}`,
								boxShadow: SHADOW_IMAGE,
								display: 'block',
							}}
						/>
					</Box>
					<Box>
						<Typography className='micro-label' sx={{ mb: 1 }}>
							LOCAL PROCESSING PARTNER
						</Typography>
						<Typography
							component='h3'
							sx={{
								fontSize: { xs: '26px', md: '30px' },
								fontWeight: 500,
								letterSpacing: '-0.015em',
								lineHeight: 1.3,
								mb: 1.5,
								color: TEXT_DARK,
							}}>
							From Food Scraps to Soil Amendments
						</Typography>
						<Typography sx={{ fontSize: '15px', color: BODY_GRAY, lineHeight: 1.75, mb: 1.2 }}>
							Food scraps captured at the property are brought to a local composting partner that
							processes organic material into soil amendments for beneficial local use.
						</Typography>
						<Typography sx={{ fontSize: '15px', color: BODY_GRAY, lineHeight: 1.75, mb: 1.2 }}>
							BioGreen360 helps track materials through the process and can work with the property to
							help identify where those soil outputs are used, depending on partner reporting and local
							program availability.
						</Typography>
						<Typography sx={{ fontSize: '15px', color: BODY_GRAY, lineHeight: 1.75, mb: 2 }}>
							Local processing partners and end uses vary by property. Add the partner name, site
							details, and approved website link below when available.
						</Typography>
						<Box
							sx={{
								backgroundColor: MAVEN_WHITE,
								border: `1px solid ${LINE_SUBTLE}`,
								borderRadius: RADIUS_CARD,
								px: { xs: 1.5, md: 2 },
								py: { xs: 1.25, md: 1.5 },
								mb: 1.4,
							}}>
							<Typography sx={{ fontSize: '13px', color: BODY_GRAY, lineHeight: 1.65 }}>
								Partner: [insert local composting partner]
							</Typography>
							<Typography sx={{ fontSize: '13px', color: BODY_GRAY, lineHeight: 1.65 }}>
								Location: [insert city, state]
							</Typography>
							<Typography sx={{ fontSize: '13px', color: BODY_GRAY, lineHeight: 1.65 }}>
								End-use examples: [insert farms, landscaping, restoration, gardens, etc.]
							</Typography>
						</Box>
						<Box
							component='a'
							href='[insert partner website]'
							target='_blank'
							rel='noopener noreferrer'
							className='lux-link lux-link--external'>
							Visit partner website
						</Box>
					</Box>
				</Box>
			</Box>

			{/* Live Sustainability Impact Reporting */}
			<Box
				id='live-reporting'
				className='section section--base live-reporting-section lsir-section'
				sx={{
					...sectionContainerSx,
					...sectionBandBaseSx,
					scrollMarginTop: { xs: '80px', md: '96px' },
					'& .lsir-card-value': { color: TEXT_DARK },
				}}>
				<Typography
					component='h2'
					sx={{
						fontSize: { xs: '28px', md: '34px' },
						fontWeight: 500,
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
					<Typography sx={{ fontSize: '14px', color: MUTED_GRAY }}>
						Live reporting data is provided through BioGreen360&apos;s reporting system.
					</Typography>
					<Box
						component='a'
						href='#methodology'
						className='lux-link lux-link--internal'
						sx={{
							fontSize: '12px',
						}}>
						Methodology
					</Box>
				</Box>
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
								backgroundColor: MAVEN_WHITE,
								border: '1px solid',
								borderColor: 'rgba(57, 79, 113, 0.18)',
								borderRadius: RADIUS_CARD,
								p: { xs: 2.5, md: 3 },
								minHeight: 220,
								display: 'flex',
								flexDirection: 'column',
								justifyContent: 'center',
								textAlign: 'center',
								boxShadow: SHADOW_CARD,
							}}>
							<Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: 1.25 }}>
								<Typography
									className='micro-label lsir-card-title'
									sx={{ mb: 0 }}>
									{tile.title}
								</Typography>
								{tile.title === 'All-Time Climate Impact (CO₂e)' && (
									<Typography
										sx={{
											fontSize: '11px',
											letterSpacing: '0.09em',
											textTransform: 'uppercase',
											color: MUTED_GRAY,
											mb: 0.85,
										}}>
										Illustrative equivalency
									</Typography>
								)}
								<Typography
									component='h3'
									className='lsir-card-value'
									sx={{
										fontSize: { xs: '28px', md: '32px' },
										fontWeight: 500,
										letterSpacing: '-0.015em',
										lineHeight: 1.25,
										mb: 0,
									}}>
									{tile.value}
								</Typography>
							</Box>
						</Box>
					))}
					{equivalencyCardsToRender.map((card) => {
						const Icon = card.icon;
						return (
							<Box
								key={card.value}
								sx={{
									backgroundColor: MAVEN_WHITE,
									border: '1px solid',
									borderColor: 'rgba(57, 79, 113, 0.18)',
									borderRadius: RADIUS_CARD,
									p: { xs: 2.5, md: 3 },
									minHeight: 220,
									display: 'flex',
									flexDirection: 'column',
									textAlign: 'center',
									boxShadow: SHADOW_CARD,
								}}>
								<Typography className='micro-label lsir-card-title' sx={{ mb: 1.25 }}>
									{card.label}
								</Typography>
								<Typography sx={{ fontSize: '11px', letterSpacing: '0.09em', textTransform: 'uppercase', color: MUTED_GRAY, mb: 0.85 }}>
									Illustrative equivalency
								</Typography>
								<Typography
									component='h3'
									className='lsir-card-value'
									sx={{
										fontSize: { xs: '28px', md: '32px' },
										fontWeight: 500,
										letterSpacing: '-0.015em',
										lineHeight: 1.25,
										mb: 1.5,
									}}>
									{card.value}
								</Typography>
								<Icon
									sx={{
										fontSize: { xs: 56, md: 64 },
										color: 'rgba(57, 79, 113, 0.42)',
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
					{equivalencyDisclaimer}
				</Typography>
			</Box>

			{/* Zero Food Waste Events */}
			<Box
				id='events'
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
								fontSize: { xs: '28px', md: '34px' },
								fontWeight: 500,
								mb: 1,
							}}>
							Zero Food Waste Events
						</Typography>
						<Box sx={{ width: 84, height: '2px', backgroundColor: GREEN_PRIMARY, mb: 1.5 }} />
						<Typography sx={{ fontSize: '16px', fontWeight: 400, color: BODY_GRAY, lineHeight: 1.8, mb: 1 }}>
							Qualifying meetings and group events may request food-waste tracking and a post-event
							recap. Availability depends on scheduling and operational capacity.
						</Typography>
						<Typography sx={{ fontSize: '16px', fontWeight: 400, color: BODY_GRAY, lineHeight: 1.8 }}>
							Food scraps from participating events are captured on-site and managed through local
							processing pathways where possible. After the event, your team may receive a concise recap
							with diversion totals and clear scope notes.
						</Typography>
					</Box>

					<Box
						component='img'
						src={zeroFoodWasteEventsImage}
						alt='Hotel event space configured for a sustainable event.'
						sx={{
							width: '100%',
							aspectRatio: '16 / 8',
							objectFit: 'cover',
							borderRadius: RADIUS_CARD,
							border: `1px solid ${LINE_MUTED}`,
							boxShadow: SHADOW_IMAGE,
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
								fontSize: { xs: '26px', md: '30px' },
								fontWeight: 500,
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
							{eventFlowSteps.map((step, idx) => (
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
											border: `1px solid rgba(57, 79, 113, 0.2)`,
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
												fontWeight: 500,
												letterSpacing: '-0.015em',
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
							border: `1px solid ${LINE_SUBTLE}`,
							borderRadius: '26px',
							p: { xs: 2, md: 2.5 },
							alignSelf: { xs: 'stretch', md: 'center' },
							boxShadow: SHADOW_CARD,
						}}>
						<Typography
							component='h3'
							sx={{
								fontSize: '22px',
								fontWeight: 500,
								mb: 1.1,
								letterSpacing: '-0.012em',
							}}>
							What Event Planners Receive:
						</Typography>
						<Box component='ul' sx={{ m: 0, pl: 2.1, color: BODY_GRAY }}>
							{eventPlannerDeliverables.map((item) => (
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
							fontWeight: 600,
							letterSpacing: '0.08em',
							color: MAVEN_WHITE,
							backgroundColor: MAVEN_BLUE,
							borderRadius: '9999px',
							boxShadow: 'none',
							'&:hover': { backgroundColor: '#2f425c', boxShadow: 'none' },
						}}>
						Inquire About Event Tracking
					</Button>
					<Typography sx={{ fontSize: '12px', color: MUTED_GRAY, mt: 0.75 }}>
						Tracking is available for qualifying events, subject to operational capacity.
					</Typography>
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
						<Typography sx={{ fontSize: '12px', color: MUTED_GRAY, mt: 0.45 }}>
							Sample shown for illustration. Deliverables may vary by event type and availability.
						</Typography>
					</Box>
				</Box>
			</Box>

			{/* Community Impact */}
			<Box
				id='community'
				className='section section--base'
				sx={{
					...sectionContainerSx,
					...sectionBandBaseSx,
					scrollMarginTop: { xs: '90px', md: '104px' },
				}}>
				<Typography
					component='h2'
					sx={{
						fontSize: { xs: '28px', md: '34px' },
						fontWeight: 500,
						mb: 1.25,
					}}>
					Community Impact and Local Partnerships
				</Typography>
				<Typography sx={{ fontSize: '16px', color: MUTED_GRAY, mb: 3.5 }}>
					Keeping impact local by supporting Boulder-focused programs, education, and long-term community
					resilience.
				</Typography>
				<Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', md: 'repeat(2, minmax(0, 1fr))' }, gap: 2 }}>
					{[
						{
							title: 'Soil Support for Local Nonprofit Partners',
							copy: 'When available, a portion of program outputs may be provided to local partners for community soil and restoration projects, where operationally appropriate.',
							image:
								'https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=1400&q=80',
							alt: 'Community members planting in a local garden focused on soil restoration.',
						},
						{
							title: 'Supporting On-Site / Local Garden Programs',
							copy: 'Where available, program outputs may contribute to on-site or local garden initiatives that connect guests and teams to circular hospitality.',
							image:
								'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=1400&q=80',
							alt: 'Chef harvesting herbs from an on-site garden program.',
						},
					].map((story) => (
						<Box
							key={story.title}
							sx={{
								backgroundColor: MAVEN_WHITE,
								border: `1px solid ${LINE_SUBTLE}`,
								borderRadius: RADIUS_CARD,
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
									border: `1px solid ${LINE_SUBTLE}`,
								}}
							/>
							<Typography component='h3' sx={{ fontSize: '24px', fontWeight: 500, letterSpacing: '-0.012em', mb: 1 }}>
								{story.title}
							</Typography>
							<Typography sx={{ fontSize: '15px', color: BODY_GRAY, lineHeight: 1.7 }}>{story.copy}</Typography>
						</Box>
					))}
				</Box>
				<Typography sx={{ fontSize: '12px', color: MUTED_GRAY, mt: 1.25 }}>
					Partner participation and allocation may vary by property and season.
				</Typography>
				<Box
					sx={{
						mt: 2,
						backgroundColor: GREEN_SOFT,
						borderRadius: RADIUS_CARD,
						px: 2,
						py: 1.5,
						display: 'inline-flex',
						border: `1px solid ${LINE_MUTED}`,
					}}>
					<Typography sx={{ fontSize: '14px', color: BODY_GRAY, fontFamily: FONT_UI, letterSpacing: '0.04em' }}>
						Upcoming Community Engagement - Earth Day 2026
					</Typography>
				</Box>
			</Box>

			{/* Additional Sustainability Initiatives */}
			<Box
				id='initiatives'
				className='section section--alt'
				sx={{
					...sectionContainerSx,
					...sectionBandAltSx,
					scrollMarginTop: { xs: '90px', md: '104px' },
				}}>
				<Typography
					component='h2'
					sx={{
						fontSize: { xs: '28px', md: '34px' },
						fontWeight: 500,
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
									borderRadius: RADIUS_CARD,
								border: `1px solid ${LINE_MUTED}`,
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
							borderWidth: '1px',
							borderColor: MAVEN_TAN,
							borderRadius: '9999px',
							'&:hover': {
								borderColor: '#9c865c',
								backgroundColor: GREEN_SOFT,
								color: MAVEN_BLUE,
							},
						}}>
						Contact our Sales team to Learn More
					</Button>
				</Box>
			</Box>

			{/* Methodology / Transparency */}
			<Box
				id='methodology'
				sx={{
					backgroundColor: BG_BAND,
					borderTop: `1px solid ${LINE_SUBTLE}`,
					borderBottom: `1px solid ${LINE_SUBTLE}`,
					scrollMarginTop: { xs: '80px', md: '96px' },
				}}>
				<Box sx={sectionContainerSx}>
					<Typography
						component='h2'
						sx={{
							fontSize: { xs: '28px', md: '34px' },
							fontWeight: 500,
							mb: 1.5,
						}}>
						Methodology and Reporting
					</Typography>
					<Typography sx={{ fontSize: '15px', color: BODY_GRAY, lineHeight: 1.8, maxWidth: 1040, mb: 1.25 }}>
						These metrics combine measured on-site inputs with standard conversion factors. Definitions and
						scope notes are provided for clarity.
					</Typography>
					<Typography sx={{ fontSize: '15px', color: BODY_GRAY, lineHeight: 1.8, maxWidth: 1040, mb: 1.25 }}>
						Metrics combine measured on-site inputs with standard conversion factors to estimate diversion,
						soil output, and climate equivalencies.
					</Typography>
					<Typography sx={{ fontSize: '15px', color: BODY_GRAY, lineHeight: 1.8, maxWidth: 1040, mb: 2 }}>
						Where possible, values reflect property-level activity. Equivalencies are directional and provided
						for context-not audited carbon claims.
					</Typography>

					<Typography component='h3' sx={{ fontSize: '24px', fontWeight: 500, letterSpacing: '-0.012em', mb: 1 }}>
						How to Read These Metrics
					</Typography>
					<Box component='ul' sx={{ m: 0, pl: 2.25, color: BODY_GRAY, mb: 2 }}>
						<Box component='li' sx={{ fontSize: '14px', lineHeight: 1.8 }}>
							Food scrap diversion is based on measured on-site capture and processing volumes.
						</Box>
						<Box component='li' sx={{ fontSize: '14px', lineHeight: 1.8 }}>
							Soil amendment output is estimated using operating conversion assumptions.
						</Box>
						<Box component='li' sx={{ fontSize: '14px', lineHeight: 1.8 }}>
							CO2e equivalencies are illustrative and use standardized public reference factors.
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
							component='a'
							href={siteConfig.bookingUrl}
							variant='contained'
							sx={{
								px: 3,
								py: 1.15,
								fontSize: '0.84rem',
								fontWeight: 600,
								letterSpacing: '0.08em',
								color: MAVEN_WHITE,
								backgroundColor: MAVEN_BLUE,
								boxShadow: 'none',
								borderRadius: '9999px',
								'&:hover': { backgroundColor: '#2f425c', boxShadow: 'none' },
							}}>
							Book a Room
						</Button>
						{restaurantEnabled && (
							<Button
								component='a'
								href={siteConfig.reservationUrl}
								variant='text'
								sx={{
									px: 2,
									fontSize: '0.84rem',
									fontWeight: 600,
									letterSpacing: '0.08em',
									color: MAVEN_BLUE,
									textTransform: 'uppercase',
									textDecoration: 'none',
									borderBottom: '1px solid rgba(175, 152, 110, 0.45)',
									borderRadius: 0,
									'&:hover': {
										color: MAVEN_TAN,
										backgroundColor: 'transparent',
										borderBottomColor: 'rgba(175, 152, 110, 0.75)',
									},
								}}>
								Reserve a table
							</Button>
						)}
					</Box>
				</Box>
			</Box>
		</Box>
	);
};

export default CircularFoodSystems;
