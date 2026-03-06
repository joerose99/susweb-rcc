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
import limelightBoulderLogo from '../../assets/limelight-boulder-logo.png';
import zeroFoodWasteEventsImage from '../../assets/zero-food-waste-events.png';
import cornerstonePartnershipImage from '../../assets/cornerstone-partnership.png';
import StickyHeader from '../../components/StickyHeader';

const GREEN_PRIMARY = '#8D9A73';
const GREEN_SOFT = '#F5F5F3';
const GREEN_BORDER = '#22221F';
const BG_WARM = '#FAFAF8';
const BG_BAND = '#F4F4F2';
const TEXT_DARK = '#1A1A18';
const BODY_GRAY = '#363633';
const MUTED_GRAY = '#666661';
const SECTION_PY = { xs: '60px', md: '78px' };
const CONTENT_MAX = 1320;
const siteConfig = {
	eventsEnabled: true,
	restaurantEnabled: true,
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

// const eventFlow = [
// 	'During your event: food scraps captured on-site',
// 	'On-site processing & tracking',
// 	'Post-event impact summary and reporting',
// ];

// const plannerDeliverables = [
// 	'Event-specific diversion summary',
// 	'Estimated CO₂e impact',
// 	'Soil/compost output estimates (where applicable)',
// 	'Share-ready reporting highlights',
// ];

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

// const parseMetricValue = (metricValue, fallbackTimeframe = 'all-time') => {
// 	const rawValue = String(metricValue ?? '').trim();
// 	const withTimeframe = rawValue.match(/^(.+?)\s+([A-Za-z]+)\s+per\s+(week|month)$/i);
// 	if (withTimeframe) {
// 		return {
// 			value: withTimeframe[1].trim(),
// 			unit: withTimeframe[2].trim(),
// 			timeframe: `per ${withTimeframe[3].toLowerCase()}`,
// 		};
// 	}
//
// 	const withUnitOnly = rawValue.match(/^(.+?)\s+([A-Za-z]+)$/);
// 	if (withUnitOnly) {
// 		return {
// 			value: withUnitOnly[1].trim(),
// 			unit: withUnitOnly[2].trim(),
// 			timeframe: fallbackTimeframe,
// 		};
// 	}
//
// 	return {
// 		value: rawValue,
// 		unit: '',
// 		timeframe: fallbackTimeframe,
// 	};
// };

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
		eventTrackingMode,
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

	const eventTrackingCopyByMode = {
		by_request: {
			eventRecap:
				'After each event, your team receives a concise impact recap with diversion totals and clear equivalencies.',
			plannerSummary:
				'Clients receive an event-specific impact summary outlining estimated food waste diversion and carbon impact.',
			eventsCtaLabel: 'CONTACT OUR EVENTS TEAM',
		},
		always_on: {
			eventRecap:
				'Impact recaps are automatically shared after each event with diversion totals and clear equivalencies.',
			plannerSummary:
				'Clients receive automated event-specific impact summaries outlining estimated food waste diversion and carbon impact.',
			eventsCtaLabel: 'CONNECT WITH OUR EVENTS TEAM',
		},
		manual: {
			eventRecap:
				'Impact recaps are available on request, including diversion totals and clear equivalencies.',
			plannerSummary:
				'Clients can request an event-specific impact summary outlining estimated food waste diversion and carbon impact.',
			eventsCtaLabel: 'REQUEST EVENT SUPPORT',
		},
	};

	const processingCopy =
		processingCopyByMode[processingPathwayMode] ?? processingCopyByMode.mixed;
	const eventTrackingCopy =
		eventTrackingCopyByMode[eventTrackingMode] ?? eventTrackingCopyByMode.by_request;

	const cornerstoneOverviewLinks = [
		{ label: processingCopy.overviewLabel, target: 'how-it-works' },
		{ label: 'PROPERTY-LEVEL MEASUREMENT', target: 'live-impact-reporting' },
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
			label: 'Food scraps are collected',
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
			label: processingCopy.howItWorksProcessingLabel,
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
			label: 'Returned to soil locally to support growth',
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
			label: 'Transparent reporting shared with stakeholders',
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
			title: 'On-Site Processing & Tracking',
			description: processingCopy.eventProcessingDescription,
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
			description: eventTrackingCopy.plannerSummary,
		},
	];

	const eventPlannerDeliverables = [
		'Event specific food-waste diversion summary',
		'Estimated CO₂e impact metrics for stakeholder reporting',
		'Post-event sustainability documentation suitable for internal reporting and stakeholder communications',
	];

	const eventsPrimaryCtaLabel = eventsEnabled
		? eventTrackingCopy.eventsCtaLabel
		: 'CONTACT OUR SUSTAINABILITY TEAM';
	const sustainabilityTeamCtaLabel = restaurantEnabled
		? 'Contact Our Sustainability Team'
		: 'Contact Our Team';
	const methodologyTeamCtaLabel = restaurantEnabled
		? 'Inquire with Our Sustainability Team'
		: 'Inquire with Our Team';
	const equivalencyCardsToRender = showEquivalencies ? equivalencyCards : [];
	const equivalencyDisclaimer = showEquivalencies
		? 'Equivalencies are provided for context and are not audited carbon claims.'
		: 'Impact estimates are directional and are not audited carbon claims.';
	const formattedLastSync = formatLastSync(siteConfig.lastSync);
	const lastUpdatedLabel = formattedLastSync ?? 'Last sync: unavailable';
	// const heroBulletLastSync = formattedLastSync
	// 	? `last sync: ${formattedLastSync}`
	// 	: 'Last sync: unavailable';
	const trustLineLastSync = formattedLastSync ?? 'unavailable';
	// const weeklyFoodScrapMetric = reportingTiles.find(
	// 	(tile) =>
	// 		/weekly/i.test(tile.title) &&
	// 		/food scrap/i.test(tile.title) &&
	// 		/\blbs\b/i.test(tile.value),
	// );
	// const allTimeFoodScrapMetric = impactMetrics.find(
	// 	(metric) =>
	// 		/food scraps diverted/i.test(metric.eyebrow) &&
	// 		/\btons?\b/i.test(metric.value),
	// );
	// const monthlyFoodScrapMetric = reportingTiles.find(
	// 	(tile) =>
	// 		/per month/i.test(tile.value) &&
	// 		/food scrap/i.test(tile.title),
	// );
	//
	// const headlineMetricSource =
	// 	weeklyFoodScrapMetric ??
	// 	allTimeFoodScrapMetric ??
	// 	monthlyFoodScrapMetric;
	// const headlineMetric = parseMetricValue(
	// 	headlineMetricSource?.value ?? '',
	// 	headlineMetricSource === allTimeFoodScrapMetric ? 'all-time' : undefined,
	// );
	// const propertyTotalsSummary = [
	// 	headlineMetric.value,
	// 	headlineMetric.unit,
	// 	headlineMetric.timeframe,
	// ]
	// 	.filter(Boolean)
	// 	.join(' ');

	return (
		<Box
			data-page='circular-food-systems'
			sx={{
				minHeight: '100vh',
				backgroundColor: BG_WARM,
				'--bg-base': BG_WARM,
				'--bg-alt': '#F7F7F5',
				'--band-divider': 'rgba(26,26,24,0.08)',
				color: TEXT_DARK,
				fontFamily: '"Inter", sans-serif',
				lineHeight: 1.72,
				'& h1, & h2, & h3': {
					fontFamily: '"Inter", sans-serif',
					letterSpacing: '-0.015em',
					fontWeight: 500,
					color: TEXT_DARK,
				},
				'& .micro-label': {
					fontSize: '11px',
					letterSpacing: '0.11em',
					textTransform: 'uppercase',
					fontWeight: 600,
					color: MUTED_GRAY,
				},
				'& .lux-link': {
					display: 'inline-flex',
					alignItems: 'center',
					gap: '0.3em',
					fontWeight: 500,
					color: 'rgba(54,54,51,0.95)',
					textDecoration: 'underline',
					textDecorationColor: 'rgba(54,54,51,0.45)',
					textDecorationThickness: '1px',
					textUnderlineOffset: '3px',
					transition:
						'color 200ms ease, text-decoration-color 200ms ease, text-decoration-thickness 200ms ease',
					'&:hover': {
						color: TEXT_DARK,
						textDecorationColor: GREEN_PRIMARY,
						textDecorationThickness: '2px',
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
						borderColor: 'rgba(141,154,115,0.5)',
						boxShadow: '0 10px 20px rgba(26,26,24,0.08)',
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
				'& .MuiButton-root': {
					borderRadius: '999px',
					textTransform: 'uppercase',
					letterSpacing: '0.08em',
					fontWeight: 600,
					boxShadow: 'none',
					transition: 'transform 200ms ease, box-shadow 200ms ease, background-color 200ms ease',
					'&:hover': {
						transform: 'translateY(-1px)',
						boxShadow: '0 8px 18px rgba(26,26,24,0.08)',
					},
				},
			}}>
			<StickyHeader logoSrc={limelightBoulderLogo} logoAlt='Limelight Boulder' />

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
							fontFamily: '"Inter", sans-serif',
							fontSize: { xs: '2.3rem', sm: '3.1rem', md: '56px' },
							fontWeight: 500,
							color: TEXT_DARK,
							letterSpacing: '-0.02em',
							lineHeight: 1.12,
							mb: 2.5,
						}}>
						Our Environmental Commitment, Verified.
					</Typography>
					<Typography
						sx={{
							fontFamily: '"Inter", sans-serif',
							fontSize: '20px',
							fontWeight: 400,
							color: BODY_GRAY,
							mb: 1.5,
						}}>
						Food not eaten is captured on-site and tracked through verified local partners, with shareable
						live reporting capabilities.
					</Typography>
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
									scrollToSection('live-impact-reporting');
								}}
								className='lux-link lux-link--internal'>
								Live reporting data
							</Box>{' '}
							pulled from BioGreen360&apos;s reporting system.
						</Box>
						<Box component='li'>
							Food not eaten on property is converted to soil amendments in the local community where
							possible.
						</Box>
						<Box component='li'>
							Qualifying events can receive an environmental impact report.{' '}
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

				<Box sx={{ textAlign: 'center', maxWidth: 860, mx: 'auto', mt: 1.5 }}>
					<Typography className='micro-label' sx={{ mb: 0 }}>
						{`Live data feed • Last sync: ${trustLineLastSync} • Methodology available • Full impact report downloadable`}
					</Typography>
				</Box>

				<Box sx={{ width: '100%', mt: { xs: 5, md: 7 }, mb: { xs: 5, md: 6 } }}>
					<Box
						component='img'
						alt='Farm with fresh produce'
						src='https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=1600&q=80'
						sx={{
							width: '100%',
							height: 'auto',
							borderRadius: '14px',
							objectFit: 'cover',
							maxHeight: 520,
							display: 'block',
							boxShadow: '0 14px 28px rgba(0,0,0,0.09)',
						}}
					/>
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
							fontFamily: '"Inter", sans-serif',
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
						backgroundColor: 'rgba(141,154,115,0.5)',
						mb: 2.5,
					}}
				/>

				<Box
					sx={{
						display: 'flex',
						flexWrap: 'wrap',
						alignItems: 'stretch',
						justifyContent: 'space-between',
						borderTop: '1px solid rgba(26,26,24,0.12)',
						borderBottom: '1px solid rgba(26,26,24,0.12)',
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
								borderRight: idx < 2 ? { xs: 'none', md: '1px solid rgba(26,26,24,0.14)' } : 'none',
							}}>
							<Typography className='micro-label' sx={{ mb: 1 }}>
								{metric.eyebrow}
							</Typography>
							<Typography
								sx={{
									fontFamily: '"Inter", sans-serif',
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
								borderRadius: '14px',
								border: '1px solid rgba(26,26,24,0.09)',
								boxShadow: '0 10px 22px rgba(26,26,24,0.07)',
							}}
						/>
					</Box>
					<Box>
						<Typography
							component='h2'
							sx={{
								fontFamily: '"Inter", sans-serif',
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
								borderTop: '1px solid rgba(46,45,51,0.08)',
								borderBottom: '1px solid rgba(46,45,51,0.08)',
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
							{` ${processingCopy.partnershipNarrative} `}The result is a program that supports waste
							reduction without compromising the guest experience.
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
						fontFamily: '"Inter", sans-serif',
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
									border: '1px solid rgba(26,26,24,0.22)',
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
						fontFamily: '"Inter", sans-serif',
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
				<Typography className='micro-label' sx={{ mb: 3 }}>
					{`Last Updated: ${lastUpdatedLabel}`}
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
								border: '1px solid rgba(26,26,24,0.1)',
								borderRadius: '14px',
								p: { xs: 2.5, md: 3 },
								minHeight: 220,
								display: 'flex',
								flexDirection: 'column',
								justifyContent: 'center',
								textAlign: 'center',
								boxShadow: '0 8px 22px rgba(26,26,24,0.05)',
							}}>
							<Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: 1.25 }}>
								<Typography
									className='micro-label'
									sx={{ mb: 0 }}>
									{tile.title}
								</Typography>
								<Typography
									component='h3'
									sx={{
										fontFamily: '"Inter", sans-serif',
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
									backgroundColor: '#FFFFFF',
									border: '1px solid rgba(26,26,24,0.1)',
									borderRadius: '14px',
									p: { xs: 2.5, md: 3 },
									minHeight: 220,
									display: 'flex',
									flexDirection: 'column',
									textAlign: 'center',
									boxShadow: '0 8px 22px rgba(26,26,24,0.05)',
								}}>
								<Typography className='micro-label' sx={{ mb: 1.25 }}>
									{card.label}
								</Typography>
								<Typography
									component='h3'
									sx={{
										fontFamily: '"Inter", sans-serif',
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
										color: 'rgba(34,34,31,0.72)',
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
								fontFamily: '"Inter", sans-serif',
								fontSize: { xs: '28px', md: '34px' },
								fontWeight: 500,
								mb: 1,
							}}>
							Zero Food Waste Events
						</Typography>
						<Typography sx={{ fontSize: '16px', fontWeight: 400, color: BODY_GRAY, lineHeight: 1.8, mb: 1.25 }}>
							Measurable sustainability for meetings, conferences, and group events.
						</Typography>
						<Box sx={{ width: 84, height: '2px', backgroundColor: GREEN_PRIMARY, mb: 1.5 }} />
						<Typography sx={{ fontSize: '16px', fontWeight: 400, color: BODY_GRAY, lineHeight: 1.8, mb: 1 }}>
							Limelight Boulder offers Zero Food Waste Events for meetings and conferences in one of
							Boulder&apos;s largest event venues-right in the heart of downtown.
						</Typography>
						<Typography sx={{ fontSize: '16px', fontWeight: 400, color: BODY_GRAY, lineHeight: 1.8 }}>
							{processingCopy.eventOverview} {eventTrackingCopy.eventRecap}
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
							borderRadius: '14px',
							border: '1px solid rgba(26,26,24,0.09)',
							boxShadow: '0 10px 22px rgba(26,26,24,0.07)',
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
								fontFamily: '"Inter", sans-serif',
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
											border: '1px solid rgba(26,26,24,0.22)',
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
												fontFamily: '"Inter", sans-serif',
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
							border: '1px solid rgba(26,26,24,0.2)',
							borderRadius: '26px',
							p: { xs: 2, md: 2.5 },
							alignSelf: { xs: 'stretch', md: 'center' },
							boxShadow: '0 8px 20px rgba(26,26,24,0.06)',
						}}>
						<Typography
							component='h3'
							sx={{
								fontFamily: '"Inter", sans-serif',
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
							fontWeight: 500,
							letterSpacing: '0.06em',
							color: '#FFFFFF',
							backgroundColor: GREEN_BORDER,
							borderRadius: '9999px',
							boxShadow: 'none',
							'&:hover': { backgroundColor: TEXT_DARK, boxShadow: 'none' },
						}}>
						{eventsPrimaryCtaLabel}
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
						fontFamily: '"Inter", sans-serif',
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
							copy: 'A portion of generated soil amendment supports local restoration and growing efforts, where seasonally and operationally appropriate.',
							image:
								'https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=1400&q=80',
							alt: 'Community members planting in a local garden focused on soil restoration.',
						},
						{
							title: 'Supporting On-Site / Local Garden Programs',
							copy: 'Program outputs can contribute to on-site and local garden initiatives that connect guests and teams to circular hospitality in Boulder.',
							image:
								'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=1400&q=80',
							alt: 'Chef harvesting herbs from an on-site garden program.',
						},
					].map((story) => (
						<Box
							key={story.title}
							sx={{
								backgroundColor: '#FFFFFF',
								border: '1px solid rgba(26,26,24,0.1)',
								borderRadius: '14px',
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
								border: '1px solid rgba(26,26,24,0.14)',
								}}
							/>
							<Typography component='h3' sx={{ fontFamily: '"Inter", sans-serif', fontSize: '24px', fontWeight: 500, letterSpacing: '-0.012em', mb: 1 }}>
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
						fontFamily: '"Inter", sans-serif',
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
									borderRadius: '10px',
								border: '1px solid rgba(26,26,24,0.08)',
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
							borderColor: 'rgba(26,26,24,0.34)',
							borderRadius: '9999px',
							'&:hover': { borderColor: TEXT_DARK, backgroundColor: GREEN_SOFT },
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
							color: TEXT_DARK,
							textTransform: 'uppercase',
							textDecoration: 'underline',
							textUnderlineOffset: '3px',
						}}>
						{sustainabilityTeamCtaLabel}
					</Button>
				</Box>
			</Box>

			{/* Methodology / Transparency */}
			<Box
				id='methodology'
				sx={{
					backgroundColor: BG_BAND,
					borderTop: '1px solid rgba(26,26,24,0.1)',
					borderBottom: '1px solid rgba(26,26,24,0.1)',
					scrollMarginTop: { xs: '80px', md: '96px' },
				}}>
				<Box sx={sectionContainerSx}>
					<Typography
						component='h2'
						sx={{
							fontFamily: '"Inter", sans-serif',
							fontSize: { xs: '28px', md: '34px' },
							fontWeight: 500,
							mb: 1.5,
						}}>
						Methodology and Reporting
					</Typography>
					<Typography sx={{ fontSize: '15px', color: BODY_GRAY, lineHeight: 1.8, maxWidth: 1040, mb: 1.25 }}>
						Metrics combine measured on-site inputs with standard conversion factors to estimate diversion,
						soil output, and climate equivalencies.
					</Typography>
					<Typography sx={{ fontSize: '15px', color: BODY_GRAY, lineHeight: 1.8, maxWidth: 1040, mb: 2 }}>
						Where possible, values reflect property-level activity. Equivalencies are directional and provided
						for context-not audited carbon claims.
					</Typography>

					<Typography component='h3' sx={{ fontFamily: '"Inter", sans-serif', fontSize: '24px', fontWeight: 500, letterSpacing: '-0.012em', mb: 1 }}>
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
								'&:hover': { backgroundColor: TEXT_DARK, boxShadow: 'none' },
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
								color: TEXT_DARK,
								textTransform: 'uppercase',
								textDecoration: 'underline',
								textUnderlineOffset: '3px',
							}}>
							{methodologyTeamCtaLabel}
						</Button>
					</Box>
				</Box>
			</Box>
		</Box>
	);
};

export default CircularFoodSystems;
