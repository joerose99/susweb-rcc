import React from 'react';
import Box from '@mui/material/Box';
import Tooltip from '@mui/material/Tooltip';
import Typography from '@mui/material/Typography';
import {
	BORDER_LIGHT,
	BRAND_RED,
	BRAND_RED_SOFT,
	CHARCOAL,
	FONT_BODY,
	RADIUS_BADGE,
	SURFACE_WHITE,
} from '../theme/tokens';

const legendItems = [
	{
		label: 'Measured',
		description:
			'Measured metrics come directly from observed property-level data capture. These values represent tracked operational activity.',
	},
	{
		label: 'Estimated',
		description:
			'Estimated metrics are derived from measured inputs using documented conversion assumptions. They indicate directional impact rather than exact outcomes.',
	},
	{
		label: 'Equivalency',
		description:
			'Equivalencies translate impact data into familiar real-world comparisons. They are provided for context and are not audited environmental claims.',
	},
];

const MetricLegend = () => (
	<Box
		component='ul'
		aria-label='Metric definitions'
		sx={{
			listStyle: 'none',
			display: 'flex',
			flexWrap: 'wrap',
			gap: 1,
			m: 0,
			p: 0,
		}}>
		{legendItems.map((item) => (
			<Box component='li' key={item.label} sx={{ m: 0, p: 0 }}>
				<Tooltip
					title={
						<Typography sx={{ fontSize: '12px', lineHeight: 1.5 }}>
							{item.description}
						</Typography>
					}
					arrow
					enterTouchDelay={0}>
					<Box
						component='button'
						type='button'
						aria-label={`${item.label}: ${item.description}`}
						sx={{
							appearance: 'none',
							border: `1px solid ${BORDER_LIGHT}`,
							backgroundColor: SURFACE_WHITE,
							borderRadius: RADIUS_BADGE,
							px: 1.25,
							py: 0.5,
							fontSize: '12px',
							lineHeight: 1.4,
							fontWeight: 500,
							color: CHARCOAL,
							cursor: 'help',
							fontFamily: FONT_BODY,
							'&:hover': {
								borderColor: BRAND_RED,
								backgroundColor: BRAND_RED_SOFT,
								color: BRAND_RED,
							},
							'&:focus-visible': {
								outline: `2px solid ${BRAND_RED}`,
								outlineOffset: '2px',
							},
						}}>
						{item.label}
					</Box>
				</Tooltip>
			</Box>
		))}
	</Box>
);

export default MetricLegend;
