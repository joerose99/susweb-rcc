/**
 * The Ritz-Carlton, Chicago — external destinations.
 *
 * Header CTAs must not point at unrelated property URLs behind Chicago-branded labels.
 */

/** Official The Ritz-Carlton, Chicago property overview. */
export const PROPERTY_OVERVIEW_URL =
	'https://www.ritzcarlton.com/en/hotels/chirz-the-ritz-carlton-chicago/overview/';

/**
 * Booking / reservations destination.
 * Official rooms page for The Ritz-Carlton, Chicago (property code CHIRZ).
 */
export const PROPERTY_RESERVATIONS_URL =
	'https://www.ritzcarlton.com/en/hotels/chirz-the-ritz-carlton-chicago/rooms/';

/** Official The Ritz-Carlton, Chicago meetings & events inquiry destination. */
export const PROPERTY_EVENTS_INQUIRY_URL =
	'https://www.ritzcarlton.com/en/hotels/chirz-the-ritz-carlton-chicago/events/';

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
