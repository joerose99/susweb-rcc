import React, { useCallback, useEffect, useRef, useState } from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import PropertyLockup from './PropertyLockup';
import {
	HEADER_DESKTOP_MIN_WIDTH,
	HEADER_NAV_ITEMS,
	PROPERTY_EVENTS_INQUIRY_URL,
	PROPERTY_RESERVATIONS_URL,
} from '../constants/propertyExternalLinks';
import {
	BORDER_LIGHT,
	DARK_SLATE,
	FONT_BODY,
	SAGE_ACCENT,
	SAGE_ACCENT_HOVER,
	SAGE_SOFT,
	SHADOW_FOCUS,
	SURFACE_WHITE,
	containerSx,
	primaryButtonSx,
	secondaryButtonSx,
} from '../theme/tokens';

const DESKTOP_MQ = `@media (min-width: ${HEADER_DESKTOP_MIN_WIDTH}px)`;

const scrollToTop = () => {
	window.scrollTo({ top: 0, behavior: 'smooth' });
};

const scrollToHash = (href) => {
	if (!href || href === '#') {
		scrollToTop();
		return;
	}
	const target = document.querySelector(href);
	if (target) {
		target.scrollIntoView({ behavior: 'smooth', block: 'start' });
	}
};

const StickyHeader = () => {
	const [menuOpen, setMenuOpen] = useState(false);
	const [scrolled, setScrolled] = useState(false);
	const [activeSectionId, setActiveSectionId] = useState(HEADER_NAV_ITEMS[0].sectionId);
	const navLockRef = useRef(null);
	const menuButtonRef = useRef(null);
	const closeButtonRef = useRef(null);

	const closeMenu = useCallback((restoreFocus = true) => {
		setMenuOpen(false);
		if (restoreFocus && menuButtonRef.current) {
			menuButtonRef.current.focus();
		}
	}, []);

	const openMenu = useCallback(() => {
		setMenuOpen(true);
	}, []);

	const setActiveFromClick = useCallback((sectionId) => {
		setActiveSectionId(sectionId);
		navLockRef.current = sectionId;
		window.setTimeout(() => {
			if (navLockRef.current === sectionId) {
				navLockRef.current = null;
			}
		}, 900);
	}, []);

	const handleSectionNav = useCallback(
		(event, href, sectionId) => {
			event.preventDefault();
			setActiveFromClick(sectionId);
			scrollToHash(href);
			closeMenu(false);
		},
		[closeMenu, setActiveFromClick]
	);

	useEffect(() => {
		const onScroll = () => {
			setScrolled(window.scrollY > 8);
		};
		onScroll();
		window.addEventListener('scroll', onScroll, { passive: true });
		return () => window.removeEventListener('scroll', onScroll);
	}, []);

	useEffect(() => {
		const sectionIds = HEADER_NAV_ITEMS.map((item) => item.sectionId);
		const elements = sectionIds
			.map((id) => document.getElementById(id))
			.filter(Boolean);

		if (!elements.length) {
			return undefined;
		}

		const observer = new IntersectionObserver(
			(entries) => {
				if (navLockRef.current) {
					return;
				}

				const visible = entries
					.filter((entry) => entry.isIntersecting)
					.sort((a, b) => b.intersectionRatio - a.intersectionRatio);

				if (visible[0]?.target?.id) {
					setActiveSectionId(visible[0].target.id);
				}
			},
			{
				root: null,
				rootMargin: '-20% 0px -55% 0px',
				threshold: [0.1, 0.25, 0.5],
			}
		);

		elements.forEach((el) => observer.observe(el));
		return () => observer.disconnect();
	}, []);

	useEffect(() => {
		if (!menuOpen) {
			return undefined;
		}

		const previousOverflow = document.body.style.overflow;
		document.body.style.overflow = 'hidden';

		const onKeyDown = (event) => {
			if (event.key === 'Escape') {
				closeMenu(true);
			}
		};

		window.addEventListener('keydown', onKeyDown);
		if (closeButtonRef.current) {
			closeButtonRef.current.focus();
		}

		return () => {
			document.body.style.overflow = previousOverflow;
			window.removeEventListener('keydown', onKeyDown);
		};
	}, [menuOpen, closeMenu]);

	const bookHref = PROPERTY_RESERVATIONS_URL;
	const eventHref = PROPERTY_EVENTS_INQUIRY_URL;
	const bookPending = !bookHref;
	const eventPending = !eventHref;

	const bookButtonSx = {
		...secondaryButtonSx,
		whiteSpace: 'nowrap',
		minHeight: primaryButtonSx.minHeight,
		px: primaryButtonSx.px,
		py: primaryButtonSx.py,
		transform: 'scale(1)',
		transition: 'transform 200ms ease, box-shadow 200ms ease',
		color: `${DARK_SLATE} !important`,
		borderColor: `${SURFACE_WHITE} !important`,
		backgroundColor: `${SURFACE_WHITE} !important`,
		'&.MuiButton-outlined': {
			color: DARK_SLATE,
			borderColor: SURFACE_WHITE,
			backgroundColor: SURFACE_WHITE,
		},
		'&:hover': {
			color: `${DARK_SLATE} !important`,
			borderColor: `${SURFACE_WHITE} !important`,
			backgroundColor: `${SURFACE_WHITE} !important`,
			boxShadow: '0 6px 16px rgba(0, 0, 0, 0.22)',
			transform: 'scale(1.04)',
		},
		'&.MuiButton-outlined:hover': {
			color: DARK_SLATE,
			borderColor: SURFACE_WHITE,
			backgroundColor: SURFACE_WHITE,
			boxShadow: '0 6px 16px rgba(0, 0, 0, 0.22)',
			transform: 'scale(1.04)',
		},
		'&:focus-visible': {
			boxShadow: `0 0 0 2px ${DARK_SLATE}, 0 0 0 4px ${SAGE_ACCENT}`,
		},
		'@media (prefers-reduced-motion: reduce)': {
			transition: 'none',
			'&:hover': {
				transform: 'none',
			},
			'&.MuiButton-outlined:hover': {
				transform: 'none',
			},
		},
	};

	const bookButtonMobileSx = {
		...bookButtonSx,
		borderColor: `${DARK_SLATE} !important`,
		'&.MuiButton-outlined': {
			color: DARK_SLATE,
			borderColor: DARK_SLATE,
			backgroundColor: SURFACE_WHITE,
		},
		'&:hover': {
			color: `${DARK_SLATE} !important`,
			borderColor: `${DARK_SLATE} !important`,
			backgroundColor: `${SURFACE_WHITE} !important`,
			boxShadow: '0 6px 16px rgba(0, 0, 0, 0.18)',
			transform: 'scale(1.04)',
		},
		'&.MuiButton-outlined:hover': {
			color: DARK_SLATE,
			borderColor: DARK_SLATE,
			backgroundColor: SURFACE_WHITE,
			boxShadow: '0 6px 16px rgba(0, 0, 0, 0.18)',
			transform: 'scale(1.04)',
		},
		'&:focus-visible': {
			boxShadow: SHADOW_FOCUS,
		},
	};

	const eventButtonSx = {
		...primaryButtonSx,
		whiteSpace: 'nowrap',
		'&:hover': {
			...primaryButtonSx['&:hover'],
			backgroundColor: SAGE_ACCENT_HOVER,
			borderColor: SAGE_ACCENT_HOVER,
		},
		'&:focus-visible': {
			boxShadow: SHADOW_FOCUS,
		},
	};

	const renderCta = (kind, size = 'desktop') => {
		const isBook = kind === 'book';
		const pending = isBook ? bookPending : eventPending;
		const href = isBook ? bookHref : eventHref;
		const label = isBook ? 'Book a Room' : 'Plan an Event';
		const sx = isBook
			? size === 'mobile'
				? bookButtonMobileSx
				: bookButtonSx
			: eventButtonSx;
		const pendingLabel = `${label} (destination pending approval)`;

		if (pending) {
			return (
				<Button
					key={`${kind}-${size}`}
					type='button'
					variant={isBook ? 'outlined' : 'contained'}
					disableElevation
					aria-label={pendingLabel}
					title='Destination pending approval'
					onClick={(event) => {
						event.preventDefault();
					}}
					sx={{
						...sx,
						cursor: 'not-allowed',
						opacity: 0.72,
					}}>
					{label}
				</Button>
			);
		}

		return (
			<Button
				key={`${kind}-${size}`}
				component='a'
				href={href}
				target='_blank'
				rel='noopener noreferrer'
				variant={isBook ? 'outlined' : 'contained'}
				disableElevation
				sx={sx}>
				{label}
			</Button>
		);
	};

	const navLinkSx = (isActive) => ({
		fontFamily: FONT_BODY,
		fontSize: '11.5px',
		letterSpacing: '0.12em',
		textTransform: 'uppercase',
		fontWeight: 400,
		color: SURFACE_WHITE,
		textDecoration: 'none',
		whiteSpace: 'nowrap',
		paddingY: '6px',
		paddingX: '2px',
		borderBottom: '2px solid',
		borderBottomColor: isActive ? SAGE_ACCENT : 'transparent',
		transition: 'color 180ms ease, border-color 180ms ease',
		'&:hover': {
			color: SURFACE_WHITE,
			borderBottomColor: isActive ? SAGE_ACCENT : 'rgba(167, 181, 140, 0.55)',
		},
		'&:focus-visible': {
			outline: `2px solid ${SAGE_ACCENT}`,
			outlineOffset: 4,
			borderRadius: '0px',
			borderBottomColor: 'transparent',
		},
	});

	return (
		<Box
			component='header'
			sx={{
				position: 'sticky',
				top: 0,
				zIndex: 1200,
				backgroundColor: DARK_SLATE,
				borderBottom: `1px solid rgba(255, 255, 255, 0.12)`,
				boxShadow: scrolled ? '0 4px 16px rgba(0, 0, 0, 0.28)' : 'none',
				transition: 'box-shadow 180ms ease',
			}}>
			<Box
				sx={{
					...containerSx,
					height: { xs: 72, md: 80 },
					display: 'flex',
					alignItems: 'center',
					justifyContent: 'space-between',
					gap: { xs: 1.5, md: 2 },
					py: 0,
				}}>
				{/* LEFT: property lockup */}
				<Box sx={{ flexShrink: 1, minWidth: 0, pr: 1 }}>
					<PropertyLockup
						onNavigateHome={() => {
							closeMenu(false);
							setActiveFromClick(HEADER_NAV_ITEMS[0].sectionId);
							scrollToTop();
						}}
					/>
				</Box>

				{/* CENTER: desktop section navigation */}
				<Box
					component='nav'
					aria-label='Page sections'
					sx={{
						display: 'none',
						[DESKTOP_MQ]: {
							display: 'flex',
							flex: '1 1 auto',
							justifyContent: 'center',
							alignItems: 'center',
							gap: { md: 2.25, lg: 2.75 },
							px: { md: 3, lg: 4 },
							minWidth: 0,
						},
					}}>
					{HEADER_NAV_ITEMS.map((item) => {
						const isActive = activeSectionId === item.sectionId;
						return (
							<Box
								key={item.href}
								component='a'
								href={item.href}
								aria-current={isActive ? 'true' : undefined}
								onClick={(event) => handleSectionNav(event, item.href, item.sectionId)}
								sx={navLinkSx(isActive)}>
								{item.label}
							</Box>
						);
					})}
				</Box>

				{/* RIGHT: desktop CTAs */}
				<Box
					sx={{
						display: 'none',
						[DESKTOP_MQ]: {
							display: 'flex',
							justifyContent: 'flex-end',
							alignItems: 'center',
							gap: 1.25,
							flexShrink: 0,
							pl: { md: 2.5, lg: 3.5 },
						},
					}}>
					{renderCta('book', 'desktop')}
					{renderCta('event', 'desktop')}
				</Box>

				{/* Mobile menu control */}
				<IconButton
					ref={menuButtonRef}
					type='button'
					aria-label={menuOpen ? 'Close menu' : 'Open menu'}
					aria-expanded={menuOpen}
					aria-controls='mobile-navigation-panel'
					onClick={() => (menuOpen ? closeMenu(false) : openMenu())}
					sx={{
						display: 'inline-flex',
						[DESKTOP_MQ]: { display: 'none' },
						color: DARK_SLATE,
						borderRadius: '0px',
						border: `1px solid ${BORDER_LIGHT}`,
						backgroundColor: SURFACE_WHITE,
						width: 44,
						height: 44,
						flexShrink: 0,
						'&:hover': {
							backgroundColor: SAGE_SOFT,
							borderColor: SAGE_ACCENT,
							color: DARK_SLATE,
						},
						'&:focus-visible': {
							outline: `2px solid ${SAGE_ACCENT}`,
							outlineOffset: 2,
						},
					}}>
					{menuOpen ? <CloseIcon /> : <MenuIcon />}
				</IconButton>
			</Box>

			{/* Mobile navigation panel */}
			<Box
				id='mobile-navigation-panel'
				role='dialog'
				aria-modal='true'
				aria-label='Site navigation'
				sx={{
					display: menuOpen ? 'block' : 'none',
					[DESKTOP_MQ]: {
						display: 'none !important',
					},
					position: 'absolute',
					top: '100%',
					left: 0,
					right: 0,
					backgroundColor: SURFACE_WHITE,
					borderBottom: `1px solid ${BORDER_LIGHT}`,
					boxShadow: 'none',
					maxHeight: 'calc(100vh - 72px)',
					overflowY: 'auto',
				}}>
				<Box
					sx={{
						...containerSx,
						py: 2.5,
						display: 'flex',
						flexDirection: 'column',
						gap: 0.5,
					}}>
					<IconButton
						ref={closeButtonRef}
						type='button'
						aria-label='Close menu'
						onClick={() => closeMenu(true)}
						sx={{
							alignSelf: 'flex-end',
							mb: 1,
							color: DARK_SLATE,
							'&:focus-visible': {
								outline: `2px solid ${SAGE_ACCENT}`,
								outlineOffset: 2,
							},
						}}>
						<CloseIcon />
					</IconButton>

					{HEADER_NAV_ITEMS.map((item) => {
						const isActive = activeSectionId === item.sectionId;
						return (
							<Box
								key={`mobile-${item.href}`}
								component='a'
								href={item.href}
								aria-current={isActive ? 'true' : undefined}
								onClick={(event) => handleSectionNav(event, item.href, item.sectionId)}
								sx={{
									fontFamily: FONT_BODY,
									fontSize: '13px',
									letterSpacing: '0.12em',
									textTransform: 'uppercase',
									fontWeight: 400,
									color: DARK_SLATE,
									textDecoration: 'none',
									py: 1.4,
									px: 0.5,
									borderBottom: `1px solid ${BORDER_LIGHT}`,
									borderLeft: isActive ? `3px solid ${SAGE_ACCENT}` : '3px solid transparent',
									pl: 1.25,
									'&:focus-visible': {
										outline: `2px solid ${SAGE_ACCENT}`,
										outlineOffset: 2,
									},
								}}>
								{item.label}
							</Box>
						);
					})}

					<Box
						sx={{
							display: 'flex',
							flexDirection: 'column',
							gap: 1.25,
							mt: 2.5,
						}}>
						{renderCta('book', 'mobile')}
						{renderCta('event', 'mobile')}
					</Box>
				</Box>
			</Box>
		</Box>
	);
};

export default StickyHeader;
