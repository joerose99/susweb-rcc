import React from 'react';
import Box from '@mui/material/Box';
import { FONT_BODY, MUTED_TEXT } from '../theme/tokens';

const baseSx = {
	margin: 0,
	color: MUTED_TEXT,
	fontFamily: FONT_BODY,
	lineHeight: 1.5,
};

const variantSx = {
	regular: {
		fontSize: '14px',
		letterSpacing: '0.01em',
	},
	compact: {
		fontSize: '12px',
		letterSpacing: '0.02em',
	},
};

const LiveDataStamp = ({
	sourceName,
	lastSync,
	methodologyVersion,
	lastSyncDateTime,
	variant = 'regular',
}) => {
	const resolvedVariant = variantSx[variant] ? variant : 'regular';
	const spokenLabel = `Live data from ${sourceName}. Last sync: ${lastSync}. Methodology version ${methodologyVersion}.`;

	return (
		<Box
			component='p'
			role='status'
			aria-label={spokenLabel}
			sx={{ ...baseSx, ...variantSx[resolvedVariant] }}>
			<span>Live data from {sourceName}</span>
			<span aria-hidden='true'> • </span>
			<span>
				Last sync:{' '}
				<time dateTime={lastSyncDateTime || undefined}>
					{lastSync}
				</time>
			</span>
			<span aria-hidden='true'> • </span>
			<span>Methodology v{methodologyVersion}</span>
		</Box>
	);
};

export default LiveDataStamp;
