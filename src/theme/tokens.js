/**
 * Perry Lane Hotel — Savannah, Georgia
 * Brand slate / sage visual system for the sustainability microsite.
 *
 * Brand Slate: primary brand and body text
 * Sage Accent: primary buttons and soft fills
 * Dark Sage: sustainability icons, rings, arrows, checkmarks
 * Coral: text links and subtle hover accents only
 */

export const BRAND_SLATE = '#56626D';
export const DARK_SLATE = '#46515B';
export const SAGE_ACCENT = '#A7B58C';
export const SAGE_ACCENT_HOVER = '#97A67C';
export const SAGE_SOFT = 'rgba(167, 181, 140, 0.16)';
export const DARK_SAGE = '#7C8D65';
export const DARK_SAGE_SOFT = 'rgba(124, 141, 101, 0.14)';
export const CORAL_LINK = '#D87568';
export const CORAL_LINK_SOFT = 'rgba(216, 117, 104, 0.12)';
export const SURFACE_WHITE = '#FFFFFF';
export const SOFT_NEUTRAL = '#F6F6F3';
export const PALE_SAGE_BG = '#F0F3EB';
export const BODY_TEXT = '#56626D';
export const MUTED_TEXT = 'rgba(86, 98, 109, 0.82)';
export const BORDER = '#D8D9D4';
export const BORDER_LIGHT = BORDER;
export const BORDER_SUBTLE = 'rgba(216, 217, 212, 0.9)';

/** Sustainability icons / rings / arrows / checkmarks */
export const SUSTAINABILITY_GREEN = DARK_SAGE;
export const SUSTAINABILITY_GREEN_SOFT = DARK_SAGE_SOFT;

export const FONT_HEADING =
	'"Cormorant Garamond", Georgia, "Times New Roman", Times, serif';
export const FONT_BODY =
	'"Libre Baskerville", Georgia, "Times New Roman", Times, serif';

export const CONTENT_MAX = 1360;

export const SECTION_PY = { xs: '72px', md: '112px' };
export const SECTION_PY_COMPACT = { xs: '64px', md: '88px' };

export const SPACE = {
	headingToIntro: { xs: 1.75, md: 2.25 },
	introToContent: { xs: 4, md: 5.5 },
	contentGroup: { xs: 4.5, md: 6 },
};

export const RADIUS_BUTTON = '2px';
export const RADIUS_CARD = '4px';
export const RADIUS_IMAGE = '4px';
export const RADIUS_PANEL = '4px';
export const RADIUS_BADGE = '2px';

export const SHADOW_CARD = 'none';
export const SHADOW_IMAGE = 'none';
export const SHADOW_HOVER = 'none';
export const SHADOW_FOCUS = `0 0 0 2px ${SURFACE_WHITE}, 0 0 0 4px ${SAGE_ACCENT}`;

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

/** Full-bleed section band with an explicit background token. */
export const sectionBandColorSx = (backgroundColor, dividerColor = BORDER) => ({
	...sectionBandBaseSx,
	'&::before': {
		...sectionBandBaseSx['&::before'],
		backgroundColor,
		borderTop: `1px solid ${dividerColor}`,
	},
});

export const cardSx = {
	backgroundColor: SURFACE_WHITE,
	border: `1px solid ${BORDER}`,
	borderRadius: RADIUS_CARD,
	boxShadow: SHADOW_CARD,
};

export const cardEmphasizedSx = {
	...cardSx,
	backgroundColor: SURFACE_WHITE,
	borderLeft: `3px solid ${SAGE_ACCENT}`,
	boxShadow: SHADOW_CARD,
};

export const mediaSx = {
	borderRadius: RADIUS_IMAGE,
	border: `1px solid ${BORDER}`,
	boxShadow: SHADOW_IMAGE,
	display: 'block',
	objectFit: 'cover',
};

export const mediaPlaceholderSx = {
	...mediaSx,
	backgroundColor: SOFT_NEUTRAL,
	backgroundImage:
		'repeating-linear-gradient(135deg, transparent, transparent 10px, rgba(216, 217, 212, 0.35) 10px, rgba(216, 217, 212, 0.35) 11px)',
	minHeight: 220,
	display: 'flex',
	flexDirection: 'column',
	alignItems: 'center',
	justifyContent: 'center',
	gap: 1,
	px: 3,
	textAlign: 'center',
};

/** Sage fill — primary CTA (e.g. Plan an Event) */
export const primaryButtonSx = {
	fontFamily: FONT_BODY,
	fontSize: '0.68rem',
	fontWeight: 400,
	letterSpacing: '0.1em',
	textTransform: 'uppercase',
	color: DARK_SLATE,
	backgroundColor: SAGE_ACCENT,
	border: `1px solid ${SAGE_ACCENT}`,
	borderRadius: RADIUS_BUTTON,
	boxShadow: 'none',
	minHeight: 40,
	px: { xs: 1.5, sm: 1.9 },
	py: 0.55,
	'&:hover': {
		backgroundColor: SAGE_ACCENT_HOVER,
		borderColor: SAGE_ACCENT_HOVER,
		boxShadow: 'none',
	},
	'&:focus-visible': {
		boxShadow: SHADOW_FOCUS,
	},
};

/** Outlined slate — secondary CTA on light surfaces */
export const secondaryButtonSx = {
	fontFamily: FONT_BODY,
	fontSize: '0.68rem',
	fontWeight: 400,
	letterSpacing: '0.1em',
	textTransform: 'uppercase',
	color: DARK_SLATE,
	backgroundColor: 'transparent',
	borderRadius: RADIUS_BUTTON,
	borderColor: DARK_SLATE,
	borderWidth: '1px',
	boxShadow: 'none',
	minHeight: 40,
	px: { xs: 1.5, sm: 1.9 },
	py: 0.55,
	'&:hover': {
		backgroundColor: SAGE_SOFT,
		borderColor: DARK_SLATE,
		color: DARK_SLATE,
		boxShadow: 'none',
	},
	'&:focus-visible': {
		boxShadow: SHADOW_FOCUS,
	},
};

export const textLinkSx = {
	color: BODY_TEXT,
	textDecoration: 'none',
	borderBottom: `1px solid transparent`,
	transition: 'color 180ms ease, border-color 180ms ease',
	'&:hover': {
		color: CORAL_LINK,
		borderBottomColor: 'rgba(216, 117, 104, 0.45)',
	},
	'&:focus-visible': {
		outline: `2px solid ${CORAL_LINK}`,
		outlineOffset: '3px',
		borderRadius: '2px',
	},
};

export const pageThemeSx = {
	minHeight: '100vh',
	backgroundColor: SURFACE_WHITE,
	'--bg-base': SURFACE_WHITE,
	'--bg-alt': SOFT_NEUTRAL,
	'--band-divider': BORDER,
	color: DARK_SLATE,
	fontFamily: FONT_BODY,
	lineHeight: 1.72,
	'& h1': {
		fontFamily: FONT_HEADING,
		letterSpacing: '-0.02em',
		fontWeight: 500,
		color: DARK_SLATE,
	},
	'& h2': {
		fontFamily: FONT_HEADING,
		letterSpacing: '-0.015em',
		fontWeight: 500,
		color: DARK_SLATE,
	},
	'& h3': {
		fontFamily: FONT_HEADING,
		letterSpacing: '-0.012em',
		fontWeight: 500,
		color: DARK_SLATE,
	},
	'& .micro-label': {
		fontFamily: FONT_BODY,
		fontSize: TYPE.label,
		letterSpacing: '0.14em',
		textTransform: 'uppercase',
		fontWeight: 400,
		color: BRAND_SLATE,
	},
	'& .lux-link': {
		display: 'inline-flex',
		alignItems: 'center',
		gap: '0.3em',
		fontFamily: FONT_BODY,
		fontWeight: 400,
		color: DARK_SLATE,
		textDecoration: 'none',
		textDecorationThickness: '1px',
		textUnderlineOffset: '3px',
		borderBottom: '1px solid transparent',
		transition:
			'color 180ms ease, border-color 180ms ease, text-decoration-color 180ms ease, text-decoration-thickness 180ms ease',
		'&:hover': {
			color: CORAL_LINK,
			textDecoration: 'underline',
			textDecorationColor: 'rgba(216, 117, 104, 0.45)',
			textDecorationThickness: '1px',
			borderBottomColor: 'transparent',
		},
		'&:focus-visible': {
			outline: `2px solid ${CORAL_LINK}`,
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
		transition: 'border-color 220ms ease, color 220ms ease',
		'&:hover': {
			borderColor: SAGE_ACCENT,
		},
		'&:focus-visible': {
			outline: `2px solid ${SAGE_ACCENT}`,
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
		},
	},
	'& .MuiButton-root': {
		fontFamily: FONT_BODY,
		borderRadius: RADIUS_BUTTON,
		textTransform: 'uppercase',
		letterSpacing: '0.1em',
		fontWeight: 400,
		boxShadow: 'none',
		minHeight: 40,
		transition: 'background-color 200ms ease, border-color 200ms ease, color 200ms ease',
		'&.MuiButton-contained': {
			backgroundColor: SAGE_ACCENT,
			color: DARK_SLATE,
			'&:hover': {
				backgroundColor: SAGE_ACCENT_HOVER,
				boxShadow: 'none',
			},
		},
		'&.MuiButton-outlined': {
			color: DARK_SLATE,
			borderWidth: '1px',
			borderColor: DARK_SLATE,
			backgroundColor: 'transparent',
			'&:hover': {
				borderColor: DARK_SLATE,
				backgroundColor: SAGE_SOFT,
				color: DARK_SLATE,
				boxShadow: 'none',
			},
		},
		'@media (prefers-reduced-motion: reduce)': {
			transition: 'none',
		},
	},
};
