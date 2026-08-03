import React, { useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import GrassIcon from '@mui/icons-material/Grass';
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
import lionEquivalencyIcon from '../../assets/lion-equivalency.png';
import footballFieldEquivalencyIcon from '../../assets/football-field-equivalency.png';
import heroRitzCarltonPentagonCityImage from '../../assets/hero-ritz-carlton-pentagon-city.png';
import eventsRitzCarltonPentagonCityImage from '../../assets/events-ritz-carlton-pentagon-city.png';
import biogreen360PartnershipImage from '../../assets/biogreen360-partnership-ritz-carlton-pentagon-city.png';
import howItWorksRitzCarltonPentagonCityImage from '../../assets/how-it-works-ritz-carlton-pentagon-city.png';
import StickyHeader from '../../components/StickyHeader';
import {
	BIOGREEN360_URL,
	HEADER_SCROLL_MARGIN,
	PROPERTY_EVENTS_INQUIRY_URL,
	PROPERTY_RESERVATIONS_URL,
} from '../../constants/propertyExternalLinks';
import {
	BODY_TEXT,
	BORDER_LIGHT,
	CORAL_LINK,
	DARK_SLATE,
	FONT_BODY,
	FONT_HEADING,
	MUTED_TEXT,
	PALE_SAGE_BG,
	RADIUS_CARD,
	RADIUS_IMAGE,
	SAGE_ACCENT,
	SAGE_SOFT,
	SHADOW_IMAGE,
	SOFT_NEUTRAL,
	SURFACE_WHITE,
	SUSTAINABILITY_GREEN,
	TYPE,
	cardEmphasizedSx,
	cardSx,
	containerSx,
	pageThemeSx,
	primaryButtonSx,
	secondaryButtonSx,
	sectionBandColorSx,
	sectionContainerSx,
} from '../../theme/tokens';

const SENTENCE_LINK_SX = {
	color: BODY_TEXT,
	textDecoration: 'underline',
	textDecorationColor: 'rgba(156, 122, 60, 0.4)',
	textUnderlineOffset: '3px',
	textDecorationThickness: '1px',
	cursor: 'pointer',
	transition: 'color 180ms ease, text-decoration-color 180ms ease',
	'&:hover': {
		color: CORAL_LINK,
		textDecorationColor: 'rgba(156, 122, 60, 0.7)',
	},
	'&:focus-visible': {
		outline: `2px solid ${CORAL_LINK}`,
		outlineOffset: '2px',
		borderRadius: '0px',
	},
};

// TODO: Replace temporary BioGreen360 organization ID with The
// Ritz-Carlton, Pentagon City organization ID before publication.
const ORG_STATS_API_URL =
	'https://ck0mqx03j2.execute-api.us-east-1.amazonaws.com/prod/org-stats?id=6554f5a8a8c64cf4f5945856';

const PROPERTY_CONFIG = {
	/** BioGreen360 program launch date at The Ritz-Carlton, Pentagon City (calendar date). */
	programLaunchDate: '2021-05-31',
	timeZone: 'America/New_York',
};

/**
 * Event-space figures for the Events section proof-point row.
 * TODO: Periodically verify these figures against the official The Ritz-Carlton, Pentagon City property page.
 */
const EVENT_PROPERTY_FACTS = [
	{ value: '12', label: 'Event Rooms' },
	{ value: '17,424 Sq. Ft.', label: 'Event Space' },
	{ value: 'Up to 700', label: 'Capacity' },
	{ value: '10', label: 'Breakout Rooms' },
	{ value: '~7,200 Sq. Ft.', label: 'Grand Ballroom' },
];

const BIOGREEN_LINK_SX = {
	color: 'inherit',
	textDecoration: 'none',
	cursor: 'pointer',
	transition: 'color 160ms ease, text-decoration-color 160ms ease',
	'&:hover': {
		color: CORAL_LINK,
		textDecoration: 'underline',
		textDecorationColor: 'rgba(156, 122, 60, 0.55)',
		textUnderlineOffset: '2px',
	},
	'&:focus-visible': {
		outline: `2px solid ${CORAL_LINK}`,
		outlineOffset: '2px',
		borderRadius: '0px',
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
	bookingUrl: PROPERTY_RESERVATIONS_URL,
	processingPathwayMode: 'mixed',
	eventTrackingMode: 'by_request',
	showEquivalencies: true,
	lastSync: '2026-03-04T15:30:00-04:00',
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
 * Illustrative representative adult lion weight (~400 lbs).
 * Guest-facing copy should not imply every adult lion weighs exactly this amount.
 */
const ADULT_LION_LBS = 400;
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
const getAdultLionEquivalency = (poundsFed) => poundsFed / ADULT_LION_LBS;
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
			eyebrow: 'Program in Operation',
			value:
				daysOperating != null
					? `${formatCountWithSeparators(daysOperating)} days`
					: MISSING_METRIC_VALUE,
			note: 'since May 31, 2021',
			Icon: CalendarTodayIcon,
		},
		{
			eyebrow: 'Food Waste Diverted',
			value: poundsFed != null ? formatShortTonsDisplay(poundsFed) : MISSING_METRIC_VALUE,
			note: 'measured from material processed through the on-site system',
			Icon: DinnerDiningIcon,
		},
		{
			eyebrow: 'Estimated Soil Coverage',
			value: poundsFed != null ? formatEstimatedAcresDisplay(poundsFed) : MISSING_METRIC_VALUE,
			note: 'estimated at a quarter-inch application depth',
			Icon: GrassIcon,
		},
	];
};

const REPORTING_ICON_COLOR = 'rgba(91, 91, 91, 0.75)';

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
			iconImage: lionEquivalencyIcon,
			iconColor: SUSTAINABILITY_GREEN,
			iconSize: { xs: 87.5, md: 100 },
			label: 'Weight Equivalency',
			value: hasPounds
				? `${formatIllustrativeCount(getAdultLionEquivalency(poundsFed))} adult lions`
				: MISSING_METRIC_VALUE,
			note: 'Compared with a representative adult lion weight of approximately 400 pounds.',
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

// TODO: Replace these placeholder initiative cards with The Ritz-Carlton, Pentagon City–verified content before publication.
// FLAG: initiativeCategories contents are still Perry Lane placeholders — do not treat as RCPC-verified.
const initiativeCategories = [
	{
		label: 'Building & Resource Efficiency',
		layout: 'three-plus-two',
		items: [
			{
				title: 'LEED Gold Certified',
				description: 'LEED Gold certified since May 2023.',
				icon: WorkspacePremiumOutlinedIcon,
			},
			{
				title: 'Air Purification',
				description:
					'Air purifiers in public and meeting spaces remove 99.4% of harmful bacteria every 30 minutes.',
				icon: AirOutlinedIcon,
			},
			{
				title: 'Touchless Faucets',
				description:
					'Infrared faucets in all public restrooms help reduce unnecessary water use.',
				icon: WaterDropOutlinedIcon,
			},
			{
				title: 'Energy-Efficient Lighting',
				description:
					'LED fixtures and bulbs improve energy efficiency throughout the property.',
				icon: LightbulbOutlinedIcon,
			},
			{
				title: 'Smart Thermostats',
				description:
					'Telkonet smart thermostats in all guest rooms help reduce unnecessary energy use.',
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
					'Paper and plastic are separated in guest rooms, public spaces, and associate areas.',
				icon: RecyclingIcon,
			},
			{
				title: 'Water Refill Stations',
				description:
					'Refill stations throughout the hotel help reduce reliance on single-use plastic bottles.',
				icon: LocalDrinkOutlinedIcon,
			},
			{
				title: 'Virtual and Recyclable Room Keys',
				description:
					'Room-key recycling and virtual keys help reduce single-use plastic.',
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
				description:
					'Ten charging stations are available across the property: four in the hotel parking lot and six in the Conference Center Garage.',
				icon: EvStationOutlinedIcon,
				details: [
					'J-1772 plug type',
					'ChargeLab platform',
					'Tesla adapters available to borrow from the Front Desk',
				],
			},
			{
				title: 'Sustainable Mobility',
				description:
					'Preferred ride-share parking, bicycle racks, EV charging, and Metro access approximately 100 feet from the hotel provide lower-impact arrival options.',
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
	// Keep Eastern Time labels (Arlington, VA).
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
			label: 'On-site processing and live measurement',
			Icon: AssessmentOutlinedIcon,
		},
		{
			label: 'BioGreen360 partner since May 2021',
			Icon: CalendarTodayIcon,
		},
		{
			label: 'Finished with a local composting partner',
			Icon: RecyclingIcon,
		},
	];

	const PROCESS_CIRCLE_FILL = SOFT_NEUTRAL;

	const primaryProcessingSteps = [
		{
			title: 'Capture',
			description:
				'Food waste is separated across participating culinary, banquet, and hospitality operations.',
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
			description: 'Collected material is processed on site through The Ritz-Carlton, Pentagon City’s BioGreen360 system.',
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
			description: 'Each contribution is recorded, creating a clear and cumulative view of diversion.',
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
			title: 'Return',
			description:
				'Diverted material is finished with a local composting partner, and measured results are shared back with hotel leaders, guests, and event partners, closing the loop between daily operations and the impact they help create.',
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
			title: 'Plan with Purpose',
			description:
				'Discuss tracking goals and availability with The Ritz-Carlton, Pentagon City’s events team as your gathering takes shape.',
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
			title: 'Track the Gathering',
			description:
				'Participating culinary and banquet food waste is measured throughout the event.',
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
			title: 'See the Impact',
			description:
				'Receive a detailed Impact Recap capturing your event’s diversion results — ready to share with your team, your board, or your guests.',
		},
	];

	const eventPlannerDeliverables = [
		'Measured food-waste diversion',
		'Estimated soil creation and coverage',
		'Illustrative impact equivalencies',
		'Clear methodology and reporting scope',
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
			title: 'What happens to food waste?',
			body: 'Food waste generated across the property is diverted through the on-site BioGreen360 system.',
		},
		{
			title: 'How is progress shared?',
			body: 'Live measurement creates a clear, cumulative record of diversion for hotel leaders, guests, and event planners.',
		},
		{
			title: 'Can guests take part?',
			body: 'Every stay supports the program. Food waste from dining and events across the hotel is diverted through the same on-site system reported live below.',
		},
		{
			title: 'Can events participate?',
			body: 'Ask the hotel’s events team about food-waste tracking for your gathering.',
			requiresEvents: true,
		},
	].filter((card) => (card.requiresEvents ? eventsEnabled : true));

	return (
		<Box
			data-page='circular-food-systems'
			sx={pageThemeSx}>
			<StickyHeader />

			{/* Hero — White */}
			<Box
				className='section section--base'
				sx={{
					...sectionContainerSx,
					...sectionBandColorSx(SURFACE_WHITE, 'transparent'),
					pt: { xs: '72px', md: '108px' },
					pb: { xs: '48px', md: '64px' },
					'&::before': {
						...sectionBandColorSx(SURFACE_WHITE, 'transparent')['&::before'],
						borderTop: '1px solid transparent',
					},
				}}>
				<Box sx={{ textAlign: 'center' }}>
					<Typography
						sx={{
							fontFamily: FONT_HEADING,
							fontStyle: 'italic',
							fontWeight: 400,
							fontSize: { xs: '18px', md: '22px' },
							letterSpacing: '0.01em',
							lineHeight: 1.4,
							color: DARK_SLATE,
							mb: { xs: 1.5, md: 2 },
						}}>
						Welcome to Sustainability at The Ritz-Carlton, Pentagon City
					</Typography>
					<Typography
						component='h1'
						sx={{
							fontFamily: FONT_HEADING,
							fontSize: TYPE.h1,
							fontWeight: 500,
							letterSpacing: '-0.02em',
							lineHeight: 1.12,
							textTransform: 'uppercase',
							color: DARK_SLATE,
							maxWidth: 920,
							mx: 'auto',
							mb: { xs: 2.25, md: 3 },
							textWrap: 'balance',
						}}>
						WHERE LUXURY MEETS LASTING IMPACT
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
						Since May 2021, The Ritz-Carlton, Pentagon City has led the nation in transforming food waste
						into measurable impact — on-site, every day, and reported live. It is the same commitment to
						excellence that shapes every stay, extended into how we care for the world around it.
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
							<Box component='span'>FIRST IN THE NATION</Box>
							<Box component='span' aria-hidden='true' sx={{ display: { xs: 'none', sm: 'inline' } }}>
								•
							</Box>
							<Box component='span'>ON-SITE FOOD-WASTE PROCESSING</Box>
							<Box component='span' aria-hidden='true' sx={{ display: { xs: 'none', sm: 'inline' } }}>
								•
							</Box>
							{/* TODO(FLAG): Micro-label copy pending RCPC approval — former "SOIL RETURNED TO PERRY LANE". */}
							<Box component='span'>LIVE BIOGREEN360 REPORTING</Box>
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
						src={heroRitzCarltonPentagonCityImage}
						alt='The Ritz-Carlton, Pentagon City exterior at twilight, with illuminated facade lettering and entrance porte-cochère.'
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
						mb: 0,
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
							Food waste from hotel operations is diverted through The Ritz-Carlton, Pentagon City’s on-site{' '}
							<Box
								component='a'
								href='#biogreen360'
								onClick={(event) => {
									event.preventDefault();
									scrollToSection('biogreen360');
								}}
								sx={SENTENCE_LINK_SX}>
								BioGreen360
							</Box>{' '}
							system.
						</Box>
						<Box component='li' sx={{ mb: 1 }}>
							Progress is shared through{' '}
							<Box
								component='a'
								href='#impact'
								onClick={(event) => {
									event.preventDefault();
									scrollToSection('impact');
								}}
								sx={SENTENCE_LINK_SX}>
								live reporting
							</Box>
							, giving leaders and guests a clear view of diversion results.
						</Box>
						<Box component='li'>
							Ask the hotel’s{' '}
							<Box
								component='a'
								href='#events'
								onClick={(event) => {
									event.preventDefault();
									scrollToSection('events');
								}}
								sx={SENTENCE_LINK_SX}>
								events team
							</Box>{' '}
							about food-waste tracking for your gathering.
						</Box>
					</Box>
				</Box>
			</Box>

			{/* Program at a Glance — Soft Neutral */}
			<Box
				className='section section--alt'
				sx={{
					...sectionContainerSx,
					...sectionBandColorSx(SOFT_NEUTRAL),
					pt: { xs: '48px', md: '64px' },
				}}>
				<Box sx={{ mt: 0 }}>
					<Typography
						component='h2'
						sx={{
							fontFamily: FONT_HEADING,
							fontSize: { xs: '28px', md: '34px' },
							fontWeight: 500,
							color: DARK_SLATE,
							mb: { xs: 1.5, md: 2 },
							textAlign: 'left',
						}}>
						A More Thoughtful Stay, By Design
					</Typography>
					<Typography
						sx={{
							fontSize: { xs: '16px', md: '17px' },
							color: BODY_TEXT,
							lineHeight: 1.75,
							maxWidth: 840,
							mb: { xs: 3, md: 3.5 },
						}}>
						From daily operations to memorable gatherings, The Ritz-Carlton, Pentagon City’s circular approach
						connects culinary teams, guests, and event planners.
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
								boxShadow: 'none',
								p: { xs: 2, md: 2.25 },
								display: 'flex',
								flexDirection: 'column',
								minHeight: { xs: 'auto', md: 168 },
								height: '100%',
							}}>
							<Typography
								component='h3'
								sx={{
									fontFamily: FONT_HEADING,
									fontSize: { xs: '18px', md: '19px' },
									fontWeight: 500,
									letterSpacing: '-0.012em',
									lineHeight: 1.3,
									color: DARK_SLATE,
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

			{/* Our Impact — Pale Sage Band */}
			<Box
				id='impact'
				component='section'
				aria-labelledby='impact-heading'
				className='section section--alt'
				sx={{
					...sectionContainerSx,
					...sectionBandColorSx(PALE_SAGE_BG),
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
							fontFamily: FONT_HEADING,
							fontSize: { xs: '28px', md: '34px' },
							fontWeight: 500,
							color: DARK_SLATE,
						}}>
						Impact, Made Visible
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
					Live reporting turns The Ritz-Carlton, Pentagon City’s daily food-waste diversion into a clear, cumulative record of
					progress.
				</Typography>
				<Box
					sx={{
						width: '100%',
						maxWidth: 360,
						height: '1px',
						backgroundColor: SAGE_SOFT,
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
										fontFamily: FONT_HEADING,
										fontSize: { xs: '34px', sm: '44px', md: '48px' },
										fontWeight: 500,
										letterSpacing: '-0.02em',
										lineHeight: 1.15,
										color: DARK_SLATE,
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
						LIVE REPORTING POWERED BY
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
							borderRadius: '0px',
							'&:focus-visible': {
								outline: `2px solid ${CORAL_LINK}`,
								outlineOffset: '3px',
							},
						}}>
						<Box
							component='img'
							src={poweredByBioGreen}
							alt='BioGreen360'
							sx={{ height: 52 }}
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

			{/* BioGreen360 Partnership — Soft Neutral */}
			<Box
				id='biogreen360'
				component='section'
				aria-labelledby='biogreen360-heading'
				className='section section--base'
				sx={{
					...sectionContainerSx,
					...sectionBandColorSx(SOFT_NEUTRAL),
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
							OUR CORNERSTONE INITIATIVE
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
									fontFamily: FONT_HEADING,
									fontSize: { xs: '28px', md: '34px' },
									fontWeight: 500,
									lineHeight: 1.25,
									color: DARK_SLATE,
									m: 0,
								}}>
								A Fully Circular Partnership with
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
									borderRadius: '0px',
									flexShrink: 0,
									'&:focus-visible': {
										outline: `2px solid ${CORAL_LINK}`,
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
							The partnership between The Ritz-Carlton, Pentagon City and BioGreen360 connects on-site
							food-waste processing with live measurement, giving hotel leaders, guests, and event planners a
							clear view of the impact created each day.
						</Typography>

						<Typography
							component='h3'
							sx={{
								fontFamily: FONT_HEADING,
								fontSize: { xs: '22px', md: '24px' },
								fontWeight: 500,
								color: DARK_SLATE,
								letterSpacing: '-0.012em',
								mb: 1.25,
							}}>
							Built Into the Rhythm of the Hotel
						</Typography>
						<Typography
							sx={{
								fontSize: '16px',
								color: BODY_TEXT,
								lineHeight: 1.75,
								maxWidth: 680,
								mb: { xs: 2.5, md: 3 },
							}}>
							The program works alongside the property’s culinary and banquet teams, helping divert food
							waste while giving hotel leaders, guests, and event planners a clearer view of the results.
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
												color: DARK_SLATE,
												fontWeight: 500,
											}}>
											{item.label}
										</Typography>
									</Box>
								);
							})}
						</Box>
					</Box>

					{/* Right column: media + milestone */}
					<Box
						sx={{
							display: 'flex',
							flexDirection: 'column',
							gap: 2.5,
						}}>
						<Box
							component='img'
							src={biogreen360PartnershipImage}
							alt='Gourmet salad with burrata, roasted beets, and pomegranate seeds beside a red cocktail on a white marble table.'
							sx={{
								width: '100%',
								aspectRatio: '513 / 401',
								objectFit: 'cover',
								objectPosition: 'center',
								borderRadius: RADIUS_IMAGE,
								border: `1px solid ${BORDER_LIGHT}`,
								boxShadow: SHADOW_IMAGE,
								display: 'block',
								backgroundColor: SURFACE_WHITE,
							}}
						/>

						<Box
							sx={{
								...cardEmphasizedSx,
								p: { xs: 2, md: 2.25 },
							}}>
							<Typography className='micro-label' sx={{ mb: 1 }}>
								AN IMPORTANT MILESTONE
							</Typography>
							<Typography
								component='h3'
								sx={{
									fontFamily: FONT_HEADING,
									fontSize: { xs: '18px', md: '20px' },
									fontWeight: 500,
									color: DARK_SLATE,
									letterSpacing: '-0.01em',
									lineHeight: 1.35,
									mb: 1,
								}}>
								First in the Nation
							</Typography>
							<Typography sx={{ fontSize: '14px', color: BODY_TEXT, lineHeight: 1.7 }}>
								When the program launched on May 31, 2021, The Ritz-Carlton, Pentagon City became the
								first hotel in the United States to adopt BioGreen360’s fully circular food-waste
								platform.
							</Typography>
						</Box>
					</Box>
				</Box>
			</Box>

			{/* How it Works — White */}
			{/* NOTE: Main How It Works section (below Partnership) */}
			<Box
				id='how-it-works'
				component='section'
				aria-labelledby='how-it-works-heading'
				className='section section--alt'
				sx={{
					...sectionContainerSx,
					...sectionBandColorSx(SURFACE_WHITE),
					scrollMarginTop: HEADER_SCROLL_MARGIN,
				}}>
				<Typography className='micro-label' sx={{ textAlign: 'center', mb: 1.5 }}>
					FROM CAPTURE TO IMPACT
				</Typography>
				<Typography
					id='how-it-works-heading'
					component='h2'
					sx={{
						fontFamily: FONT_HEADING,
						fontSize: { xs: '28px', md: '34px' },
						fontWeight: 500,
						textAlign: 'center',
						color: DARK_SLATE,
						mb: { xs: 1.75, md: 2.25 },
					}}>
					How Food Waste Comes Full Circle
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
					The Ritz-Carlton, Pentagon City’s program follows a measurable path from daily hotel operations
					through on-site processing and live reporting.
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
										fontFamily: FONT_HEADING,
										fontSize: { xs: '17px', md: '18px' },
										fontWeight: 500,
										letterSpacing: '-0.01em',
										lineHeight: 1.35,
										color: DARK_SLATE,
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
					See{' '}
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
								color: CORAL_LINK,
							},
						}}>
						Methodology
					</Box>{' '}
					for reporting definitions, conversion assumptions, and program scope.
				</Typography>
				<Box
					sx={{
						mt: { xs: 6, md: 8.5 },
						display: 'grid',
						gridTemplateColumns: { xs: '1fr', md: 'minmax(0, 1fr) minmax(0, 1fr)' },
						gap: { xs: 3.5, md: 5.5 },
						alignItems: 'start',
					}}>
					<Box
						component='img'
						src={howItWorksRitzCarltonPentagonCityImage}
						alt='Shared gourmet dishes on a dark wood table, including dips with pita, seafood plates, and guests dining together.'
						sx={{
							width: '100%',
							aspectRatio: { xs: '16 / 10', md: '4 / 3' },
							objectFit: 'cover',
							objectPosition: 'center',
							borderRadius: RADIUS_IMAGE,
							border: `1px solid ${BORDER_LIGHT}`,
							boxShadow: SHADOW_IMAGE,
							display: 'block',
						}}
					/>
					<Box>
						<Typography className='micro-label' sx={{ mb: 1 }}>
							CIRCULAR BY DESIGN
						</Typography>
						<Typography
							component='h3'
							sx={{
								fontFamily: FONT_HEADING,
								fontSize: { xs: '26px', md: '30px' },
								fontWeight: 500,
								letterSpacing: '-0.015em',
								lineHeight: 1.3,
								color: DARK_SLATE,
								mb: 1.5,
							}}>
							A System Woven Into the Guest Experience
						</Typography>
						<Typography
							sx={{ fontSize: '15px', color: BODY_TEXT, lineHeight: 1.75, mb: 1.25 }}>
							Behind the scenes, BioGreen360 gives The Ritz-Carlton, Pentagon City’s teams a practical way to manage food waste
							as part of daily operations.
						</Typography>
						<Typography
							sx={{ fontSize: '15px', color: BODY_TEXT, lineHeight: 1.75, mb: 1.25 }}>
							Live measurement brings visibility to the work, allowing progress to be shared with guests,
							event planners, and hotel leaders.
						</Typography>
						<Typography
							sx={{ fontSize: '15px', color: BODY_TEXT, lineHeight: 1.75, mb: 2 }}>
							Measured results help hotel leaders, guests, and event planners see the impact created through
							daily operations.
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

			{/* Live Sustainability Impact Reporting — flat pale band */}
			<Box
				id='live-reporting'
				component='section'
				aria-labelledby='live-reporting-heading'
				className='section section--base live-reporting-section lsir-section'
				sx={{
					...sectionContainerSx,
					...sectionBandColorSx(PALE_SAGE_BG),
					py: { xs: '54px', md: '86px' },
					display: 'flex',
					flexDirection: 'column',
					alignItems: 'stretch',
					scrollMarginTop: HEADER_SCROLL_MARGIN,
					'& .lsir-card-value': { color: DARK_SLATE },
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
					<Box sx={{ minWidth: 0 }}>
						<Typography className='micro-label' sx={{ mb: 1.25 }}>
							IMPACT EQUIVALENCIES
						</Typography>
						<Typography
							id='live-reporting-heading'
							component='h2'
							sx={{
								fontFamily: FONT_HEADING,
								fontSize: { xs: '28px', md: '34px' },
								fontWeight: 500,
								color: DARK_SLATE,
							}}>
							Putting the Numbers in Perspective
						</Typography>
					</Box>
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
							flexShrink: 0,
						}}>
						Methodology
					</Box>
				</Box>
				<Typography
					sx={{
						fontSize: '15px',
						color: BODY_TEXT,
						lineHeight: 1.7,
						maxWidth: 880,
						mb: 2.5,
					}}>
					These comparisons translate cumulative program results into familiar reference points.
				</Typography>

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
					{equivalencyCardsToRender.map((card, idx) => {
						const Icon = card.icon;
						const columnCount = equivalencyCardsToRender.length;
						const isNotLast = idx < columnCount - 1;
						return (
							<Box
								key={card.label}
								sx={{
									flex: { md: '1 1 0' },
									width: { xs: '100%', md: 'auto' },
									minWidth: { md: 0 },
									px: { xs: 0, md: 3 },
									py: { xs: 2.25, md: 1.5 },
									textAlign: 'center',
									borderRight: isNotLast
										? { xs: 'none', md: `1px solid ${BORDER_LIGHT}` }
										: 'none',
									borderBottom: isNotLast
										? { xs: `1px solid ${BORDER_LIGHT}`, md: 'none' }
										: 'none',
								}}>
								<Typography className='micro-label lsir-card-title' sx={{ mb: 0.75, display: 'block' }}>
									{card.label}
								</Typography>
								<Box
									sx={{
										display: 'flex',
										justifyContent: 'center',
										alignItems: 'center',
										width: '100%',
										minHeight: 48,
										mb: 1,
										lineHeight: 0,
									}}>
									{card.iconImage ? (
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
									) : (
										<Icon
											aria-hidden='true'
											sx={{
												fontSize: { xs: 70, md: 80 },
												color: card.iconColor || REPORTING_ICON_COLOR,
											}}
										/>
									)}
								</Box>
								<Typography
									component='p'
									className='lsir-card-value'
									sx={{
										fontFamily: FONT_HEADING,
										fontSize: { xs: '24px', md: '28px' },
										fontWeight: 500,
										letterSpacing: '-0.015em',
										lineHeight: 1.25,
										px: 0.5,
										overflowWrap: 'break-word',
										hyphens: 'auto',
										m: 0,
									}}>
									{card.value}
								</Typography>
								<Typography
									sx={{
										fontSize: '12px',
										color: MUTED_TEXT,
										lineHeight: 1.5,
										mt: 1,
										maxWidth: 280,
										mx: 'auto',
									}}>
									{card.note}
								</Typography>
							</Box>
						);
					})}
				</Box>

				<Typography
					sx={{
						fontSize: '12px',
						color: MUTED_TEXT,
						lineHeight: 1.65,
						mt: { xs: 2.25, md: 2.5 },
						maxWidth: 660,
					}}>
					{equivalencyDisclaimer}
				</Typography>
			</Box>

			{/* Events — Surface White */}
			<Box
				id='events'
				component='section'
				aria-labelledby='events-heading'
				className='section section--alt'
				sx={{
					...sectionContainerSx,
					...sectionBandColorSx(SURFACE_WHITE),
					scrollMarginTop: HEADER_SCROLL_MARGIN,
				}}>
				<Box
					sx={{
						display: 'grid',
						gridTemplateColumns: { xs: '1fr', md: 'minmax(0, 1.1fr) minmax(0, 0.95fr)' },
						gap: { xs: 3, md: 5 },
						alignItems: 'start',
						mb: { xs: 4.8, md: 6.8 },
					}}>
					<Box>
						<Typography className='micro-label' sx={{ mb: 1.5 }}>
							ZERO FOOD WASTE EVENTS
						</Typography>
						<Typography
							id='events-heading'
							component='h2'
							sx={{
								fontFamily: FONT_HEADING,
								fontSize: { xs: '28px', md: '34px' },
								fontWeight: 500,
								color: DARK_SLATE,
								mb: 1.75,
							}}>
							Celebrate Beautifully. Measure What Matters.
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
							Every meeting, gala, and wedding at The Ritz-Carlton, Pentagon City can be hosted as a Zero
							Food Waste Event — a fully tracked program that diverts food waste generated during your
							gathering through our on-site BioGreen360 system, with results measured from first course to
							last.
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
							It’s a meaningful way to bring purpose to your next gathering, backed by data you can share —
							with corporate stakeholders, wedding guests, or your own sustainability reporting.
							Coordination happens in advance with the hotel’s events team so menus, service plans, and
							reporting scope can be aligned to your gathering.
						</Typography>
						<Box
							sx={{
								display: 'grid',
								gridTemplateColumns: {
									xs: '1fr',
									sm: 'repeat(3, minmax(0, 1fr))',
								},
								gap: { xs: 1.5, sm: 2 },
								maxWidth: 560,
							}}>
							{EVENT_PROPERTY_FACTS.map((fact) => (
								<Box key={fact.label} sx={{ minWidth: 0 }}>
									<Typography
										sx={{
											fontFamily: FONT_HEADING,
											fontSize: { xs: '18px', md: '20px' },
											fontWeight: 500,
											color: DARK_SLATE,
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
						<Typography
							className='micro-label'
							sx={{
								mt: 2,
								mb: 0,
								lineHeight: 1.7,
								maxWidth: 560,
							}}>
							ZERO FOOD WASTE EVENTS AVAILABLE FOR EVERY GATHERING
						</Typography>
					</Box>

					<Box
						component='img'
						src={eventsRitzCarltonPentagonCityImage}
						alt='Grand ballroom at The Ritz-Carlton, Pentagon City set classroom-style with gray linen tables, navy doors, and tiered glass chandeliers.'
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
						fontFamily: FONT_HEADING,
						fontSize: { xs: '26px', md: '30px' },
						fontWeight: 500,
						letterSpacing: '-0.015em',
						color: DARK_SLATE,
						textAlign: 'center',
						mb: { xs: 4, md: 5.5 },
					}}>
					How a Zero Food Waste Event Works
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
										fontFamily: FONT_HEADING,
										fontSize: { xs: '17px', md: '18px' },
										fontWeight: 500,
										letterSpacing: '-0.01em',
										lineHeight: 1.35,
										color: DARK_SLATE,
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
						YOUR EVENT IMPACT RECAP
					</Typography>
					<Typography
						component='h3'
						sx={{
							fontFamily: FONT_HEADING,
							fontSize: { xs: '22px', md: '24px' },
							fontWeight: 500,
							mb: 1.5,
							letterSpacing: '-0.012em',
							color: DARK_SLATE,
						}}>
						Your Event, Thoughtfully Measured.
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
						Designed to support internal reviews, stakeholder communications, and meaningful post-event
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
						Every event at The Ritz-Carlton, Pentagon City can be planned as a Zero Food Waste Event. Speak
						with our events team to bring measurable impact to your next gathering.
					</Typography>
					<Button
						component='a'
						href={PROPERTY_EVENTS_INQUIRY_URL}
						target='_blank'
						rel='noopener noreferrer'
						variant='contained'
						disableElevation
						aria-label='Start planning an event at The Ritz-Carlton, Pentagon City'
						sx={{
							...primaryButtonSx,
							px: { xs: 2.5, md: 3.25 },
							py: { xs: 1, md: 1.1 },
							fontSize: { xs: '0.72rem', md: '0.75rem' },
						}}>
						Start Planning
					</Button>
				</Box>
			</Box>

			{/* Additional Sustainability Initiatives — Soft Neutral */}
			<Box
				id='initiatives'
				component='section'
				aria-labelledby='initiatives-heading'
				className='section section--alt'
				sx={{
					...sectionContainerSx,
					...sectionBandColorSx(SOFT_NEUTRAL),
					scrollMarginTop: HEADER_SCROLL_MARGIN,
				}}>
				<Typography className='micro-label' sx={{ mb: 1.5 }}>
					BEYOND FOOD WASTE
				</Typography>
				<Typography
					id='initiatives-heading'
					component='h2'
					sx={{
						fontFamily: FONT_HEADING,
						fontSize: { xs: '28px', md: '34px' },
						fontWeight: 500,
						color: DARK_SLATE,
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
						mb: { xs: 3, md: 3.5 },
					}}>
					Additional initiatives support efficient building operations, resource conservation, guest
					convenience, and lower-impact transportation.
				</Typography>

				{/* TODO: Replace placeholder initiative cards with The Ritz-Carlton, Pentagon City–verified initiatives before publication. */}
				<Box
					role='note'
					sx={{
						...cardSx,
						p: { xs: 2, md: 2.25 },
						mb: { xs: 3.5, md: 4.5 },
						maxWidth: 820,
						borderLeft: `4px solid ${SAGE_ACCENT}`,
						backgroundColor: SAGE_SOFT,
					}}>
					<Typography
						sx={{
							fontSize: '14px',
							fontWeight: 500,
							color: DARK_SLATE,
							lineHeight: 1.65,
							letterSpacing: '0.01em',
						}}>
						PLACEHOLDER CONTENT: Property-specific sustainability initiatives are pending review with
						The Ritz-Carlton, Pentagon City team.
					</Typography>
				</Box>

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
										fontFamily: FONT_HEADING,
										fontSize: '17px',
										fontWeight: 500,
										color: DARK_SLATE,
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

			{/* Methodology / Transparency — White */}
			<Box
				id='methodology'
				component='section'
				aria-labelledby='methodology-heading'
				sx={{
					...sectionBandColorSx(SURFACE_WHITE),
					scrollMarginTop: HEADER_SCROLL_MARGIN,
				}}>
				<Box sx={sectionContainerSx}>
					<Typography
						id='methodology-heading'
						component='h2'
						sx={{
							fontFamily: FONT_HEADING,
							fontSize: { xs: '28px', md: '34px' },
							fontWeight: 500,
							mb: 1.5,
							color: DARK_SLATE,
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
						sx={{
							fontFamily: FONT_HEADING,
							fontSize: '24px',
							fontWeight: 500,
							letterSpacing: '-0.012em',
							mb: 1,
							color: DARK_SLATE,
						}}>
						How to Read These Metrics
					</Typography>
					<Box
						component='ul'
						sx={{ m: 0, pl: 2.25, color: BODY_TEXT, mb: 2 }}>
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
								borderRadius: '0px',
								'&:focus-visible': {
									outline: `2px solid ${CORAL_LINK}`,
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
							variant='outlined'
							disableElevation
							aria-label='Book a room at The Ritz-Carlton, Pentagon City'
							sx={{
								...secondaryButtonSx,
							}}>
							Book a Room
						</Button>
						<Button
							component='a'
							href={PROPERTY_EVENTS_INQUIRY_URL}
							target='_blank'
							rel='noopener noreferrer'
							variant='contained'
							disableElevation
							aria-label='Plan an event at The Ritz-Carlton, Pentagon City'
							sx={{
								...primaryButtonSx,
							}}>
							Plan an Event
						</Button>
					</Box>
				</Box>
			</Box>

			{/* Footer — Dark Slate */}
			<Box
				component='footer'
				sx={{
					...sectionBandColorSx(DARK_SLATE, 'rgba(255, 255, 255, 0.12)'),
					color: SURFACE_WHITE,
				}}>
				<Box
					sx={{
						...containerSx,
						py: { xs: 3, md: 3.5 },
						display: 'flex',
						flexDirection: { xs: 'column', sm: 'row' },
						justifyContent: 'space-between',
						alignItems: { xs: 'flex-start', sm: 'center' },
						gap: 1.5,
					}}>
					<Typography
						sx={{
							fontFamily: FONT_HEADING,
							fontSize: { xs: '18px', md: '20px' },
							fontWeight: 500,
							color: SURFACE_WHITE,
							letterSpacing: '-0.01em',
						}}>
						The Ritz-Carlton, Pentagon City
					</Typography>
					<Typography
						sx={{
							fontFamily: FONT_BODY,
							fontSize: '13px',
							color: 'rgba(255, 255, 255, 0.78)',
							lineHeight: 1.6,
						}}>
						Arlington, Virginia · Sustainability reporting powered by BioGreen360
					</Typography>
				</Box>
			</Box>
		</Box>
	);
};

export default CircularFoodSystems;
