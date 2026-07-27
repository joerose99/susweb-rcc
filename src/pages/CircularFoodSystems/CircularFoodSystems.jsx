import React, { useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import DirectionsCarIcon from '@mui/icons-material/DirectionsCar';
import ForestIcon from '@mui/icons-material/Forest';
import GrassIcon from '@mui/icons-material/Grass';
import VolunteerActivismIcon from '@mui/icons-material/VolunteerActivism';
import GroupsIcon from '@mui/icons-material/Groups';
import RecyclingIcon from '@mui/icons-material/Recycling';
import ElectricCarIcon from '@mui/icons-material/ElectricCar';
import HourglassEmptyIcon from '@mui/icons-material/HourglassEmpty';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import DinnerDiningIcon from '@mui/icons-material/DinnerDining';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import BackHandOutlinedIcon from '@mui/icons-material/BackHandOutlined';
import TheaterComedyIcon from '@mui/icons-material/TheaterComedy';
import poweredByBioGreen from '../../assets/PoweredByBioGreen.svg';
import biogreenHowItWorksLogo from '../../assets/biogreen-how-it-works.png';
import howItWorksFoodIcon from '../../assets/how-it-works-food.png';
import howItWorksSproutIcon from '../../assets/how-it-works-sprout.png';
import howItWorksReportIcon from '../../assets/how-it-works-report.png';
import eventsMavenMeetingSpaceImage from '../../assets/events-maven-meeting-space.png';
import cornerstonePartnershipImage from '../../assets/cornerstone-partnership.png';
import foodScrapsProcessingPathwaysImage from '../../assets/food-scraps-processing-pathways.png';
import StickyHeader from '../../components/StickyHeader';
import {
	BIOGREEN360_URL,
	MAVEN_EVENTS_INQUIRY_URL,
	MAVEN_RESERVATIONS_URL,
	MAVEN_SALES_MAILTO,
} from '../../constants/mavenExternalLinks';
import { HEADER_SCROLL_MARGIN } from '../../constants/propertyExternalLinks';
import {
	BODY_TEXT,
	BORDER_LIGHT,
	BRAND_RED,
	BRAND_RED_HOVER,
	BRAND_RED_SOFT,
	BRAND_RED_SOFT_STRONG,
	CHARCOAL,
	CHARCOAL_HOVER,
	FONT_HEADING,
	MUTED_TEXT,
	RADIUS_BUTTON,
	RADIUS_CARD,
	RADIUS_IMAGE,
	SHADOW_CARD,
	SHADOW_IMAGE,
	SOFT_GRAY,
	SURFACE_WHITE,
	SUSTAINABILITY_GREEN,
	TYPE,
	WARM_WHITE,
	cardEmphasizedSx,
	mediaPlaceholderSx,
	pageThemeSx,
	sectionBandAltSx,
	sectionBandBaseSx,
	sectionContainerSx,
} from '../../theme/tokens';

const SENTENCE_LINK_SX = {
	color: CHARCOAL,
	textDecoration: 'underline',
	textDecorationColor: 'rgba(166, 25, 46, 0.35)',
	textUnderlineOffset: '3px',
	textDecorationThickness: '1px',
	cursor: 'pointer',
	transition: 'color 180ms ease, text-decoration-color 180ms ease',
	'&:hover': {
		color: BRAND_RED,
		textDecorationColor: 'rgba(166, 25, 46, 0.55)',
	},
	'&:focus-visible': {
		outline: `2px solid ${BRAND_RED}`,
		outlineOffset: '2px',
		borderRadius: '2px',
	},
};

// TODO: Replace temporary Maven org ID with the Bethesda North Marriott organization ID before publication.
const ORG_STATS_API_URL =
	'https://ck0mqx03j2.execute-api.us-east-1.amazonaws.com/prod/org-stats?id=6554f786a8c64cf4f5945895';

const PROPERTY_CONFIG = {
	/** BioGreen360 program launch date at Bethesda North Marriott (calendar date). */
	programLaunchDate: '2023-02-27',
	timeZone: 'America/New_York',
};

const BIOGREEN_LINK_SX = {
	color: 'inherit',
	textDecoration: 'none',
	cursor: 'pointer',
	transition: 'color 160ms ease, text-decoration-color 160ms ease',
	'&:hover': {
		color: SUSTAINABILITY_GREEN,
		textDecoration: 'underline',
		textDecorationColor: 'rgba(122, 146, 59, 0.55)',
		textUnderlineOffset: '2px',
	},
	'&:focus-visible': {
		outline: `2px solid ${BRAND_RED}`,
		outlineOffset: '2px',
		borderRadius: '2px',
	},
};

const BioGreenLink = () => (
	<Box
		component='a'
		href={BIOGREEN360_URL}
		target='_blank'
		rel='noopener noreferrer'
		sx={BIOGREEN_LINK_SX}>
		BioGreen360
	</Box>
);

const renderWithBioGreenLink = (text) => {
	const parts = String(text).split('BioGreen360');
	return parts.map((part, index) => (
		<React.Fragment key={index}>
			{part}
			{index < parts.length - 1 && <BioGreenLink />}
		</React.Fragment>
	));
};

const siteConfig = {
	eventsEnabled: true,
	restaurantEnabled: true,
	bookingUrl: MAVEN_RESERVATIONS_URL,
	processingPathwayMode: 'mixed',
	eventTrackingMode: 'by_request',
	showEquivalencies: true,
	lastSync: '2026-03-04T15:30:00-07:00',
	// impactReportUrl: 'https://example.com/impact-report.pdf',
};

const MISSING_METRIC_VALUE = '-';

// BioGreen360 compost & carbon methodology (Compost and Carbon Calculations.docx)
const LBS_PER_SHORT_TON = 2000;
const FINISHED_COMPOST_FACTOR = 0.6;
const COMPOST_LBS_PER_CUBIC_YARD = 1200;
const COMPOST_COVERAGE_SQ_FT_PER_CY_AT_1IN = 324;
const SQ_FT_PER_ACRE = 43560;
const RED_ROCKS_SQ_FT = 90000;
const AVOIDED_MTCO2E_PER_SHORT_TON = 0.65;
const EPA_MTCO2E_PER_PASSENGER_VEHICLE_MILE = 0.000393;
const MAVEN_HAND_LBS = 500;
const DEN_TO_MAVEN_ONE_WAY_MILES = 22.4;

const parsePoundsFed = (value) => {
	if (value == null || value === '') {
		return null;
	}

	const parsed = Number(value);
	return Number.isFinite(parsed) ? parsed : null;
};

const getShortTons = (poundsFed) => poundsFed / LBS_PER_SHORT_TON;
const getFinishedCompostLbs = (poundsFed) => poundsFed * FINISHED_COMPOST_FACTOR;
const getAvoidedMtco2e = (poundsFed) => getShortTons(poundsFed) * AVOIDED_MTCO2E_PER_SHORT_TON;
const getCompostCoverageSqFt = (poundsFed) => {
	const cubicYards = getFinishedCompostLbs(poundsFed) / COMPOST_LBS_PER_CUBIC_YARD;
	return cubicYards * COMPOST_COVERAGE_SQ_FT_PER_CY_AT_1IN;
};
const getEstimatedAcresFertilized = (poundsFed) => getCompostCoverageSqFt(poundsFed) / SQ_FT_PER_ACRE;
const getRedRocksEquivalency = (poundsFed) => getCompostCoverageSqFt(poundsFed) / RED_ROCKS_SQ_FT;
const getDenMavenRoundTrips = (poundsFed) => {
	const vehicleMiles = getAvoidedMtco2e(poundsFed) / EPA_MTCO2E_PER_PASSENGER_VEHICLE_MILE;
	return vehicleMiles / (DEN_TO_MAVEN_ONE_WAY_MILES * 2);
};

const getZonedCalendarDate = (date, timeZone) => {
	const parts = new Intl.DateTimeFormat('en-US', {
		timeZone,
		year: 'numeric',
		month: '2-digit',
		day: '2-digit',
	}).formatToParts(date);
	const valueFor = (type) => parts.find((part) => part.type === type)?.value;
	const year = valueFor('year');
	const month = valueFor('month');
	const day = valueFor('day');
	if (!year || !month || !day) {
		return null;
	}
	return `${year}-${month}-${day}`;
};

const getElapsedWholeDays = (launchDateYmd, timeZone, now = new Date()) => {
	if (!/^\d{4}-\d{2}-\d{2}$/.test(String(launchDateYmd || ''))) {
		return null;
	}

	const todayYmd = getZonedCalendarDate(now, timeZone);
	if (!todayYmd) {
		return null;
	}

	const [startYear, startMonth, startDay] = launchDateYmd.split('-').map(Number);
	const [endYear, endMonth, endDay] = todayYmd.split('-').map(Number);
	if ([startYear, startMonth, startDay, endYear, endMonth, endDay].some((n) => !Number.isFinite(n))) {
		return null;
	}

	const startUtc = Date.UTC(startYear, startMonth - 1, startDay);
	const endUtc = Date.UTC(endYear, endMonth - 1, endDay);
	if (!Number.isFinite(startUtc) || !Number.isFinite(endUtc) || endUtc < startUtc) {
		return null;
	}

	return Math.floor((endUtc - startUtc) / 86400000);
};

const formatCountWithSeparators = (value) =>
	Math.round(value).toLocaleString('en-US', { maximumFractionDigits: 0 });

const formatShortTonsDisplay = (poundsFed) => {
	const tons = getShortTons(poundsFed);
	if (!Number.isFinite(tons)) {
		return MISSING_METRIC_VALUE;
	}
	const rounded = Math.round(tons * 10) / 10;
	const display = Number.isInteger(rounded) ? String(rounded) : rounded.toFixed(1);
	return `${display} tons`;
};

const formatEstimatedAcresDisplay = (poundsFed) => {
	const acres = getEstimatedAcresFertilized(poundsFed);
	if (!Number.isFinite(acres)) {
		return MISSING_METRIC_VALUE;
	}

	let display;
	if (acres < 1) {
		display = acres.toFixed(2);
	} else if (acres < 10) {
		display = (Math.round(acres * 10) / 10).toFixed(1);
	} else {
		const oneDecimal = Math.round(acres * 10) / 10;
		display = Number.isInteger(oneDecimal) ? String(Math.round(oneDecimal)) : oneDecimal.toFixed(1);
	}

	return `${display} acres`;
};

const formatApproxCount = (value) => {
	if (value >= 10) {
		return `~${Math.round(value)}`;
	}

	if (value >= 1) {
		return `~${value.toFixed(1)}`;
	}

	return `~${value.toFixed(2)}`;
};

const buildImpactMetrics = (poundsFed) => {
	const daysOperating = getElapsedWholeDays(
		PROPERTY_CONFIG.programLaunchDate,
		PROPERTY_CONFIG.timeZone
	);

	return [
		{
			eyebrow: 'BioGreen360 Program',
			value:
				daysOperating != null
					? `${formatCountWithSeparators(daysOperating)} days`
					: MISSING_METRIC_VALUE,
			note: 'operating on property since February 27, 2023',
			Icon: CalendarTodayIcon,
		},
		{
			eyebrow: 'Food Diverted',
			value: poundsFed != null ? formatShortTonsDisplay(poundsFed) : MISSING_METRIC_VALUE,
			note: 'measured from captured on-property inputs',
			Icon: DinnerDiningIcon,
		},
		{
			eyebrow: 'Estimated Soil Coverage',
			value: poundsFed != null ? formatEstimatedAcresDisplay(poundsFed) : MISSING_METRIC_VALUE,
			note: 'estimated at a one-inch application depth',
			Icon: GrassIcon,
		},
	];
};

const buildEquivalencyCards = (poundsFed) => [
	{
		icon: BackHandOutlinedIcon,
		label: 'All-Time Food Scrap Diversion',
		value:
			poundsFed != null
				? formatApproxCount(poundsFed / MAVEN_HAND_LBS) + ' Maven Hands'
				: MISSING_METRIC_VALUE,
		note: 'The Maven Hand Sculpture hanging in the Dairy Block Lobby weighs approximately 500 lbs.',
	},
	{
		icon: TheaterComedyIcon,
		label: 'All-Time Soil Coverage',
		value:
			poundsFed != null
				? `${formatApproxCount(getRedRocksEquivalency(poundsFed))} Red Rocks Amphitheaters`
				: MISSING_METRIC_VALUE,
		note: 'Red Rocks Amphitheatre is approximately 90,000 sq ft. Coverage is estimated at a 1-inch application depth.',
		compactValue: true,
	},
	{
		icon: DirectionsCarIcon,
		label: 'All-Time Carbon Diversion',
		valueLine1: 'Driving DEN ↔ The Maven',
		valueLine2:
			poundsFed != null
				? `${formatApproxCount(getDenMavenRoundTrips(poundsFed))} times`
				: MISSING_METRIC_VALUE,
		splitValue: true,
	},
];

const initiatives = [
	{
		title: 'Hotel for Trees',
		description:
			'Plant a tree while you stay. One tree is planted for each member room night booked at The Maven, and for each in-room bottled water purchase.',
		icon: ForestIcon,
	},
	{
		title: 'Procure Impact',
		description:
			"We're honored to carry items from Procure Impact, a B2B marketplace focused on increasing access to the dignity of work for individuals with underestimated potential.",
		icon: VolunteerActivismIcon,
	},
	{
		title: 'Community Connections',
		description: 'The Maven team contributes 120 hours of community service each year.',
		icon: GroupsIcon,
	},
	{
		title: 'Clean the World',
		description:
			'Our partnership with Clean the World helps keep plastic from soaps, conditioners, and body washes out of the waste stream.',
		icon: RecyclingIcon,
	},
	{
		title: 'Ride in Style',
		description: "Guests can get around town in The Maven's electric courtesy car.",
		icon: ElectricCarIcon,
	},
	{
		title: 'More Initiatives Coming Soon',
		description:
			'We\u2019re continually expanding our sustainability efforts. Check back soon to see what we\u2019re up to next.',
		icon: HourglassEmptyIcon,
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
	const [poundsFed, setPoundsFed] = useState(null);
	const [statLastUpdate, setStatLastUpdate] = useState(null);

	// This useEffect is where we call the API Endpointto get the data
	useEffect(() => {
		let cancelled = false;

		const loadOrgStats = async () => {
			try {
				const response = await fetch(ORG_STATS_API_URL);
				if (!response.ok) {
					if (process.env.NODE_ENV !== 'production') {
						console.error('Org stats request failed', response.status);
					}
					return;
				}

				const data = await response.json();
				if (!cancelled) {
					const parsedPoundsFed = parsePoundsFed(data?.poundsFed);
					if (parsedPoundsFed != null) {
						setPoundsFed(parsedPoundsFed);
					}
				}
				if (!cancelled && data?.statLastUpdate != null) {
					setStatLastUpdate(data.statLastUpdate);
				}
			} catch (error) {
				if (process.env.NODE_ENV !== 'production') {
					console.error('Org stats request error', error);
				}
				// Metrics display '-' until data is available.
			}
		};

		loadOrgStats();

		return () => {
			cancelled = true;
		};
	}, []);

	const scrollToSection = (sectionId) => {
		const target = document.getElementById(sectionId);
		if (target) {
			target.scrollIntoView({ behavior: 'smooth', block: 'start' });
		}
	};

	const { eventsEnabled, processingPathwayMode, showEquivalencies } = siteConfig;

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

	const processingCopy = processingCopyByMode[processingPathwayMode] ?? processingCopyByMode.mixed;

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
					alt='Food scraps are captured on-site'
					sx={{ height: 56, width: 'auto', objectFit: 'contain' }}
				/>
			),
			label: 'Food scraps are captured on\u2011site',
		},
		{
			icon: (
				<Box
					component='a'
					href={BIOGREEN360_URL}
					target='_blank'
					rel='noopener noreferrer'
					aria-label='BioGreen360 — visit website'
					sx={{
						display: 'inline-flex',
						lineHeight: 0,
						borderRadius: '4px',
						'&:focus-visible': { outline: `2px solid ${BRAND_RED}`, outlineOffset: '3px' },
					}}>
					<Box
						component='img'
						src={biogreenHowItWorksLogo}
						alt='Measured and tracked in the BioGreen360 system'
						sx={{ height: 56, width: 'auto', objectFit: 'contain' }}
					/>
				</Box>
			),
			label: 'Measured and tracked in the BioGreen360 system',
		},
		{
			icon: (
				<Box
					component='img'
					src={howItWorksSproutIcon}
					alt='Managed through local processing pathways'
					sx={{ height: 56, width: 'auto', objectFit: 'contain' }}
				/>
			),
			label: 'Managed through local processing pathways',
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
				'Food scraps generated from kitchens and service areas may be collected during qualifying events.',
		},
		{
			icon: (
				<Box
					component='a'
					href={BIOGREEN360_URL}
					target='_blank'
					rel='noopener noreferrer'
					aria-label='BioGreen360 — visit website'
					sx={{
						display: 'inline-flex',
						lineHeight: 0,
						borderRadius: '4px',
						'&:focus-visible': { outline: `2px solid ${BRAND_RED}`, outlineOffset: '3px' },
					}}>
					<Box
						component='img'
						src={biogreenHowItWorksLogo}
						alt='Tracking & Reporting'
						sx={{ height: 56, width: 'auto', objectFit: 'contain' }}
					/>
				</Box>
			),
			title: 'Tracking & Reporting',
			description:
				"Food scraps are tracked through BioGreen360's reporting system during service when event tracking is enabled.",
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
				'Clients may receive an event-specific recap outlining measured diversion totals, scope notes, and illustrative equivalencies tied to diversion through a local composting partner.',
		},
	];

	const eventPlannerDeliverables = [
		'Event-specific diversion summary when tracking is enabled',
		'Clear scope notes and definitions for reporting',
		'Optional equivalencies for context',
		'Post-event documentation suitable for internal sharing',
	];

	const impactMetrics = buildImpactMetrics(poundsFed);
	const equivalencyCards = buildEquivalencyCards(poundsFed);
	const equivalencyCardsToRender = showEquivalencies ? equivalencyCards : [];
	const equivalencyDisclaimer =
		'Equivalencies are provided for context and are not audited carbon claims.';
	const formattedLastSync = formatLastSync(siteConfig.lastSync);
	const lastUpdatedLabel = formattedLastSync ?? 'Last sync: unavailable';
	const formattedStatLastUpdate = formatLastSync(statLastUpdate);
	const lastUpdatedDisplay = formattedStatLastUpdate ?? lastUpdatedLabel;
	const programAtAGlanceCards = [
		{
			title: 'What happens to food not eaten on property?',
			body: 'Participating food scraps are captured and processed through the hotel’s on-property BioGreen360 equipment.',
		},
		{
			title: 'How does the system work?',
			body: 'BioGreen360 provides a waterless, closed-loop platform that processes food scraps while supporting property-level measurement and reporting.',
		},
		{
			title: 'How often does reporting update?',
			body: (
				<>
					Reporting updates automatically as new program data is processed through BioGreen360’s{' '}
					<Box
						component='a'
						href='#live-reporting'
						onClick={(event) => {
							event.preventDefault();
							scrollToSection('live-reporting');
						}}
						sx={SENTENCE_LINK_SX}>
						reporting platform
					</Box>
					.
				</>
			),
		},
		{
			title: 'Can my event receive an impact recap?',
			body: (
				<>
					Qualifying meetings and events may request dedicated food-scrap tracking and a post-event{' '}
					<Box
						component='a'
						href='#events'
						onClick={(event) => {
							event.preventDefault();
							scrollToSection('events');
						}}
						sx={SENTENCE_LINK_SX}>
						impact recap
					</Box>
					, subject to advance planning and operational availability.
				</>
			),
			requiresEvents: true,
		},
	].filter((card) => (card.requiresEvents ? eventsEnabled : true));

	return (
		<Box
			data-page='circular-food-systems'
			sx={pageThemeSx}>
			<StickyHeader />

			{/* Hero */}
			<Box
				className='section section--base'
				sx={{
					...sectionContainerSx,
					...sectionBandBaseSx,
					pt: { xs: '72px', md: '108px' },
					'&::before': {
						...sectionBandBaseSx['&::before'],
						borderTop: '1px solid transparent',
					},
				}}>
				<Box sx={{ textAlign: 'center' }}>
					<Typography className='micro-label' sx={{ mb: { xs: 2, md: 2.5 } }}>
						LIVE REPORTING. MEASURABLE PROGRESS.
					</Typography>
					<Typography
						component='h1'
						sx={{
							fontFamily: FONT_HEADING,
							fontSize: TYPE.h1,
							fontWeight: 400,
							letterSpacing: '-0.02em',
							lineHeight: 1.12,
							color: CHARCOAL,
							maxWidth: 920,
							mx: 'auto',
							mb: { xs: 2.25, md: 3 },
							textWrap: 'balance',
						}}>
						Sustainability, Built Into Every Stay and Gathering.
					</Typography>
					<Typography
						sx={{
							fontSize: { xs: '17px', md: '18px' },
							fontWeight: 400,
							color: BODY_TEXT,
							lineHeight: 1.75,
							maxWidth: 880,
							mx: 'auto',
							mb: 0,
						}}>
						At Bethesda North Marriott Hotel &amp; Conference Center, sustainability is part of how we
						operate, welcome guests, and host memorable gatherings. Through our on-property BioGreen360
						system, food not eaten on property is processed, measured, and diverted while clear reporting
						helps guests, planners, and hotel teams understand the program&apos;s impact.
					</Typography>
					<Box
						sx={{
							textAlign: 'center',
							maxWidth: 860,
							mx: 'auto',
							mt: { xs: 2.5, md: 3 },
						}}>
						<Typography
							className='micro-label'
							sx={{
								mb: 0,
								lineHeight: 1.7,
								display: 'flex',
								flexWrap: 'wrap',
								justifyContent: 'center',
								columnGap: 1,
								rowGap: 0.75,
							}}>
							<Box component='span'>ON-PROPERTY PROCESSING</Box>
							<Box component='span' aria-hidden='true' sx={{ display: { xs: 'none', sm: 'inline' } }}>
								•
							</Box>
							<Box component='span'>LIVE IMPACT REPORTING</Box>
							<Box component='span' aria-hidden='true' sx={{ display: { xs: 'none', sm: 'inline' } }}>
								•
							</Box>
							<Box component='span'>EVENT REPORTING BY REQUEST</Box>
						</Typography>
					</Box>
				</Box>

				{/* TODO: Replace hero media placeholder with approved Bethesda North Marriott property photography (exterior, conference/ballroom, lobby, or dining). */}
				<Box
					sx={{
						width: '100%',
						maxWidth: 1120,
						mx: 'auto',
						mt: { xs: 4, md: 5.5 },
						mb: 0,
					}}>
					<Box
						role='status'
						aria-label='Bethesda North Marriott hero imagery pending approval'
						sx={{
							...mediaPlaceholderSx,
							width: '100%',
							aspectRatio: { xs: '16 / 10', md: '16 / 9' },
							minHeight: { xs: 220, md: 360 },
							borderRadius: RADIUS_IMAGE,
							boxShadow: SHADOW_IMAGE,
							gap: 1.25,
						}}>
						<Typography className='micro-label' sx={{ mb: 0 }}>
							PHOTO / MEDIA PLACEMENT
						</Typography>
						<Typography
							sx={{
								fontSize: { xs: '15px', md: '17px' },
								color: BODY_TEXT,
								lineHeight: 1.5,
								maxWidth: 420,
							}}>
							Bethesda North Marriott hero imagery pending approval
						</Typography>
					</Box>
				</Box>

				<Box
					sx={{
						maxWidth: 900,
						mx: 'auto',
						mt: { xs: 3, md: 4 },
						mb: { xs: 5, md: 7 },
					}}>
					<Box
						component='ul'
						sx={{
							listStyle: 'disc',
							maxWidth: 820,
							mx: 'auto',
							mb: 0,
							pl: 3,
							fontSize: { xs: '16px', md: '18px' },
							lineHeight: 1.75,
							color: BODY_TEXT,
							textAlign: 'left',
							listStylePosition: 'outside',
						}}>
						<Box component='li' sx={{ mb: 1 }}>
							Food not eaten on property is processed through the hotel’s on-property{' '}
							<Box
								component='a'
								href='#biogreen360'
								onClick={(event) => {
									event.preventDefault();
									scrollToSection('biogreen360');
								}}
								sx={SENTENCE_LINK_SX}>
								BioGreen360 system
							</Box>
							.
						</Box>
						<Box component='li' sx={{ mb: 1 }}>
							Property-level data is measured and presented through BioGreen360’s{' '}
							<Box
								component='a'
								href='#live-reporting'
								onClick={(event) => {
									event.preventDefault();
									scrollToSection('live-reporting');
								}}
								sx={SENTENCE_LINK_SX}>
								reporting platform
							</Box>
							.
						</Box>
						<Box component='li'>
							Qualifying meetings and events may request dedicated tracking and a{' '}
							<Box
								component='a'
								href='#events'
								onClick={(event) => {
									event.preventDefault();
									scrollToSection('events');
								}}
								sx={SENTENCE_LINK_SX}>
								post-event impact recap
							</Box>
							.
						</Box>
					</Box>
				</Box>

				<Box sx={{ mt: { xs: 1, md: 1.5 } }}>
					<Typography
						component='h2'
						sx={{
							fontSize: { xs: '28px', md: '34px' },
							fontWeight: 500,
							color: CHARCOAL,
							mb: { xs: 1.5, md: 2 },
							textAlign: 'left',
						}}>
						The Program at a Glance
					</Typography>
					<Typography
						sx={{
							fontSize: { xs: '16px', md: '17px' },
							color: BODY_TEXT,
							lineHeight: 1.75,
							maxWidth: 840,
							mb: { xs: 3, md: 3.5 },
						}}>
						Bethesda North Marriott became the first Marriott-branded hotel to install the BioGreen360
						platform, creating an on-property system for processing, measuring, and diverting food not
						eaten at the hotel.
					</Typography>
				</Box>
				<Box
					sx={{
						display: 'grid',
						gridTemplateColumns: {
							xs: '1fr',
							sm: 'repeat(2, minmax(0, 1fr))',
							lg: 'repeat(4, minmax(0, 1fr))',
						},
						gap: { xs: 1.75, sm: 2 },
						alignItems: 'stretch',
					}}>
					{programAtAGlanceCards.map((card) => (
						<Box
							key={card.title}
							sx={{
								backgroundColor: SURFACE_WHITE,
								border: `1px solid ${BORDER_LIGHT}`,
								borderRadius: RADIUS_CARD,
								boxShadow: SHADOW_CARD,
								p: { xs: 2, md: 2.25 },
								display: 'flex',
								flexDirection: 'column',
								minHeight: { xs: 'auto', md: 168 },
								height: '100%',
							}}>
							<Typography
								component='h3'
								sx={{
									fontSize: { xs: '18px', md: '19px' },
									fontWeight: 500,
									letterSpacing: '-0.012em',
									lineHeight: 1.3,
									color: CHARCOAL,
									mb: 1.25,
									minHeight: { md: '2.6em' },
								}}>
								{card.title}
							</Typography>
							<Typography sx={{ fontSize: '14px', color: BODY_TEXT, lineHeight: 1.65 }}>
								{card.body}
							</Typography>
						</Box>
					))}
				</Box>
				<Box sx={{ mt: { xs: 2.5, md: 3 } }}>
					<Box
						component='a'
						href='#methodology'
						onClick={(event) => {
							event.preventDefault();
							scrollToSection('methodology');
						}}
						className='lux-link lux-link--internal'
						sx={{
							fontSize: '13px',
							letterSpacing: '0.06em',
							textTransform: 'uppercase',
						}}>
						View methodology
					</Box>
				</Box>
			</Box>

			{/* Our Impact */}
			<Box
				id='impact'
				component='section'
				aria-labelledby='impact-heading'
				className='section section--alt'
				sx={{
					...sectionContainerSx,
					...sectionBandAltSx,
					scrollMarginTop: HEADER_SCROLL_MARGIN,
				}}>
				<Box
					sx={{
						display: 'flex',
						flexDirection: { xs: 'column', sm: 'row' },
						flexWrap: 'wrap',
						justifyContent: 'space-between',
						alignItems: { xs: 'flex-start', sm: 'baseline' },
						gap: 1.5,
						mb: 1,
					}}>
					<Typography
						id='impact-heading'
						component='h2'
						sx={{
							fontSize: { xs: '28px', md: '34px' },
							fontWeight: 500,
							color: CHARCOAL,
						}}>
						Our Impact
					</Typography>
					<Typography className='micro-label'>{`Last Updated: ${lastUpdatedDisplay}`}</Typography>
				</Box>
				<Typography
					sx={{
						fontSize: '15px',
						lineHeight: 1.7,
						color: BODY_TEXT,
						mb: 2,
						maxWidth: 880,
					}}>
					Property-level reporting based on food captured and processed through Bethesda North
					Marriott’s on-property BioGreen360 system.
				</Typography>
				<Box
					sx={{
						width: '100%',
						maxWidth: 360,
						height: '1px',
						backgroundColor: BRAND_RED_SOFT_STRONG,
						mb: 2.5,
					}}
				/>

				<Box
					sx={{
						display: 'flex',
						flexDirection: { xs: 'column', md: 'row' },
						alignItems: 'stretch',
						justifyContent: 'space-between',
						borderTop: `1px solid ${BORDER_LIGHT}`,
						borderBottom: `1px solid ${BORDER_LIGHT}`,
						py: { xs: 0.5, md: 2.5 },
					}}>
					{impactMetrics.map((metric, idx) => {
						const Icon = metric.Icon;
						return (
							<Box
								key={metric.eyebrow}
								sx={{
									flex: { md: '1 1 0' },
									width: { xs: '100%', md: 'auto' },
									minWidth: { md: 0 },
									px: { xs: 0, md: 3 },
									py: { xs: 2.25, md: 1.5 },
									textAlign: 'center',
									borderRight:
										idx < 2
											? { xs: 'none', md: `1px solid ${BORDER_LIGHT}` }
											: 'none',
									borderBottom:
										idx < 2
											? { xs: `1px solid ${BORDER_LIGHT}`, md: 'none' }
											: 'none',
								}}>
								<Typography className='micro-label' sx={{ mb: 0.75, display: 'block' }}>
									{metric.eyebrow}
								</Typography>
								<Box
									sx={{
										display: 'flex',
										justifyContent: 'center',
										alignItems: 'center',
										width: '100%',
										minHeight: 48,
										mb: 1,
									}}>
									<Icon
										sx={{ fontSize: 40, color: SUSTAINABILITY_GREEN }}
										aria-hidden='true'
									/>
								</Box>
								<Typography
									sx={{
										fontSize: { xs: '34px', sm: '44px', md: '48px' },
										fontWeight: 500,
										letterSpacing: '-0.02em',
										lineHeight: 1.15,
										color: CHARCOAL,
									}}>
									{metric.value}
								</Typography>
								<Typography sx={{ fontSize: '12px', color: MUTED_TEXT, mt: 1 }}>
									{metric.note}
								</Typography>
							</Box>
						);
					})}
				</Box>

				<Box sx={{ textAlign: 'center', mt: 2.25 }}>
					<Typography className='micro-label' sx={{ mb: 0.5 }}>
						Reporting powered by BioGreen360
					</Typography>
					<Box
						component='a'
						href='#biogreen360'
						onClick={(event) => {
							event.preventDefault();
							scrollToSection('biogreen360');
						}}
						aria-label='BioGreen360'
						sx={{
							display: 'inline-flex',
							lineHeight: 0,
							borderRadius: '4px',
							'&:focus-visible': {
								outline: `2px solid ${BRAND_RED}`,
								outlineOffset: '3px',
							},
						}}>
						<Box
							component='img'
							src={poweredByBioGreen}
							alt='BioGreen360'
							sx={{ height: 26 }}
						/>
					</Box>
				</Box>

				<Box sx={{ textAlign: 'center', mt: 1.5 }}>
					<Box
						component='a'
						href='#methodology'
						onClick={(event) => {
							event.preventDefault();
							scrollToSection('methodology');
						}}
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
				id='biogreen360'
				className='section section--base'
				sx={{
					...sectionContainerSx,
					...sectionBandBaseSx,
					scrollMarginTop: HEADER_SCROLL_MARGIN,
				}}>
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
							alt='Overhead view of gourmet dishes and cocktails arranged on a peach terrazzo table.'
							sx={{
								width: '100%',
								aspectRatio: '4 / 5',
								objectFit: 'cover',
								objectPosition: 'center 42%',
								borderRadius: RADIUS_CARD,
								border: `1px solid ${BORDER_LIGHT}`,
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
							A Cornerstone Partnership with <BioGreenLink />
						</Typography>
						<Typography sx={{ fontSize: '16px', color: MUTED_TEXT, maxWidth: 740, mb: 1.5 }}>
							A practical collaboration that helps The Maven capture food scraps on-site,
							track property-level reporting, and share clear sustainability information with
							guests and planners.
						</Typography>
						<Typography className='micro-label' sx={{ mb: 1.25 }}>
							At a Glance
						</Typography>
						<Box
							sx={{
								display: 'grid',
								gridTemplateColumns: { xs: '1fr', md: 'repeat(3, minmax(0, 1fr))' },
								borderTop: `1px solid ${BORDER_LIGHT}`,
								borderBottom: `1px solid ${BORDER_LIGHT}`,
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
										px: { xs: 1, md: 0.75 },
										textAlign: 'center',
										cursor: 'pointer',
										fontSize: { xs: '10px', md: '10.5px' },
										color: BODY_TEXT,
										fontWeight: 500,
										position: 'relative',
										borderRight:
											index < 2 ? { xs: 'none', md: `1px solid ${BORDER_LIGHT}` } : 'none',
										fontFamily: FONT_HEADING,
										textTransform: 'uppercase',
										letterSpacing: '0.055em',
										lineHeight: 1.35,
										whiteSpace: { xs: 'normal', md: 'nowrap' },
										'&:hover': {
											color: CHARCOAL,
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
											color: SUSTAINABILITY_GREEN,
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
								gap: { xs: 2, md: 2.5 },
								alignItems: 'start',
							}}>
							<Box sx={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
								<Typography
									component='h3'
									sx={{
										fontSize: '22px',
										fontWeight: 500,
										lineHeight: 1.35,
										letterSpacing: '-0.01em',
										mb: 0.75,
										minHeight: { md: '3.05em' },
										whiteSpace: { md: 'nowrap' },
									}}>
									Hotel Operations
								</Typography>
								<Box
									component='ul'
									sx={{
										m: 0,
										pl: 2.1,
										color: BODY_TEXT,
										listStylePosition: 'outside',
									}}>
									<Box component='li' sx={{ fontSize: '14px', lineHeight: 1.7, mb: 0.35 }}>
										Captures food scraps on-site as part of daily operations.
									</Box>
									<Box component='li' sx={{ fontSize: '14px', lineHeight: 1.7, mb: 0.35 }}>
										Supports collection practices that fit guest, kitchen, and staff
										workflows.
									</Box>
									<Box component='li' sx={{ fontSize: '14px', lineHeight: 1.7 }}>
										Coordinates program participation based on property logistics and
										event activity.
									</Box>
								</Box>
							</Box>
							<Box sx={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
								<Typography
									component='h3'
									sx={{
										fontSize: '22px',
										fontWeight: 500,
										lineHeight: 1.35,
										letterSpacing: '-0.01em',
										mb: 0.75,
										minHeight: { md: '3.05em' },
										whiteSpace: { md: 'nowrap' },
									}}>
									<BioGreenLink />
								</Typography>
								<Box
									component='ul'
									sx={{
										m: 0,
										pl: 2.1,
										color: BODY_TEXT,
										listStylePosition: 'outside',
									}}>
									<Box component='li' sx={{ fontSize: '14px', lineHeight: 1.7, mb: 0.35 }}>
										Provides the measurement and reporting system used for this page.
									</Box>
									<Box component='li' sx={{ fontSize: '14px', lineHeight: 1.7, mb: 0.35 }}>
										Supports program setup, tracking, and reporting consistency.
									</Box>
									<Box component='li' sx={{ fontSize: '14px', lineHeight: 1.7 }}>
										Helps organize definitions and scope notes so reporting is easier to
										understand.
									</Box>
								</Box>
							</Box>
							<Box sx={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
								<Typography
									component='h3'
									sx={{
										fontSize: '22px',
										fontWeight: 500,
										lineHeight: 1.35,
										letterSpacing: '-0.01em',
										mb: 0.75,
										minHeight: { md: '3.05em' },
										whiteSpace: { md: 'nowrap' },
									}}>
									Local Partners
								</Typography>
								<Box
									component='ul'
									sx={{
										m: 0,
										pl: 2.1,
										color: BODY_TEXT,
										listStylePosition: 'outside',
									}}>
									<Box component='li' sx={{ fontSize: '14px', lineHeight: 1.7, mb: 0.35 }}>
										Compost Colorado supports local collection logistics and composting.
									</Box>
									<Box component='li' sx={{ fontSize: '14px', lineHeight: 1.7, mb: 0.35 }}>
										Their in-vessel process helps convert food scraps into usable soil
										product.
									</Box>
									<Box component='li' sx={{ fontSize: '14px', lineHeight: 1.7 }}>
										Together, BioGreen360, Compost Colorado, and The Maven help keep the
										finished soil product in the local community where possible.
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
				sx={{
					...sectionContainerSx,
					...sectionBandAltSx,
					scrollMarginTop: HEADER_SCROLL_MARGIN,
				}}>
				<Typography
					component='h2'
					sx={{
						fontSize: { xs: '28px', md: '34px' },
						fontWeight: 500,
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
										border: `1px solid rgba(216, 209, 200, 1)`,
										backgroundColor: 'transparent',
										display: 'flex',
										alignItems: 'center',
										justifyContent: 'center',
										mb: 2.5,
									}}>
									{step.icon}
								</Box>
								<Typography
									sx={{
										fontSize: '15px',
										lineHeight: 1.65,
										color: BODY_TEXT,
										maxWidth: 210,
										mx: 'auto',
									}}>
									{renderWithBioGreenLink(step.label)}
								</Typography>
							</Box>
							{index < 3 && (
								<Box
									sx={{
										display: { xs: 'none', md: 'flex' },
										alignItems: 'center',
										justifyContent: 'center',
										flexShrink: 0,
										px: 1.25,
										height: { md: 128 },
									}}>
									<ArrowForwardIcon sx={{ color: SUSTAINABILITY_GREEN, fontSize: 34 }} />
								</Box>
							)}
						</React.Fragment>
					))}
				</Box>
				<Typography
					sx={{
						fontSize: '12px',
						color: MUTED_TEXT,
						textAlign: 'center',
						mt: 1.5,
						fontFamily: FONT_HEADING,
					}}>
					Processing pathways vary by property. See scope notes in{' '}
					<Box
						component='a'
						href='#methodology'
						className='lux-link'
						sx={{ fontSize: 'inherit' }}>
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
						<Box
							component='img'
							src={foodScrapsProcessingPathwaysImage}
							alt='Restaurant table setting with fries, dipping sauces, and a cocktail on white marble.'
							sx={{
								width: '100%',
								aspectRatio: { xs: '16 / 10', md: '4 / 3' },
								objectFit: 'cover',
								objectPosition: 'center 55%',
								borderRadius: RADIUS_CARD,
								border: `1px solid ${BORDER_LIGHT}`,
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
							}}>
							From Food Scraps to{' '}
							<Box component='span' sx={{ whiteSpace: 'nowrap' }}>
								Local Soil Product
							</Box>
						</Typography>
						<Typography
							sx={{ fontSize: '15px', color: BODY_TEXT, lineHeight: 1.75, mb: 1.2 }}>
							Food scraps captured at The Maven are managed in partnership with BioGreen360
							through Compost Colorado, a local logistics provider and composter serving the
							greater Denver area.
						</Typography>
						<Typography
							sx={{ fontSize: '15px', color: BODY_TEXT, lineHeight: 1.75, mb: 1.2 }}>
							Compost Colorado uses in-vessel composting technology to accelerate material
							breakdown, helping reduce the time, land, and water intensity typically
							associated with conventional composting.
						</Typography>
						<Typography
							sx={{ fontSize: '15px', color: BODY_TEXT, lineHeight: 1.75, mb: 1.2 }}>
							Their inputs are sourced locally, and the finished soil product is
							redistributed back into the local area. A portion of that soil is donated to
							support community needs, while additional material is purchased by nearby
							businesses and residents for local use.
						</Typography>
						<Typography sx={{ fontSize: '15px', color: BODY_TEXT, lineHeight: 1.75, mb: 0 }}>
							Together, The Maven, BioGreen360, and Compost Colorado help keep nutrients in
							the local soil system and demonstrate a more circular approach to hospitality
							and environmental stewardship.
						</Typography>
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
					scrollMarginTop: HEADER_SCROLL_MARGIN,
					'& .lsir-card-value': { color: CHARCOAL },
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
					<Typography sx={{ fontSize: '14px', color: MUTED_TEXT }}>
						Live reporting data is provided through <BioGreenLink />
						&apos;s reporting system.
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
						gap: { xs: 2, md: 2.5 },
					}}>
					{equivalencyCardsToRender.map((card) => {
						const Icon = card.icon;
						const isCarbonDiversion = card.splitValue;
						return (
							<Box
								key={card.label}
								sx={{
									backgroundColor: SURFACE_WHITE,
									border: '1px solid',
									borderColor: BORDER_LIGHT,
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
								<Typography
									sx={{
										fontSize: '11px',
										letterSpacing: '0.09em',
										textTransform: 'uppercase',
										color: MUTED_TEXT,
										mb: 0.85,
									}}>
									Illustrative equivalency
								</Typography>
								<Typography
									component='h3'
									className='lsir-card-value'
									sx={{
										fontSize: card.compactValue
											? { xs: '22px', md: '26px' }
											: { xs: '28px', md: '32px' },
										fontWeight: 500,
										letterSpacing: '-0.015em',
										lineHeight: 1.25,
										mb: card.note ? 0.75 : 1.5,
									}}>
									{isCarbonDiversion ? (
										<>
											<Box
												component='span'
												sx={{
													display: 'block',
													whiteSpace: { xs: 'normal', md: 'nowrap' },
												}}>
												{card.valueLine1}
											</Box>
											<Box component='span' sx={{ display: 'block' }}>
												{card.valueLine2}
											</Box>
										</>
									) : (
										card.value
									)}
								</Typography>
								{card.note && (
									<Typography
										sx={{
											fontSize: '12px',
											color: MUTED_TEXT,
											lineHeight: 1.5,
											mb: 1.5,
											maxWidth:
												card.label === 'All-Time Food Scrap Diversion' ? 300 : 280,
											mx: 'auto',
										}}>
										{card.note}
									</Typography>
								)}
								<Icon
									sx={{
										fontSize: { xs: 56, md: 64 },
										color: 'rgba(93, 98, 104, 0.75)',
										mt: 'auto',
										pt: 1.75,
										alignSelf: 'center',
									}}
								/>
							</Box>
						);
					})}
				</Box>
				<Typography sx={{ fontSize: '12px', color: MUTED_TEXT, mt: 2.25 }}>
					{equivalencyDisclaimer}
				</Typography>
			</Box>

			{/* Events — impact reporting */}
			<Box
				id='events'
				className='section section--alt'
				sx={{
					...sectionContainerSx,
					...sectionBandAltSx,
					scrollMarginTop: HEADER_SCROLL_MARGIN,
				}}>
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
							Event Impact Reporting
						</Typography>
						<Box
							sx={{ width: 84, height: '2px', backgroundColor: BRAND_RED, mb: 1.5 }}
						/>
						<Typography
							sx={{
								fontSize: '16px',
								fontWeight: 400,
								color: BODY_TEXT,
								lineHeight: 1.8,
								mb: 1,
							}}>
							Qualifying meetings, weddings, and gatherings at The Maven may request
							food-waste tracking and a post-event impact recap as part of an experience
							designed with creativity, connection, and conscious hospitality in mind. Rooted
							in community and inspired by thoughtful gathering, this optional initiative
							allows events to leave a meaningful impact beyond the final toast.
							Participation is based on event scope, scheduling, and operational
							availability.
						</Typography>
						<Typography
							sx={{ fontSize: '16px', fontWeight: 400, color: BODY_TEXT, lineHeight: 1.8 }}>
							Food scraps captured from participating events are tracked through{' '}
							<BioGreenLink />
							&apos;s reporting system and diverted through a local composting partner based
							on property operations and partner availability. After the event, your team may
							receive a concise summary with diversion totals, scope notes, and illustrative
							equivalencies for context.
						</Typography>
					</Box>

					<Box
						component='img'
						src={eventsMavenMeetingSpaceImage}
						alt='The Maven meeting room with classroom seating, exposed brick, wood beams, and a projection screen showing The Maven wordmark.'
						sx={{
							width: '100%',
							aspectRatio: '16 / 8',
							objectFit: 'cover',
							borderRadius: RADIUS_CARD,
							border: `1px solid ${BORDER_LIGHT}`,
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
												border: `1px solid rgba(216, 209, 200, 1)`,
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
												color: BODY_TEXT,
												lineHeight: 1.65,
												textAlign: 'center',
												maxWidth: 310,
											}}>
											{renderWithBioGreenLink(step.description)}
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
											<ArrowForwardIcon sx={{ color: SUSTAINABILITY_GREEN, fontSize: 34 }} />
										</Box>
									)}
								</React.Fragment>
							))}
						</Box>
					</Box>

					<Box
						sx={{
							...cardEmphasizedSx,
							backgroundColor: SOFT_GRAY,
							p: { xs: 2, md: 2.5 },
							alignSelf: { xs: 'stretch', md: 'center' },
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
						<Box component='ul' sx={{ m: 0, pl: 2.1, color: BODY_TEXT }}>
							{eventPlannerDeliverables.map((item) => (
								<Box
									component='li'
									key={item}
									sx={{ fontSize: '14px', lineHeight: 1.7, mb: 0.45 }}>
									{item}
								</Box>
							))}
						</Box>
					</Box>
				</Box>

				<Box
					sx={{
						textAlign: 'center',
						pt: { xs: 2, md: 2.5 },
						pb: { xs: 1, md: 1.5 },
					}}>
					<Button
						component='a'
						href={MAVEN_EVENTS_INQUIRY_URL}
						target='_blank'
						rel='noopener noreferrer'
						variant='contained'
						disableElevation
						sx={{
							px: { xs: 3.25, md: 4.5 },
							py: { xs: 1.45, md: 1.6 },
							fontFamily: FONT_HEADING,
							fontSize: { xs: '0.82rem', md: '0.9rem' },
							fontWeight: 600,
							letterSpacing: '0.1em',
							textTransform: 'uppercase',
							color: SURFACE_WHITE,
							backgroundColor: CHARCOAL,
							border: `1px solid ${CHARCOAL}`,
							borderRadius: RADIUS_BUTTON,
							boxShadow: '0 10px 28px rgba(35, 31, 32, 0.18)',
							'&:hover': {
								backgroundColor: CHARCOAL_HOVER,
								borderColor: CHARCOAL_HOVER,
								boxShadow: '0 12px 32px rgba(35, 31, 32, 0.2)',
							},
							'&:focus-visible': {
								boxShadow: `0 0 0 2px ${SOFT_GRAY}, 0 0 0 4px ${BRAND_RED}`,
							},
						}}>
						Plan an Event
					</Button>
				</Box>
			</Box>

			{/* Additional Sustainability Initiatives */}
			<Box
				id='initiatives'
				className='section section--alt'
				sx={{
					...sectionContainerSx,
					...sectionBandAltSx,
					scrollMarginTop: HEADER_SCROLL_MARGIN,
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
						gridTemplateColumns: {
							xs: '1fr',
							sm: 'repeat(2, minmax(0, 1fr))',
							lg: 'repeat(3, minmax(0, 1fr))',
						},
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
									border: `1px solid ${BORDER_LIGHT}`,
									p: 2.25,
									minHeight: 206,
									display: 'flex',
									flexDirection: 'column',
									justifyContent: 'center',
									alignItems: 'center',
									textAlign: 'center',
									gap: 0.7,
								}}>
								<Icon sx={{ color: SUSTAINABILITY_GREEN, fontSize: 38 }} />
								<Typography
									component='h3'
									sx={{ fontSize: '17px', fontWeight: 600, mb: 0 }}>
									{initiative.title}
								</Typography>
								<Typography
									sx={{
										fontSize: '13px',
										color: BODY_TEXT,
										lineHeight: 1.6,
									}}>
									{initiative.description}
								</Typography>
							</Box>
						);
					})}
				</Box>

				<Box sx={{ display: 'flex', justifyContent: 'center', mt: 3 }}>
					<Button
						component='a'
						href={MAVEN_SALES_MAILTO}
						variant='outlined'
						disableElevation
						sx={{
							px: { xs: 1.75, sm: 2.2 },
							py: 0.7,
							fontFamily: FONT_HEADING,
							fontSize: '0.7rem',
							fontWeight: 600,
							letterSpacing: '0.1em',
							textTransform: 'uppercase',
							color: CHARCOAL,
							backgroundColor: 'rgba(255, 255, 255, 0.35)',
							borderRadius: RADIUS_BUTTON,
							borderColor: BRAND_RED,
							borderWidth: '1px',
							boxShadow: 'none',
							'&:hover': {
								backgroundColor: BRAND_RED_SOFT,
								borderColor: BRAND_RED_HOVER,
								color: CHARCOAL,
								boxShadow: 'none',
							},
							'&:focus-visible': {
								boxShadow: `0 0 0 2px ${WARM_WHITE}, 0 0 0 4px ${BRAND_RED}`,
							},
						}}>
						Contact Sales Team
					</Button>
				</Box>
			</Box>

			{/* Methodology / Transparency */}
			<Box
				id='methodology'
				sx={{
					backgroundColor: WARM_WHITE,
					borderTop: '1px solid rgba(216, 209, 200, 0.95)',
					borderBottom: '1px solid rgba(216, 209, 200, 0.95)',
					scrollMarginTop: HEADER_SCROLL_MARGIN,
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
					<Typography
						sx={{
							fontSize: '15px',
							color: BODY_TEXT,
							lineHeight: 1.8,
							maxWidth: 1040,
							mb: 1.25,
						}}>
						These metrics combine measured on-site inputs with standard conversion factors.
						Definitions and scope notes are provided for clarity.
					</Typography>
					<Typography
						sx={{
							fontSize: '15px',
							color: BODY_TEXT,
							lineHeight: 1.8,
							maxWidth: 1040,
							mb: 1.25,
						}}>
						Metrics combine measured on-site inputs with standard conversion factors to
						estimate diversion, soil output, and climate equivalencies.
					</Typography>
					<Typography
						sx={{
							fontSize: '15px',
							color: BODY_TEXT,
							lineHeight: 1.8,
							maxWidth: 1040,
							mb: 2,
						}}>
						Where possible, values reflect property-level activity. Equivalencies are
						directional and provided for context-not audited carbon claims.
					</Typography>

					<Typography
						component='h3'
						sx={{ fontSize: '24px', fontWeight: 500, letterSpacing: '-0.012em', mb: 1 }}>
						How to Read These Metrics
					</Typography>
					<Box component='ul' sx={{ m: 0, pl: 2.25, color: BODY_TEXT, mb: 2 }}>
						<Box component='li' sx={{ fontSize: '14px', lineHeight: 1.8 }}>
							Food scrap diversion is based on measured on-site capture and processing
							volumes.
						</Box>
						<Box component='li' sx={{ fontSize: '14px', lineHeight: 1.8 }}>
							Soil amendment output is estimated using operating conversion assumptions.
						</Box>
						<Box component='li' sx={{ fontSize: '14px', lineHeight: 1.8 }}>
							Climate equivalencies are illustrative and use standardized reference factors.
						</Box>
					</Box>

					<Box sx={{ mb: 2.5 }}>
						<Typography sx={{ fontSize: '12px', color: MUTED_TEXT, mb: 0.5 }}>
							Sustainability reporting powered by <BioGreenLink />
						</Typography>
						<Box
							component='a'
							href={BIOGREEN360_URL}
							target='_blank'
							rel='noopener noreferrer'
							aria-label='BioGreen360 — visit website'
							sx={{
								display: 'inline-flex',
								lineHeight: 0,
								borderRadius: '4px',
								'&:focus-visible': {
									outline: `2px solid ${BRAND_RED}`,
									outlineOffset: '3px',
								},
							}}>
							<Box
								component='img'
								src={poweredByBioGreen}
								alt='BioGreen360'
								sx={{ height: 28 }}
							/>
						</Box>
					</Box>

					<Typography sx={{ fontSize: '12px', color: MUTED_TEXT, mb: 2.5 }}>
						Reported sustainability metrics are estimates based on measured inputs and
						standardized conversion factors; actual impacts may vary.
					</Typography>

					<Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1.5, alignItems: 'center' }}>
						<Button
							component='a'
							href={siteConfig.bookingUrl}
							target='_blank'
							rel='noopener noreferrer'
							variant='contained'
							disableElevation
							sx={{
								px: { xs: 1.75, sm: 2.2 },
								py: 0.7,
								fontFamily: FONT_HEADING,
								fontSize: '0.7rem',
								fontWeight: 600,
								letterSpacing: '0.1em',
								textTransform: 'uppercase',
								color: SURFACE_WHITE,
								backgroundColor: CHARCOAL,
								borderRadius: RADIUS_BUTTON,
								border: `1px solid ${CHARCOAL}`,
								boxShadow: 'none',
								'&:hover': {
									backgroundColor: CHARCOAL_HOVER,
									borderColor: CHARCOAL_HOVER,
									boxShadow: '0 6px 16px rgba(35, 31, 32, 0.16)',
								},
								'&:focus-visible': {
									boxShadow: `0 0 0 2px ${WARM_WHITE}, 0 0 0 4px ${BRAND_RED}`,
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
								fontFamily: FONT_HEADING,
								fontSize: '0.7rem',
								fontWeight: 600,
								letterSpacing: '0.1em',
								textTransform: 'uppercase',
								color: CHARCOAL,
								backgroundColor: 'rgba(255, 255, 255, 0.35)',
								borderRadius: RADIUS_BUTTON,
								borderColor: BRAND_RED,
								borderWidth: '1px',
								boxShadow: 'none',
								'&:hover': {
									backgroundColor: BRAND_RED_SOFT,
									borderColor: BRAND_RED_HOVER,
									color: CHARCOAL,
									boxShadow: 'none',
								},
								'&:focus-visible': {
									boxShadow: `0 0 0 2px ${WARM_WHITE}, 0 0 0 4px ${BRAND_RED}`,
								},
							}}>
							Plan an Event
						</Button>
					</Box>
				</Box>
			</Box>
		</Box>
	);
};

export default CircularFoodSystems;
