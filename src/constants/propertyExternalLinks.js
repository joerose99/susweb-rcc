/**
 * The Ritz-Carlton, Pentagon City — external destinations.
 *
 * Header CTAs must not point at unrelated property URLs behind RCPC-branded labels.
 */

/** Official The Ritz-Carlton, Pentagon City property overview. */
export const PROPERTY_OVERVIEW_URL =
	'https://www.ritzcarlton.com/en/hotels/waspc-the-ritz-carlton-pentagon-city/overview/';

/**
 * Booking / reservations destination.
 */
// TODO: replace with RCPC Marriott reservation URL (propertyCode WASPC)
export const PROPERTY_RESERVATIONS_URL =
	'TODO: replace with RCPC Marriott reservation URL (propertyCode WASPC)';

/** Official The Ritz-Carlton, Pentagon City meetings & events inquiry destination. */
export const PROPERTY_EVENTS_INQUIRY_URL =
	'https://www.ritzcarlton.com/en/hotels/waspc-the-ritz-carlton-pentagon-city/events/';

export const BIOGREEN360_URL = 'https://biogreen360.com/';

/** Sticky header collapses below this viewport width (px). */
export const HEADER_DESKTOP_MIN_WIDTH = 1280;

/** Shared scroll-margin so section headings clear the sticky header. */
export const HEADER_SCROLL_MARGIN = { xs: '88px', md: '96px' };

export const HEADER_NAV_ITEMS = [
	{ label: 'How It Works', href: '#how-it-works', sectionId: 'how-it-works' },
	{ label: 'Impact', href: '#impact', sectionId: 'impact' },
	{ label: 'Events', href: '#events', sectionId: 'events' },
	{ label: 'Initiatives', href: '#initiatives', sectionId: 'initiatives' },
	{ label: 'BioGreen360', href: '#biogreen360', sectionId: 'biogreen360' },
];
