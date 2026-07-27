import React, { useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import GrassIcon from '@mui/icons-material/Grass';
import GroupsIcon from '@mui/icons-material/Groups';
import RecyclingIcon from '@mui/icons-material/Recycling';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import DinnerDiningIcon from '@mui/icons-material/DinnerDining';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import AssessmentOutlinedIcon from '@mui/icons-material/AssessmentOutlined';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import ParkOutlinedIcon from '@mui/icons-material/ParkOutlined';
import WorkspacePremiumOutlinedIcon from '@mui/icons-material/WorkspacePremiumOutlined';
import AirOutlinedIcon from '@mui/icons-material/AirOutlined';
import WaterDropOutlinedIcon from '@mui/icons-material/WaterDropOutlined';
import LightbulbOutlinedIcon from '@mui/icons-material/LightbulbOutlined';
import DeviceThermostatOutlinedIcon from '@mui/icons-material/DeviceThermostatOutlined';
import LocalDrinkOutlinedIcon from '@mui/icons-material/LocalDrinkOutlined';
import VpnKeyOutlinedIcon from '@mui/icons-material/VpnKeyOutlined';
import EvStationOutlinedIcon from '@mui/icons-material/EvStationOutlined';
import DirectionsTransitOutlinedIcon from '@mui/icons-material/DirectionsTransitOutlined';
import poweredByBioGreen from '../../assets/PoweredByBioGreen.svg';
import biogreenHowItWorksLogo from '../../assets/biogreen-how-it-works.png';
import howItWorksFoodIcon from '../../assets/how-it-works-food.png';
import howItWorksSproutIcon from '../../assets/how-it-works-sprout.png';
import howItWorksReportIcon from '../../assets/how-it-works-report.png';
import elephantEquivalencyIcon from '../../assets/elephant-equivalency.png';
import footballFieldEquivalencyIcon from '../../assets/football-field-equivalency.png';
import heroBethesdaNorthLobbyImage from '../../assets/hero-bethesda-north-lobby.png';
import eventsBethesdaNorthBoardroomImage from '../../assets/events-bethesda-north-boardroom.jpg';
import StickyHeader from '../../components/StickyHeader';
import {
	MAVEN_EVENTS_INQUIRY_URL,
	MAVEN_RESERVATIONS_URL,
} from '../../constants/mavenExternalLinks';
import {
	BIOGREEN360_URL,
	HEADER_SCROLL_MARGIN,
	PROPERTY_EVENTS_INQUIRY_URL,
} from '../../constants/propertyExternalLinks';
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
	SURFACE_WHITE,
	SUSTAINABILITY_GREEN,
	TYPE,
	WARM_WHITE,
	cardEmphasizedSx,
	cardSx,
	mediaPlaceholderSx,
	pageThemeSx,
	primaryButtonSx,
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
	'https://ck0mqx03j2.execute-api.us-east-1.amazonaws.com/prod/org-stats?id=6554f5c7a8c64cf4f5945857';

const PROPERTY_CONFIG = {
	/** BioGreen360 program launch date at Bethesda North Marriott (calendar date). */
	programLaunchDate: '2023-02-27',
	timeZone: 'America/New_York',
};

/**
 * Event-space figures for the Events section proof-point row.
 * TODO: Periodically verify these figures against the official Marriott property page.
 */
const EVENT_PROPERTY_FACTS = [
	{ value: '26', label: 'Event Rooms' },
	{ value: '61,923', label: 'Sq. Ft. of Event Space' },
	{ value: 'Up to 2,500', label: 'Capacity' },
	{ value: '15', label: 'Breakout Rooms' },
];

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

// BioGreen360 compost & carbon methodology (shared assumptions for impact + equivalencies)
const LBS_PER_SHORT_TON = 2000;
/** Soil coverage: 1 short ton diverted food waste ≈ 6.028 acres fertilized. */
const ACRES_FERTILIZED_PER_SHORT_TON_DIVERTED = 6.028;
/** Avoided-emissions assumption used for illustrative climate equivalencies. */
const AVOIDED_MTCO2E_PER_SHORT_TON = 0.65;
/** EPA urban tree seedling grown for 10 years (metric tons CO2e). */
const EPA_MTCO2E_PER_URBAN_TREE_SEEDLING_10YR = 0.06;
/**
 * Illustrative representative adult African elephant weight (~6 short tons).
 * Guest-facing copy should not imply every African elephant weighs exactly this amount.
 */
const ADULT_AFRICAN_ELEPHANT_LBS = 12000;
/** Acres per full NFL football field (including both end zones). */
const NFL_FOOTBALL_FIELD_ACRES = 1.32;

const parsePoundsFed = (value) => {
	if (value == null || value === '') {
		return null;
	}

	const parsed = Number(value);
	return Number.isFinite(parsed) ? parsed : null;
};

const getShortTons = (poundsFed) => poundsFed / LBS_PER_SHORT_TON;
const getAvoidedMtco2e = (poundsFed) => getShortTons(poundsFed) * AVOIDED_MTCO2E_PER_SHORT_TON;
const getEstimatedAcresFertilized = (poundsFed) =>
	getShortTons(poundsFed) * ACRES_FERTILIZED_PER_SHORT_TON_DIVERTED;
const getTreeSeedlingEquivalency = (poundsFed) =>
	getAvoidedMtco2e(poundsFed) / EPA_MTCO2E_PER_URBAN_TREE_SEEDLING_10YR;
const getAdultAfricanElephantEquivalency = (poundsFed) =>
	poundsFed / ADULT_AFRICAN_ELEPHANT_LBS;
/** NFL fields = Our Impact estimated acres fertilized ÷ acres per field. */
const getNflFootballFieldEquivalency = (poundsFed) =>
	getEstimatedAcresFertilized(poundsFed) / NFL_FOOTBALL_FIELD_ACRES;

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

	let rounded;
	let maximumFractionDigits;
	if (acres < 1) {
		rounded = Math.round(acres * 100) / 100;
		maximumFractionDigits = 2;
	} else if (acres < 10) {
		rounded = Math.round(acres * 10) / 10;
		maximumFractionDigits = 1;
	} else {
		rounded = Math.round(acres * 10) / 10;
		maximumFractionDigits = Number.isInteger(rounded) ? 0 : 1;
	}

	const display = rounded.toLocaleString('en-US', {
		maximumFractionDigits,
		minimumFractionDigits: 0,
	});

	return `${display} acres`;
};

const formatIllustrativeCount = (value, { allowTwoDecimalsBelowOne = false } = {}) => {
	if (value == null || !Number.isFinite(value)) {
		return MISSING_METRIC_VALUE;
	}

	let rounded;
	let maximumFractionDigits;
	if (value >= 10) {
		rounded = Math.round(value);
		maximumFractionDigits = 0;
	} else if (value < 1 && allowTwoDecimalsBelowOne) {
		rounded = Math.round(value * 100) / 100;
		maximumFractionDigits = 2;
	} else {
		rounded = Math.round(value * 10) / 10;
		maximumFractionDigits = 1;
	}

	const display = rounded.toLocaleString('en-US', {
		maximumFractionDigits,
		minimumFractionDigits: 0,
	});

	return `~${display}`;
};

const buildImpactMetrics = (poundsFed) => {
	const daysOperating = getElapsedWholeDays(
		PROPERTY_CONFIG.programLaunchDate,
		PROPERTY_CONFIG.timeZone
	);

	return [
		{
			eyebrow: 'Program Days Operating',
			value:
				daysOperating != null
					? `${formatCountWithSeparators(daysOperating)} days`
					: MISSING_METRIC_VALUE,
			note: 'since February 27, 2023',
			Icon: CalendarTodayIcon,
		},
		{
			eyebrow: 'Food Diverted',
			value: poundsFed != null ? formatShortTonsDisplay(poundsFed) : MISSING_METRIC_VALUE,
			note: 'measured from captured food-scrap inputs',
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

const REPORTING_ICON_COLOR = 'rgba(93, 98, 104, 0.75)';

const buildEquivalencyCards = (poundsFed) => {
	const hasPounds = poundsFed != null;

	return [
		{
			icon: ParkOutlinedIcon,
			iconColor: SUSTAINABILITY_GREEN,
			label: 'Carbon Diversion Equivalency',
			value: hasPounds
				? `${formatIllustrativeCount(getTreeSeedlingEquivalency(poundsFed))} trees planted`
				: MISSING_METRIC_VALUE,
			note: 'Equivalent to urban tree seedlings grown for 10 years using documented EPA conversion factors.',
		},
		{
			iconImage: elephantEquivalencyIcon,
			iconColor: SUSTAINABILITY_GREEN,
			iconSize: { xs: 87.5, md: 100 },
			label: 'Weight Equivalency',
			value: hasPounds
				? `${formatIllustrativeCount(getAdultAfricanElephantEquivalency(poundsFed))} adult African elephants`
				: MISSING_METRIC_VALUE,
			note: 'Compared with a representative adult African elephant weight of approximately 6 tons.',
		},
		{
			iconImage: footballFieldEquivalencyIcon,
			iconColor: SUSTAINABILITY_GREEN,
			label: 'Soil-Coverage Equivalency',
			value: hasPounds
				? `${formatIllustrativeCount(getNflFootballFieldEquivalency(poundsFed), {
						allowTwoDecimalsBelowOne: true,
				  })} NFL football fields`
				: MISSING_METRIC_VALUE,
			note: 'Estimated finished-compost coverage compared with a full NFL football field at a one-inch application depth.',
		},
	];
};

const initiativeCategories = [
	{
		label: 'Building & Resource Efficiency',
		layout: 'three-plus-two',
		items: [
			{
				title: 'LEED Gold Certified',
				description:
					'Bethesda North Marriott has been LEED Gold certified since May 2023, recognizing sustainability achievement in the hotel’s building operations.',
				icon: WorkspacePremiumOutlinedIcon,
			},
			{
				title: 'Air Purification',
				description:
					'Air purifiers are used throughout the hotel’s public and meeting spaces, removing 99.4% of harmful bacteria every 30 minutes.',
				icon: AirOutlinedIcon,
			},
			{
				title: 'Touchless Faucets',
				description:
					'Battery-operated infrared faucets have been installed in all public restrooms to help prevent unnecessary water use.',
				icon: WaterDropOutlinedIcon,
			},
			{
				title: 'Energy-Efficient Lighting',
				description:
					'Lighting throughout the property has been surveyed and upgraded with LED fixtures and bulbs to improve energy efficiency.',
				icon: LightbulbOutlinedIcon,
			},
			{
				title: 'Smart Thermostats',
				description:
					'Telkonet smart thermostats have been installed in all guest rooms to help reduce unnecessary energy use.',
				icon: DeviceThermostatOutlinedIcon,
			},
		],
	},
	{
		label: 'Waste Reduction & Guest Experience',
		layout: 'three',
		items: [
			{
				title: 'Comprehensive Recycling',
				description:
					'A property-wide recycling program separates paper and plastic in guest rooms, public spaces, and associate areas throughout the hotel.',
				icon: RecyclingIcon,
			},
			{
				title: 'Water Refill Stations',
				description:
					'Multiple water refill stations are available throughout the hotel, reducing reliance on single-use plastic water bottles in guest rooms and event spaces.',
				icon: LocalDrinkOutlinedIcon,
			},
			{
				title: 'Virtual and Recyclable Room Keys',
				description:
					'The hotel’s room-key recycling program and virtual room-key application help reduce single-use plastic waste. Bethesda North Marriott was the first Marriott hotel to implement a method for sharing virtual room keys.',
				icon: VpnKeyOutlinedIcon,
			},
		],
	},
	{
		label: 'Transportation & Access',
		layout: 'two',
		items: [
			{
				title: 'EV Charging Stations',
				description: 'Ten electric-vehicle charging stations are available across the property.',
				icon: EvStationOutlinedIcon,
				details: [
					'4 stations in the hotel parking lot',
					'6 stations in the Conference Center Garage',
					'J-1772 plug type',
					'ChargeLab platform',
					'Tesla adapters available to borrow from the Front Desk',
				],
			},
			{
				title: 'Sustainable Mobility',
				description:
					'The garage and parking lot include preferred ride-share parking, bicycle racks, and electric-vehicle charging. The hotel is approximately 100 feet from the Metro, making car-free arrival a practical option for many guests and attendees.',
				icon: DirectionsTransitOutlinedIcon,
			},
		],
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
		timeZone: PROPERTY_CONFIG.timeZone,
		month: 'short',
		day: 'numeric',
		year: 'numeric',
		hour: 'numeric',
		minute: '2-digit',
		hour12: true,
		timeZoneName: 'short',
	}).formatToParts(parsedDate);

	const partValue = (type) => parts.find((part) => part.type === type)?.value ?? '';
	let timeZoneName = partValue('timeZoneName');
	// Keep Eastern Time labels only (Bethesda, MD). Never show Mountain Time abbreviations.
	if (!/^(EST|EDT|ET)$/i.test(timeZoneName)) {
		timeZoneName = 'ET';
	}

	return `${partValue('month')} ${partValue('day')}, ${partValue('year')} ${partValue('hour')}:${partValue('minute')} ${partValue('dayPeriod')} ${timeZoneName}`;
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

	const { eventsEnabled, showEquivalencies } = siteConfig;

	const partnershipCapabilities = [
		{
			label: 'On-property food-scrap processing',
			Icon: DinnerDiningIcon,
		},
		{
			label: 'Property-level measurement and reporting',
			Icon: AssessmentOutlinedIcon,
		},
		{
			label: 'Program setup and operational support',
			Icon: GroupsIcon,
		},
		{
			label: 'Downstream pathway coordination',
			Icon: RecyclingIcon,
		},
	];

	// Process icons ship with a baked-in off-white square (#F4F2EF). Match circle fill exactly.
	const PROCESS_CIRCLE_FILL = '#F4F2EF';

	const primaryProcessingSteps = [
		{
			title: 'Capture',
			description:
				'Participating food scraps are separated during kitchen, banquet, and food-service operations.',
			icon: (
				<Box
					component='img'
					src={howItWorksFoodIcon}
					alt=''
					aria-hidden='true'
					sx={{
						height: 56,
						width: 'auto',
						maxWidth: 72,
						objectFit: 'contain',
						display: 'block',
						backgroundColor: 'transparent',
					}}
				/>
			),
		},
		{
			title: 'Process',
			description: 'Collected material is processed through the hotel’s BioGreen360 equipment.',
			icon: (
				<Box
					component='img'
					src={biogreenHowItWorksLogo}
					alt=''
					aria-hidden='true'
					sx={{
						height: 56,
						width: 'auto',
						maxWidth: 72,
						objectFit: 'contain',
						display: 'block',
						backgroundColor: 'transparent',
					}}
				/>
			),
		},
		{
			title: 'Measure',
			description: 'Program activity is recorded and translated into property-level reporting.',
			icon: (
				<Box
					component='img'
					src={howItWorksReportIcon}
					alt=''
					aria-hidden='true'
					sx={{
						height: 56,
						width: 'auto',
						maxWidth: 72,
						objectFit: 'contain',
						display: 'block',
						backgroundColor: 'transparent',
					}}
				/>
			),
		},
		{
			title: 'Coordinate',
			description:
				'Processed material is directed through available beneficial-use or composting pathways.',
			icon: (
				<Box
					component='img'
					src={howItWorksSproutIcon}
					alt=''
					aria-hidden='true'
					sx={{
						height: 56,
						width: 'auto',
						maxWidth: 72,
						objectFit: 'contain',
						display: 'block',
						backgroundColor: 'transparent',
					}}
				/>
			),
		},
	];

	const eventFlowSteps = [
		{
			icon: (
				<CalendarTodayIcon
					aria-hidden='true'
					sx={{ fontSize: 48, color: SUSTAINABILITY_GREEN }}
				/>
			),
			title: 'Coordinate in Advance',
			description:
				'Confirm tracking availability with the hotel’s events team during the planning process.',
		},
		{
			icon: (
				<Box
					component='img'
					src={howItWorksFoodIcon}
					alt=''
					aria-hidden='true'
					sx={{
						height: 56,
						width: 'auto',
						maxWidth: 72,
						objectFit: 'contain',
						display: 'block',
						backgroundColor: 'transparent',
					}}
				/>
			),
			title: 'Track the Event',
			description:
				'Participating culinary and banquet food scraps are recorded during the gathering.',
		},
		{
			icon: (
				<Box
					component='img'
					src={howItWorksReportIcon}
					alt=''
					aria-hidden='true'
					sx={{
						height: 56,
						width: 'auto',
						maxWidth: 72,
						objectFit: 'contain',
						display: 'block',
						backgroundColor: 'transparent',
					}}
				/>
			),
			title: 'Receive the Recap',
			description:
				'Review a post-event summary of measured results, estimates, and reporting scope.',
		},
	];

	const eventPlannerDeliverables = [
		'Event-specific food-diversion results',
		'Estimated soil amendment and coverage',
		'Illustrative impact equivalencies',
		'Methodology and reporting scope',
	];

	const impactMetrics = buildImpactMetrics(poundsFed);
	const equivalencyCards = buildEquivalencyCards(poundsFed);
	const equivalencyCardsToRender = showEquivalencies ? equivalencyCards : [];
	const equivalencyDisclaimer =
		'Equivalencies are illustrative estimates based on documented assumptions.';
	const formattedLastSync = formatLastSync(siteConfig.lastSync);
	const lastUpdatedLabel = formattedLastSync ?? 'Last sync: unavailable';
	const formattedStatLastUpdate = formatLastSync(statLastUpdate);
	const lastUpdatedDisplay = formattedStatLastUpdate ?? lastUpdatedLabel;
	const programAtAGlanceCards = [
		{
			title: 'What materials are included?',
			body: 'Participating food scraps from hotel kitchens, banquets, and other food-service operations.',
		},
		{
			title: 'Where are food scraps processed?',
			body: 'Through BioGreen360 equipment installed directly at Bethesda North Marriott.',
		},
		{
			title: 'How is impact reported?',
			body: (
				<>
					<Box
						component='a'
						href='#live-reporting'
						onClick={(event) => {
							event.preventDefault();
							scrollToSection('live-reporting');
						}}
						sx={SENTENCE_LINK_SX}>
						Property data
					</Box>{' '}
					updates automatically as new program activity is recorded.
				</>
			),
		},
		{
			title: 'Can events participate?',
			body: (
				<>
					Yes, when{' '}
					<Box
						component='a'
						href='#events'
						onClick={(event) => {
							event.preventDefault();
							scrollToSection('events');
						}}
						sx={SENTENCE_LINK_SX}>
						tracking
					</Box>{' '}
					is coordinated in advance and operationally available.
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
						At Bethesda North Marriott Hotel &amp; Conference Center, sustainability supports both daily
						hotel operations and the gatherings we host. This site shares food-waste diversion results,
						explains the BioGreen360 program, and shows how qualifying events can request dedicated
						impact reporting.
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
							<Box component='span'>PROPERTY-LEVEL DATA</Box>
							<Box component='span' aria-hidden='true' sx={{ display: { xs: 'none', sm: 'inline' } }}>
								•
							</Box>
							<Box component='span'>ON-PROPERTY PROCESSING</Box>
							<Box component='span' aria-hidden='true' sx={{ display: { xs: 'none', sm: 'inline' } }}>
								•
							</Box>
							<Box component='span'>EVENT REPORTING BY REQUEST</Box>
						</Typography>
					</Box>
				</Box>

				<Box
					sx={{
						width: '100%',
						maxWidth: 1120,
						mx: 'auto',
						mt: { xs: 4, md: 5.5 },
						mb: 0,
					}}>
					<Box
						component='img'
						src={heroBethesdaNorthLobbyImage}
						alt='Bethesda North Marriott Hotel & Conference Center front desk with the Marriott Bethesda North logo displayed behind the reception counter.'
						sx={{
							width: '100%',
							aspectRatio: { xs: '16 / 10', md: '16 / 9' },
							minHeight: { xs: 220, md: 360 },
							objectFit: 'cover',
							objectPosition: 'center',
							borderRadius: RADIUS_IMAGE,
							border: `1px solid ${BORDER_LIGHT}`,
							boxShadow: SHADOW_IMAGE,
							display: 'block',
						}}
					/>
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
							Participating food scraps are processed directly at the hotel through{' '}
							<Box
								component='a'
								href='#biogreen360'
								onClick={(event) => {
									event.preventDefault();
									scrollToSection('biogreen360');
								}}
								sx={SENTENCE_LINK_SX}>
								BioGreen360
							</Box>
							.
						</Box>
						<Box component='li' sx={{ mb: 1 }}>
							<Box
								component='a'
								href='#live-reporting'
								onClick={(event) => {
									event.preventDefault();
									scrollToSection('live-reporting');
								}}
								sx={SENTENCE_LINK_SX}>
								Live reporting
							</Box>{' '}
							shows cumulative diversion and estimated soil outcomes.
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
								post-event recap
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
						Here is what guests, planners, and hotel teams should know about the program.
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
					A current view of program tenure, measured food diversion, and estimated soil coverage.
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
								{metric.note ? (
									<Typography sx={{ fontSize: '12px', color: MUTED_TEXT, mt: 1 }}>
										{metric.note}
									</Typography>
								) : null}
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

			{/* BioGreen360 Partnership */}
			<Box
				id='biogreen360'
				component='section'
				aria-labelledby='biogreen360-heading'
				className='section section--base'
				sx={{
					...sectionContainerSx,
					...sectionBandBaseSx,
					scrollMarginTop: HEADER_SCROLL_MARGIN,
				}}>
				<Box
					sx={{
						display: 'grid',
						gridTemplateColumns: { xs: '1fr', md: '1.15fr 0.85fr' },
						gap: { xs: 3.5, md: 5 },
						alignItems: 'start',
					}}>
					{/* Left column: copy and capabilities (first in mobile reading order) */}
					<Box>
						<Typography className='micro-label' sx={{ mb: 1.5 }}>
							PROGRAM TECHNOLOGY & SUPPORT
						</Typography>
						<Box
							sx={{
								display: 'flex',
								flexWrap: 'wrap',
								alignItems: 'center',
								gap: { xs: 1.75, md: 2.5 },
								mb: 1.75,
							}}>
							<Typography
								id='biogreen360-heading'
								component='h2'
								sx={{
									fontSize: { xs: '28px', md: '34px' },
									fontWeight: 500,
									lineHeight: 1.25,
									color: CHARCOAL,
									m: 0,
								}}>
								A Cornerstone Partnership with
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
									flexShrink: 0,
									'&:focus-visible': {
										outline: `2px solid ${BRAND_RED}`,
										outlineOffset: '3px',
									},
								}}>
								<Box
									component='img'
									src={poweredByBioGreen}
									alt='BioGreen360'
									sx={{
										height: { xs: 36, md: 48 },
										width: 'auto',
										display: 'block',
									}}
								/>
							</Box>
						</Box>
						<Typography
							sx={{
								fontSize: { xs: '16px', md: '17px' },
								color: BODY_TEXT,
								lineHeight: 1.75,
								maxWidth: 680,
								mb: { xs: 3, md: 3.5 },
							}}>
							BioGreen360 provides the on-property processing technology, reporting platform, and
							program support behind Bethesda North Marriott’s food-waste diversion initiative.
						</Typography>

						<Typography
							component='h3'
							sx={{
								fontSize: { xs: '22px', md: '24px' },
								fontWeight: 500,
								color: CHARCOAL,
								letterSpacing: '-0.012em',
								mb: 1.25,
							}}>
							Supporting Daily Hotel Operations
						</Typography>
						<Typography
							sx={{
								fontSize: '16px',
								color: BODY_TEXT,
								lineHeight: 1.75,
								maxWidth: 680,
								mb: { xs: 2.5, md: 3 },
							}}>
							The program gives participating culinary and banquet teams a practical way to manage
							food scraps while providing property leaders with clearer visibility into program
							activity.
						</Typography>

						<Box
							sx={{
								display: 'grid',
								gridTemplateColumns: { xs: '1fr', sm: 'repeat(2, minmax(0, 1fr))' },
								borderTop: `1px solid ${BORDER_LIGHT}`,
								borderLeft: `1px solid ${BORDER_LIGHT}`,
								mb: { xs: 3, md: 3.5 },
							}}>
							{partnershipCapabilities.map((item) => {
								const Icon = item.Icon;
								return (
									<Box
										key={item.label}
										sx={{
											display: 'flex',
											alignItems: 'flex-start',
											gap: 1.25,
											p: { xs: 1.75, md: 2 },
											borderRight: `1px solid ${BORDER_LIGHT}`,
											borderBottom: `1px solid ${BORDER_LIGHT}`,
											backgroundColor: SURFACE_WHITE,
										}}>
										<Icon
											sx={{
												fontSize: 26,
												color: SUSTAINABILITY_GREEN,
												mt: '2px',
												flexShrink: 0,
											}}
											aria-hidden='true'
										/>
										<Typography
											sx={{
												fontSize: '14px',
												lineHeight: 1.55,
												color: CHARCOAL,
												fontWeight: 500,
											}}>
											{item.label}
										</Typography>
									</Box>
								);
							})}
						</Box>

						<Typography
							component='h3'
							sx={{
								fontSize: { xs: '22px', md: '24px' },
								fontWeight: 500,
								color: CHARCOAL,
								letterSpacing: '-0.012em',
								mb: 1.25,
							}}>
							From Processing to Beneficial Use
						</Typography>
						<Typography
							sx={{
								fontSize: '16px',
								color: BODY_TEXT,
								lineHeight: 1.75,
								maxWidth: 680,
								mb: 2,
							}}>
							After processing, material is coordinated through local beneficial-use or composting
							pathways selected according to operational needs and availability.
						</Typography>
						<Box
							component='a'
							href='#methodology'
							onClick={(event) => {
								event.preventDefault();
								scrollToSection('methodology');
							}}
							className='lux-link lux-link--internal'
							sx={{
								fontSize: '12px',
								letterSpacing: '0.08em',
								textTransform: 'uppercase',
							}}>
							View processing definitions and methodology
						</Box>
					</Box>

					{/* Right column: media + milestone */}
					<Box
						sx={{
							display: 'flex',
							flexDirection: 'column',
							gap: 2.5,
						}}>
						{/* TODO: Prefer approved Bethesda North Marriott BioGreen360 equipment or operational photography. */}
						<Box
							role='status'
							aria-label='Bethesda North Marriott BioGreen360 program imagery pending approval'
							sx={{
								...mediaPlaceholderSx,
								width: '100%',
								aspectRatio: '1 / 1',
								minHeight: { xs: 220, md: 280 },
								borderRadius: RADIUS_IMAGE,
								boxShadow: SHADOW_IMAGE,
								gap: 1.25,
							}}>
							<Typography className='micro-label' sx={{ mb: 0 }}>
								PHOTO / MEDIA PLACEMENT
							</Typography>
							<Typography
								sx={{
									fontSize: { xs: '15px', md: '16px' },
									color: BODY_TEXT,
									lineHeight: 1.5,
									maxWidth: 320,
								}}>
								Bethesda North Marriott BioGreen360 program imagery pending approval
							</Typography>
						</Box>

						<Box
							sx={{
								...cardEmphasizedSx,
								p: { xs: 2, md: 2.25 },
							}}>
							<Typography className='micro-label' sx={{ mb: 1 }}>
								PROGRAM MILESTONE
							</Typography>
							<Typography
								component='h3'
								sx={{
									fontSize: { xs: '18px', md: '20px' },
									fontWeight: 500,
									color: CHARCOAL,
									letterSpacing: '-0.01em',
									lineHeight: 1.35,
									mb: 1,
								}}>
								First Marriott-Branded Hotel to Install BioGreen360
							</Typography>
							<Typography sx={{ fontSize: '14px', color: BODY_TEXT, lineHeight: 1.7 }}>
								Bethesda North Marriott launched the program in February 2023, establishing the first
								BioGreen360 installation within the Marriott brand.
							</Typography>
						</Box>
					</Box>
				</Box>
			</Box>

			{/* How it Works */}
			{/* NOTE: Main How It Works section (below Partnership) */}
			<Box
				id='how-it-works'
				component='section'
				aria-labelledby='how-it-works-heading'
				className='section section--alt'
				sx={{
					...sectionContainerSx,
					...sectionBandAltSx,
					scrollMarginTop: HEADER_SCROLL_MARGIN,
				}}>
				<Typography className='micro-label' sx={{ textAlign: 'center', mb: 1.5 }}>
					THE FOOD-WASTE PROGRAM
				</Typography>
				<Typography
					id='how-it-works-heading'
					component='h2'
					sx={{
						fontSize: { xs: '28px', md: '34px' },
						fontWeight: 500,
						textAlign: 'center',
						color: CHARCOAL,
						mb: { xs: 1.75, md: 2.25 },
					}}>
					How the Program Works
				</Typography>
				<Typography
					sx={{
						fontSize: { xs: '16px', md: '17px' },
						color: BODY_TEXT,
						lineHeight: 1.75,
						textAlign: 'center',
						maxWidth: 760,
						mx: 'auto',
						mb: { xs: 4, md: 5.5 },
					}}>
					Food scraps move through a four-step workflow designed for clear handling, measurement, and
					reporting.
				</Typography>

				<Box
					sx={{
						display: 'flex',
						flexDirection: { xs: 'column', md: 'row' },
						flexWrap: { xs: 'nowrap', md: 'nowrap' },
						justifyContent: 'center',
						alignItems: { xs: 'center', md: 'flex-start' },
						gap: { xs: 3.5, md: 0 },
					}}>
					{primaryProcessingSteps.map((step, index) => (
						<React.Fragment key={step.title}>
							<Box
								sx={{
									display: 'flex',
									flexDirection: 'column',
									alignItems: 'center',
									flex: { xs: '0 0 auto', md: '1 1 0' },
									width: { xs: '100%', md: 'auto' },
									minWidth: { xs: 0, md: 0 },
									px: { md: 1 },
									textAlign: 'center',
								}}>
								<Box
									sx={{
										width: { xs: 116, md: 128 },
										height: { xs: 116, md: 128 },
										flexShrink: 0,
										borderRadius: '50%',
										border: `2px solid ${SUSTAINABILITY_GREEN}`,
										backgroundColor: PROCESS_CIRCLE_FILL,
										display: 'flex',
										alignItems: 'center',
										justifyContent: 'center',
										mb: { xs: 2, md: 2.5 },
										overflow: 'hidden',
									}}>
									{step.icon}
								</Box>
								<Typography
									component='h3'
									sx={{
										fontSize: { xs: '17px', md: '18px' },
										fontWeight: 500,
										letterSpacing: '-0.01em',
										lineHeight: 1.35,
										color: CHARCOAL,
										mb: 1,
										maxWidth: 220,
									}}>
									{step.title}
								</Typography>
								<Typography
									sx={{
										fontSize: '14px',
										lineHeight: 1.65,
										color: BODY_TEXT,
										maxWidth: 230,
										mx: 'auto',
									}}>
									{step.description}
								</Typography>
							</Box>
							{index < 3 && (
								<Box
									aria-hidden='true'
									sx={{
										display: { xs: 'none', md: 'flex' },
										alignItems: 'center',
										justifyContent: 'center',
										flexShrink: 0,
										px: 1.25,
										height: { md: 128 },
									}}>
									<ArrowForwardIcon
										sx={{ color: SUSTAINABILITY_GREEN, fontSize: 34 }}
										aria-hidden='true'
									/>
								</Box>
							)}
						</React.Fragment>
					))}
				</Box>
				<Typography
					sx={{
						fontSize: '13px',
						color: MUTED_TEXT,
						textAlign: 'center',
						mt: { xs: 3.5, md: 4.5 },
						maxWidth: 820,
						mx: 'auto',
						lineHeight: 1.7,
					}}>
					Definitions, estimates, and reporting boundaries are explained in{' '}
					<Box
						component='a'
						href='#methodology'
						onClick={(event) => {
							event.preventDefault();
							scrollToSection('methodology');
						}}
						sx={{
							...SENTENCE_LINK_SX,
							fontSize: 'inherit',
							color: MUTED_TEXT,
							'&:hover': {
								color: BRAND_RED,
							},
						}}>
						Methodology
					</Box>
					.
				</Typography>
				<Box
					sx={{
						mt: { xs: 6, md: 8.5 },
						display: 'grid',
						gridTemplateColumns: { xs: '1fr', md: 'minmax(0, 1fr) minmax(0, 1fr)' },
						gap: { xs: 3.5, md: 5.5 },
						alignItems: 'start',
					}}>
					{/* TODO: Prefer approved Bethesda North Marriott BioGreen360 equipment or operational photography here. */}
					<Box
						role='status'
						aria-label='Bethesda North Marriott BioGreen360 equipment or program imagery pending approval'
						sx={{
							...mediaPlaceholderSx,
							width: '100%',
							aspectRatio: { xs: '16 / 10', md: '4 / 3' },
							minHeight: { xs: 220, md: 280 },
							borderRadius: RADIUS_IMAGE,
							boxShadow: SHADOW_IMAGE,
							gap: 1.25,
						}}>
						<Typography className='micro-label' sx={{ mb: 0 }}>
							PHOTO / MEDIA PLACEMENT
						</Typography>
						<Typography
							sx={{
								fontSize: { xs: '15px', md: '16px' },
								color: BODY_TEXT,
								lineHeight: 1.5,
								maxWidth: 360,
							}}>
							Bethesda North Marriott BioGreen360 equipment or program imagery pending approval
						</Typography>
					</Box>
					<Box>
						<Typography className='micro-label' sx={{ mb: 1 }}>
							ON-PROPERTY PROCESSING
						</Typography>
						<Typography
							component='h3'
							sx={{
								fontSize: { xs: '26px', md: '30px' },
								fontWeight: 500,
								letterSpacing: '-0.015em',
								lineHeight: 1.3,
								color: CHARCOAL,
								mb: 1.5,
							}}>
							Designed for Hotel Operations
						</Typography>
						<Typography
							sx={{ fontSize: '15px', color: BODY_TEXT, lineHeight: 1.75, mb: 1.25 }}>
							Bethesda North Marriott’s BioGreen360 equipment supports a practical workflow for managing
							participating food scraps directly at the property.
						</Typography>
						<Typography
							sx={{ fontSize: '15px', color: BODY_TEXT, lineHeight: 1.75, mb: 1.25 }}>
							Automated measurement gives hotel teams clearer visibility into diversion activity without
							adding separate manual reporting steps.
						</Typography>
						<Typography
							sx={{ fontSize: '15px', color: BODY_TEXT, lineHeight: 1.75, mb: 2 }}>
							Downstream handling is coordinated according to operational requirements, partner
							availability, and approved processing pathways.
						</Typography>
						<Box
							component='a'
							href='#methodology'
							onClick={(event) => {
								event.preventDefault();
								scrollToSection('methodology');
							}}
							className='lux-link lux-link--internal'
							sx={{
								fontSize: '12px',
								letterSpacing: '0.08em',
								textTransform: 'uppercase',
							}}>
							View processing definitions and methodology
						</Box>
					</Box>
				</Box>
			</Box>

			{/* Live Sustainability Impact Reporting */}
			<Box
				id='live-reporting'
				component='section'
				aria-labelledby='live-reporting-heading'
				className='section section--base live-reporting-section lsir-section'
				sx={{
					...sectionContainerSx,
					...sectionBandBaseSx,
					scrollMarginTop: HEADER_SCROLL_MARGIN,
					'& .lsir-card-value': { color: CHARCOAL },
				}}>
				<Typography className='micro-label' sx={{ mb: 1.5 }}>
					IMPACT EQUIVALENCIES
				</Typography>
				<Typography
					id='live-reporting-heading'
					component='h2'
					sx={{
						fontSize: { xs: '28px', md: '34px' },
						fontWeight: 500,
						color: CHARCOAL,
						mb: 1.5,
					}}>
					Putting the Numbers in Perspective
				</Typography>
				<Box
					sx={{
						display: 'flex',
						flexWrap: 'wrap',
						justifyContent: 'space-between',
						alignItems: 'center',
						gap: 1.25,
						mb: 2.5,
					}}>
					<Typography sx={{ fontSize: '15px', color: BODY_TEXT, lineHeight: 1.7, maxWidth: 720 }}>
						These comparisons translate cumulative program results into familiar reference points.
					</Typography>
					<Box
						component='a'
						href='#methodology'
						onClick={(event) => {
							event.preventDefault();
							scrollToSection('methodology');
						}}
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
						gridTemplateColumns: {
							xs: '1fr',
							sm: 'repeat(2, minmax(0, 1fr))',
							md: 'repeat(3, minmax(0, 1fr))',
						},
						gap: { xs: 2, md: 2.5 },
						alignItems: 'stretch',
					}}>
					{equivalencyCardsToRender.map((card) => {
						const Icon = card.icon;
						return (
							<Box
								key={card.label}
								sx={{
									backgroundColor: SURFACE_WHITE,
									border: '1px solid',
									borderColor: BORDER_LIGHT,
									borderRadius: RADIUS_CARD,
									p: { xs: 2.5, md: 3 },
									minHeight: 240,
									display: 'flex',
									flexDirection: 'column',
									textAlign: 'center',
									boxShadow: SHADOW_CARD,
								}}>
								<Typography className='micro-label lsir-card-title' sx={{ mb: 1.25 }}>
									{card.label}
								</Typography>
								<Typography
									component='p'
									className='lsir-card-value'
									sx={{
										fontSize: { xs: '24px', md: '28px' },
										fontWeight: 500,
										letterSpacing: '-0.015em',
										lineHeight: 1.25,
										mb: 0.75,
										px: 0.5,
										overflowWrap: 'break-word',
										hyphens: 'auto',
									}}>
									{card.value}
								</Typography>
								<Typography
									sx={{
										fontSize: '12px',
										color: MUTED_TEXT,
										lineHeight: 1.5,
										mb: 1.5,
										maxWidth: 280,
										mx: 'auto',
									}}>
									{card.note}
								</Typography>
								{card.iconImage ? (
									<Box
										sx={{
											mt: 'auto',
											pt: 1.75,
											alignSelf: 'center',
											lineHeight: 0,
										}}>
										<Box
											aria-hidden='true'
											sx={{
												width: card.iconSize || { xs: 70, md: 80 },
												height: card.iconSize || { xs: 70, md: 80 },
												backgroundColor: card.iconColor || SUSTAINABILITY_GREEN,
												maskImage: `url(${card.iconImage})`,
												maskSize: 'contain',
												maskRepeat: 'no-repeat',
												maskPosition: 'center',
												WebkitMaskImage: `url(${card.iconImage})`,
												WebkitMaskSize: 'contain',
												WebkitMaskRepeat: 'no-repeat',
												WebkitMaskPosition: 'center',
											}}
										/>
									</Box>
								) : (
									<Icon
										aria-hidden='true'
										sx={{
											fontSize: { xs: 70, md: 80 },
											color: card.iconColor || REPORTING_ICON_COLOR,
											mt: 'auto',
											pt: 1.75,
											alignSelf: 'center',
										}}
									/>
								)}
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
				component='section'
				aria-labelledby='events-heading'
				className='section section--alt'
				sx={{
					...sectionContainerSx,
					...sectionBandAltSx,
					scrollMarginTop: HEADER_SCROLL_MARGIN,
				}}>
				<Box
					sx={{
						display: 'grid',
						gridTemplateColumns: { xs: '1fr', md: 'minmax(0, 1.1fr) minmax(0, 0.95fr)' },
						gap: { xs: 3, md: 5 },
						alignItems: 'start',
						mb: { xs: 6, md: 8.5 },
					}}>
					<Box>
						<Typography className='micro-label' sx={{ mb: 1.5 }}>
							SUSTAINABLE MEETINGS & EVENTS
						</Typography>
						<Typography
							id='events-heading'
							component='h2'
							sx={{
								fontSize: { xs: '28px', md: '34px' },
								fontWeight: 500,
								color: CHARCOAL,
								mb: 1.75,
							}}>
							Add Measurable Impact to Your Event
						</Typography>
						<Typography
							sx={{
								fontSize: '16px',
								fontWeight: 400,
								color: BODY_TEXT,
								lineHeight: 1.8,
								mb: 1.25,
								maxWidth: 560,
							}}>
							Qualifying meetings, conferences, weddings, and social events can incorporate dedicated
							food-scrap tracking when coordinated in advance with the hotel team.
						</Typography>
						<Typography
							sx={{
								fontSize: '16px',
								fontWeight: 400,
								color: BODY_TEXT,
								lineHeight: 1.8,
								mb: 2.5,
								maxWidth: 560,
							}}>
							After the event, planners may receive a concise impact recap summarizing measured
							diversion, estimated soil outcomes, and illustrative equivalencies.
						</Typography>
						<Box
							sx={{
								display: 'grid',
								gridTemplateColumns: { xs: '1fr 1fr', sm: 'repeat(4, minmax(0, 1fr))' },
								gap: { xs: 1.5, sm: 2 },
								maxWidth: 560,
							}}>
							{EVENT_PROPERTY_FACTS.map((fact) => (
								<Box key={fact.label} sx={{ minWidth: 0 }}>
									<Typography
										sx={{
											fontFamily: FONT_HEADING,
											fontSize: { xs: '18px', md: '20px' },
											fontWeight: 600,
											color: CHARCOAL,
											lineHeight: 1.2,
											letterSpacing: '-0.01em',
										}}>
										{fact.value}
									</Typography>
									<Typography
										sx={{
											fontSize: '11px',
											color: MUTED_TEXT,
											lineHeight: 1.35,
											mt: 0.35,
										}}>
										{fact.label}
									</Typography>
								</Box>
							))}
						</Box>
					</Box>

					<Box
						component='img'
						src={eventsBethesdaNorthBoardroomImage}
						alt='Bethesda North Marriott boardroom with a long conference table set for a meeting and a projection screen displaying the Marriott Bethesda North logo.'
						sx={{
							width: '100%',
							aspectRatio: { xs: '16 / 10', md: '16 / 11' },
							objectFit: 'cover',
							objectPosition: 'center',
							borderRadius: RADIUS_IMAGE,
							border: `1px solid ${BORDER_LIGHT}`,
							boxShadow: SHADOW_IMAGE,
							display: 'block',
						}}
					/>
				</Box>

				<Typography
					component='h3'
					sx={{
						fontSize: { xs: '26px', md: '30px' },
						fontWeight: 500,
						letterSpacing: '-0.015em',
						color: CHARCOAL,
						textAlign: 'center',
						mb: { xs: 4, md: 5.5 },
					}}>
					How Event Reporting Works
				</Typography>

				<Box
					sx={{
						display: 'flex',
						flexDirection: { xs: 'column', md: 'row' },
						flexWrap: { xs: 'nowrap', md: 'nowrap' },
						justifyContent: 'center',
						alignItems: { xs: 'center', md: 'flex-start' },
						gap: { xs: 3.5, md: 0 },
						mb: { xs: 4.5, md: 5.5 },
					}}>
					{eventFlowSteps.map((step, idx) => (
						<React.Fragment key={step.title}>
							<Box
								sx={{
									display: 'flex',
									flexDirection: 'column',
									alignItems: 'center',
									flex: { xs: '0 0 auto', md: '1 1 0' },
									width: { xs: '100%', md: 'auto' },
									minWidth: { xs: 0, md: 0 },
									px: { md: 1 },
									textAlign: 'center',
								}}>
								<Box
									sx={{
										width: { xs: 116, md: 128 },
										height: { xs: 116, md: 128 },
										flexShrink: 0,
										borderRadius: '50%',
										border: `2px solid ${SUSTAINABILITY_GREEN}`,
										backgroundColor: PROCESS_CIRCLE_FILL,
										display: 'flex',
										alignItems: 'center',
										justifyContent: 'center',
										mb: { xs: 2, md: 2.5 },
										overflow: 'hidden',
									}}>
									{step.icon}
								</Box>
								<Typography
									component='h4'
									sx={{
										fontSize: { xs: '17px', md: '18px' },
										fontWeight: 500,
										letterSpacing: '-0.01em',
										lineHeight: 1.35,
										color: CHARCOAL,
										mb: 1,
										maxWidth: 240,
									}}>
									{step.title}
								</Typography>
								<Typography
									sx={{
										fontSize: '14px',
										lineHeight: 1.65,
										color: BODY_TEXT,
										maxWidth: 250,
										mx: 'auto',
									}}>
									{step.description}
								</Typography>
							</Box>
							{idx < 2 && (
								<Box
									aria-hidden='true'
									sx={{
										display: { xs: 'none', md: 'flex' },
										alignItems: 'center',
										justifyContent: 'center',
										flexShrink: 0,
										px: 1.25,
										height: { md: 128 },
									}}>
									<ArrowForwardIcon
										sx={{ color: SUSTAINABILITY_GREEN, fontSize: 34 }}
										aria-hidden='true'
									/>
								</Box>
							)}
						</React.Fragment>
					))}
				</Box>

				<Box
					sx={{
						...cardEmphasizedSx,
						backgroundColor: SURFACE_WHITE,
						p: { xs: 2.5, md: 3 },
						maxWidth: 720,
						mx: 'auto',
						mb: { xs: 3, md: 4 },
					}}>
					<Typography className='micro-label' sx={{ mb: 1 }}>
						EVENT REPORTING
					</Typography>
					<Typography
						component='h3'
						sx={{
							fontSize: { xs: '22px', md: '24px' },
							fontWeight: 500,
							mb: 1.5,
							letterSpacing: '-0.012em',
							color: CHARCOAL,
						}}>
						What the Recap May Include
					</Typography>
					<Box component='ul' sx={{ m: 0, p: 0, listStyle: 'none' }}>
						{eventPlannerDeliverables.map((item) => (
							<Box
								component='li'
								key={item}
								sx={{
									display: 'flex',
									alignItems: 'flex-start',
									gap: 1.1,
									fontSize: '14px',
									lineHeight: 1.7,
									color: BODY_TEXT,
									mb: 0.85,
								}}>
								<CheckCircleOutlineIcon
									aria-hidden='true'
									sx={{
										color: SUSTAINABILITY_GREEN,
										fontSize: 20,
										mt: '2px',
										flexShrink: 0,
									}}
								/>
								<span>{item}</span>
							</Box>
						))}
					</Box>
					<Typography
						sx={{
							fontSize: '13px',
							color: MUTED_TEXT,
							lineHeight: 1.65,
							mt: 1.75,
						}}>
						The recap can support internal reviews, attendee communications, and sustainability
						storytelling.
					</Typography>
				</Box>

				<Box
					sx={{
						textAlign: 'center',
						pt: { xs: 0.5, md: 1 },
					}}>
					<Typography
						sx={{
							fontSize: '14px',
							color: MUTED_TEXT,
							lineHeight: 1.65,
							maxWidth: 520,
							mx: 'auto',
							mb: 2,
						}}>
						Ask the events team whether tracking is available for your gathering.
					</Typography>
					<Button
						component='a'
						href={PROPERTY_EVENTS_INQUIRY_URL}
						target='_blank'
						rel='noopener noreferrer'
						variant='contained'
						disableElevation
						aria-label='Start planning an event at Bethesda North Marriott'
						sx={{
							...primaryButtonSx,
							px: { xs: 3.25, md: 4.5 },
							py: { xs: 1.45, md: 1.6 },
							fontSize: { xs: '0.82rem', md: '0.9rem' },
							boxShadow: '0 10px 28px rgba(35, 31, 32, 0.18)',
							'&:hover': {
								...primaryButtonSx['&:hover'],
								boxShadow: '0 12px 32px rgba(35, 31, 32, 0.2)',
							},
						}}>
						Start Planning
					</Button>
				</Box>
			</Box>

			{/* Additional Sustainability Initiatives */}
			<Box
				id='initiatives'
				component='section'
				aria-labelledby='initiatives-heading'
				className='section section--alt'
				sx={{
					...sectionContainerSx,
					...sectionBandAltSx,
					scrollMarginTop: HEADER_SCROLL_MARGIN,
				}}>
				<Typography className='micro-label' sx={{ mb: 1.5 }}>
					BEYOND FOOD WASTE
				</Typography>
				<Typography
					id='initiatives-heading'
					component='h2'
					sx={{
						fontSize: { xs: '28px', md: '34px' },
						fontWeight: 500,
						color: CHARCOAL,
						mb: 1.75,
					}}>
					Sustainability Across the Property
				</Typography>
				<Typography
					sx={{
						fontSize: '16px',
						color: BODY_TEXT,
						lineHeight: 1.75,
						maxWidth: 820,
						mb: { xs: 4, md: 5.5 },
					}}>
					Bethesda North Marriott has implemented a range of property-wide initiatives designed to
					support energy efficiency, water conservation, waste reduction, indoor air quality, and
					lower-impact transportation.
				</Typography>

				{initiativeCategories.map((category, categoryIndex) => {
					const renderCard = (item) => {
						const Icon = item.icon;
						return (
							<Box
								key={item.title}
								sx={{
									...cardSx,
									p: { xs: 2.25, md: 2.5 },
									display: 'flex',
									flexDirection: 'column',
									alignItems: 'flex-start',
									textAlign: 'left',
									height: '100%',
								}}>
								<Icon
									aria-hidden='true'
									sx={{ color: SUSTAINABILITY_GREEN, fontSize: 32, mb: 1.25 }}
								/>
								<Typography
									component='h3'
									sx={{
										fontSize: '17px',
										fontWeight: 600,
										color: CHARCOAL,
										mb: 0.85,
										letterSpacing: '-0.01em',
										lineHeight: 1.3,
									}}>
									{item.title}
								</Typography>
								<Typography
									sx={{
										fontSize: '14px',
										color: BODY_TEXT,
										lineHeight: 1.65,
									}}>
									{item.description}
								</Typography>
								{item.details && (
									<Box
										component='ul'
										sx={{
											m: 0,
											mt: 1.25,
											pl: 0,
											listStyle: 'none',
											width: '100%',
										}}>
										{item.details.map((detail) => (
											<Box
												component='li'
												key={detail}
												sx={{
													display: 'flex',
													alignItems: 'flex-start',
													gap: 0.85,
													fontSize: '13px',
													lineHeight: 1.55,
													color: BODY_TEXT,
													mb: 0.55,
												}}>
												<CheckCircleOutlineIcon
													aria-hidden='true'
													sx={{
														color: SUSTAINABILITY_GREEN,
														fontSize: 16,
														mt: '2px',
														flexShrink: 0,
													}}
												/>
												<span>{detail}</span>
											</Box>
										))}
									</Box>
								)}
							</Box>
						);
					};

					return (
						<Box
							key={category.label}
							sx={{
								mb:
									categoryIndex < initiativeCategories.length - 1
										? { xs: 5, md: 7 }
										: 0,
							}}>
							<Typography className='micro-label' sx={{ mb: { xs: 2, md: 2.5 } }}>
								{category.label}
							</Typography>

							{category.layout === 'three-plus-two' ? (
								<>
									<Box
										sx={{
											display: 'grid',
											gridTemplateColumns: {
												xs: '1fr',
												sm: 'repeat(2, minmax(0, 1fr))',
												md: 'repeat(3, minmax(0, 1fr))',
											},
											gap: { xs: 2, md: 2.25 },
											mb: { xs: 2, md: 2.25 },
										}}>
										{category.items.slice(0, 3).map(renderCard)}
									</Box>
									<Box
										sx={{
											display: 'grid',
											gridTemplateColumns: {
												xs: '1fr',
												sm: 'repeat(2, minmax(0, 1fr))',
											},
											gap: { xs: 2, md: 2.25 },
											maxWidth: { md: '66.666%' },
											mx: { md: 'auto' },
										}}>
										{category.items.slice(3).map(renderCard)}
									</Box>
								</>
							) : (
								<Box
									sx={{
										display: 'grid',
										gridTemplateColumns: {
											xs: '1fr',
											sm: 'repeat(2, minmax(0, 1fr))',
											md:
												category.layout === 'two'
													? 'repeat(2, minmax(0, 1fr))'
													: 'repeat(3, minmax(0, 1fr))',
										},
										gap: { xs: 2, md: 2.25 },
									}}>
									{category.items.map(renderCard)}
								</Box>
							)}
						</Box>
					);
				})}
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
