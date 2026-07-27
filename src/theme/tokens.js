/**
 * Bethesda North Marriott Hotel & Conference Center
 * Global visual system tokens for the sustainability microsite.
 *
 * Brand red: Marriott-inspired burgundy (no approved logo asset in repo yet).
 * Sustainability green: derived from BioGreen360 logo asset (#7A923B).
 */

export const BRAND_RED = '#A6192E';
export const BRAND_RED_HOVER = '#8B1526';
export const BRAND_RED_SOFT = 'rgba(166, 25, 46, 0.1)';
export const BRAND_RED_SOFT_STRONG = 'rgba(166, 25, 46, 0.18)';

export const CHARCOAL = '#231F20';
export const CHARCOAL_HOVER = '#3A3435';

export const WARM_WHITE = '#F8F6F2';
export const SURFACE_WHITE = '#FFFFFF';
export const SOFT_GRAY = '#EEEAE5';

export const BODY_TEXT = '#5D6268';
export const MUTED_TEXT = 'rgba(93, 98, 104, 0.85)';

export const BORDER_LIGHT = '#D8D1C8';
export const BORDER_SUBTLE = 'rgba(216, 209, 200, 0.9)';

/** From approved BioGreen360 logo mark in PoweredByBioGreen.svg */
export const SUSTAINABILITY_GREEN = '#7A923B';
export const SUSTAINABILITY_GREEN_SOFT = 'rgba(122, 146, 59, 0.14)';

export const FONT_HEADING = '"Roboto", "Helvetica Neue", Arial, sans-serif';
export const FONT_BODY = '"Inter", "Helvetica Neue", Arial, sans-serif';

export const CONTENT_MAX = 1360;

export const SECTION_PY = { xs: '64px', md: '96px' };
export const SECTION_PY_COMPACT = { xs: '56px', md: '72px' };

export const SPACE = {
	headingToIntro: { xs: 1.5, md: 2 },
	introToContent: { xs: 3.5, md: 5 },
	contentGroup: { xs: 4, md: 5 },
};

export const RADIUS_BUTTON = '8px';
export const RADIUS_CARD = '12px';
export const RADIUS_IMAGE = '10px';
export const RADIUS_PANEL = '12px';
export const RADIUS_BADGE = '6px';

export const SHADOW_CARD = '0 8px 24px rgba(35, 31, 32, 0.06)';
export const SHADOW_IMAGE = '0 10px 28px rgba(35, 31, 32, 0.08)';
export const SHADOW_HOVER = '0 10px 24px rgba(35, 31, 32, 0.1)';
export const SHADOW_FOCUS = `0 0 0 2px ${WARM_WHITE}, 0 0 0 4px ${BRAND_RED}`;

export const TYPE = {
	h1: { xs: '2.5rem', sm: '3.25rem', md: '64px' },
	h2: { xs: '30px', md: '40px' },
	h3: { xs: '22px', md: '26px' },
	body: { xs: '16px', md: '17px' },
	label: '12px',
};

export const containerSx = {
	maxWidth: CONTENT_MAX,
	width: '100%',
	mx: 'auto',
	px: { xs: 2.25, sm: 3, md: 4, lg: 5 },
};

export const sectionContainerSx = {
	...containerSx,
	py: SECTION_PY,
};

export const sectionBandBaseSx = {
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

export const sectionBandAltSx = {
	...sectionBandBaseSx,
	'&::before': {
		...sectionBandBaseSx['&::before'],
		backgroundColor: 'var(--bg-alt)',
	},
};

export const cardSx = {
	backgroundColor: SURFACE_WHITE,
	border: `1px solid ${BORDER_LIGHT}`,
	borderRadius: RADIUS_CARD,
	boxShadow: SHADOW_CARD,
};

export const cardEmphasizedSx = {
	...cardSx,
	backgroundColor: SURFACE_WHITE,
	borderLeft: `3px solid ${BRAND_RED}`,
	boxShadow: SHADOW_CARD,
};

export const mediaSx = {
	borderRadius: RADIUS_IMAGE,
	border: `1px solid ${BORDER_LIGHT}`,
	boxShadow: SHADOW_IMAGE,
	display: 'block',
	objectFit: 'cover',
};

export const mediaPlaceholderSx = {
	...mediaSx,
	backgroundColor: SOFT_GRAY,
	backgroundImage:
		'repeating-linear-gradient(135deg, transparent, transparent 10px, rgba(216, 209, 200, 0.35) 10px, rgba(216, 209, 200, 0.35) 11px)',
	minHeight: 220,
	display: 'flex',
	flexDirection: 'column',
	alignItems: 'center',
	justifyContent: 'center',
	gap: 1,
	px: 3,
	textAlign: 'center',
};

export const primaryButtonSx = {
	fontFamily: FONT_HEADING,
	fontSize: '0.7rem',
	fontWeight: 600,
	letterSpacing: '0.1em',
	textTransform: 'uppercase',
	color: SURFACE_WHITE,
	backgroundColor: CHARCOAL,
	border: `1px solid ${CHARCOAL}`,
	borderRadius: RADIUS_BUTTON,
	boxShadow: 'none',
	minHeight: 44,
	px: { xs: 1.75, sm: 2.2 },
	py: 0.7,
	'&:hover': {
		backgroundColor: CHARCOAL_HOVER,
		borderColor: CHARCOAL_HOVER,
		boxShadow: SHADOW_HOVER,
	},
	'&:focus-visible': {
		boxShadow: SHADOW_FOCUS,
	},
};

export const secondaryButtonSx = {
	fontFamily: FONT_HEADING,
	fontSize: '0.7rem',
	fontWeight: 600,
	letterSpacing: '0.1em',
	textTransform: 'uppercase',
	color: CHARCOAL,
	backgroundColor: 'rgba(255, 255, 255, 0.55)',
	borderRadius: RADIUS_BUTTON,
	borderColor: BRAND_RED,
	borderWidth: '1px',
	boxShadow: 'none',
	minHeight: 44,
	px: { xs: 1.75, sm: 2.2 },
	py: 0.7,
	'&:hover': {
		backgroundColor: BRAND_RED_SOFT,
		borderColor: BRAND_RED_HOVER,
		color: BRAND_RED,
		boxShadow: 'none',
	},
	'&:focus-visible': {
		boxShadow: SHADOW_FOCUS,
	},
};

export const textLinkSx = {
	color: CHARCOAL,
	textDecoration: 'none',
	borderBottom: `1px solid transparent`,
	transition: 'color 180ms ease, border-color 180ms ease',
	'&:hover': {
		color: BRAND_RED,
		borderBottomColor: 'rgba(166, 25, 46, 0.45)',
	},
	'&:focus-visible': {
		outline: `2px solid ${BRAND_RED}`,
		outlineOffset: '3px',
		borderRadius: '2px',
	},
};

export const pageThemeSx = {
	minHeight: '100vh',
	backgroundColor: WARM_WHITE,
	'--bg-base': WARM_WHITE,
	'--bg-alt': SOFT_GRAY,
	'--band-divider': BORDER_LIGHT,
	color: CHARCOAL,
	fontFamily: FONT_BODY,
	lineHeight: 1.72,
	'& h1': {
		fontFamily: FONT_HEADING,
		letterSpacing: '-0.02em',
		fontWeight: 400,
		color: CHARCOAL,
	},
	'& h2': {
		fontFamily: FONT_HEADING,
		letterSpacing: '-0.015em',
		fontWeight: 400,
		color: CHARCOAL,
	},
	'& h3': {
		fontFamily: FONT_HEADING,
		letterSpacing: '-0.012em',
		fontWeight: 500,
		color: CHARCOAL,
	},
	'& .micro-label': {
		fontFamily: FONT_HEADING,
		fontSize: TYPE.label,
		letterSpacing: '0.14em',
		textTransform: 'uppercase',
		fontWeight: 600,
		color: BRAND_RED,
	},
	'& .lux-link': {
		display: 'inline-flex',
		alignItems: 'center',
		gap: '0.3em',
		fontFamily: FONT_HEADING,
		fontWeight: 500,
		color: CHARCOAL,
		textDecoration: 'none',
		textDecorationThickness: '1px',
		textUnderlineOffset: '3px',
		borderBottom: '1px solid transparent',
		transition:
			'color 180ms ease, border-color 180ms ease, text-decoration-color 180ms ease, text-decoration-thickness 180ms ease',
		'&:hover': {
			color: BRAND_RED,
			textDecoration: 'underline',
			textDecorationColor: 'rgba(166, 25, 46, 0.45)',
			textDecorationThickness: '1px',
			borderBottomColor: 'transparent',
		},
		'&:focus-visible': {
			outline: `2px solid ${BRAND_RED}`,
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
			boxShadow: SHADOW_HOVER,
		},
		'&:focus-visible': {
			outline: `2px solid ${BRAND_RED}`,
			outlineOffset: '2px',
		},
		'& .lux-click-indicator': {
			opacity: 0,
			transition: 'opacity 220ms ease',
		},
		'&:hover .lux-click-indicator': {
			opacity: 0.8,
		},
		'@media (prefers-reduced-motion: reduce)': {
			transition: 'none',
			'&:hover': {
				transform: 'none',
			},
		},
	},
	'& .MuiButton-root': {
		fontFamily: FONT_HEADING,
		borderRadius: RADIUS_BUTTON,
		textTransform: 'uppercase',
		letterSpacing: '0.1em',
		fontWeight: 600,
		boxShadow: 'none',
		minHeight: 44,
		transition:
			'transform 200ms ease, box-shadow 200ms ease, background-color 200ms ease, border-color 200ms ease',
		'&.MuiButton-contained': {
			backgroundColor: CHARCOAL,
			color: SURFACE_WHITE,
			'&:hover': {
				backgroundColor: CHARCOAL_HOVER,
				boxShadow: SHADOW_HOVER,
			},
		},
		'&.MuiButton-outlined': {
			color: CHARCOAL,
			borderWidth: '1px',
			borderColor: BRAND_RED,
			backgroundColor: 'rgba(248, 246, 242, 0.55)',
			'&:hover': {
				borderColor: BRAND_RED_HOVER,
				backgroundColor: BRAND_RED_SOFT,
				color: BRAND_RED,
				boxShadow: 'none',
			},
		},
		'&:hover': {
			transform: 'translateY(-1px)',
		},
		'@media (prefers-reduced-motion: reduce)': {
			transition: 'none',
			'&:hover': {
				transform: 'none',
			},
		},
	},
};
