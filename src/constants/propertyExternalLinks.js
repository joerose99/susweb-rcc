/**
 * Denver Marriott Tech Center — external destinations.
 *
 * Header CTAs must not point at unrelated property URLs behind Denver-branded labels.
 */

/** Official Denver Marriott Tech Center property overview / booking destination. */
export const PROPERTY_RESERVATIONS_URL =
	'https://www.marriott.com/en-us/hotels/dentc-denver-marriott-tech-center/overview/';

/** Official Denver Marriott Tech Center meetings & events destination. */
export const PROPERTY_EVENTS_INQUIRY_URL =
	'https://www.marriott.com/en-us/hotels/dentc-denver-marriott-tech-center/events/';

export const BIOGREEN360_URL = 'https://biogreen360.com/';

/** Sticky header collapses below this viewport width (px). */
export const HEADER_DESKTOP_MIN_WIDTH = 1280;

/** Shared scroll-margin so section headings clear the sticky header. */
export const HEADER_SCROLL_MARGIN = { xs: '88px', md: '96px' };

export const HEADER_NAV_ITEMS = [
	{ label: 'Impact', href: '#impact', sectionId: 'impact' },
	{ label: 'BioGreen360', href: '#biogreen360', sectionId: 'biogreen360' },
	{ label: 'How It Works', href: '#how-it-works', sectionId: 'how-it-works' },
	{ label: 'Events', href: '#events', sectionId: 'events' },
	{ label: 'Initiatives', href: '#initiatives', sectionId: 'initiatives' },
	{ label: 'Methodology', href: '#methodology', sectionId: 'methodology' },
];
