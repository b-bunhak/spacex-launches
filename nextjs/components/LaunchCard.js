import { useEffect, useState } from 'react';

import {
	Box,
	Card,
	CardContent,
	Typography,
	Avatar,
	alpha,
} from '@mui/material';

export default function LaunchCard({
	name,
	date,
	details,
	linkLabel,
	success,
	upcoming,
	linkHref,
	badgeSrc,
	rocket,
	sx,
	...props
}) {
	const [dateLocal, setDateLocal] = useState(date);

	useEffect(() => {
		setDateLocal(new Date(date).toLocaleString());
	}, []);

	return (
		<Card
			data-testid="launch-card"
			{...props}
			sx={{
				backgroundColor: (theme) => alpha(theme.palette.background.paper, 0.65),
				textAlign: 'center',
				...sx,
			}}
		>
			<CardContent>
				<Typography variant="h4">
					{badgeSrc && (
						<Avatar
							alt={`${name} patch`}
							src={badgeSrc}
							sx={{ mr: 1, display: 'inline-block', verticalAlign: 'sub' }}
						/>
					)}
					{name}
				</Typography>

				{rocket && (
					<Typography component="div" variant="h6">
						Rocket: {rocket}
					</Typography>
				)}

				<Typography component="div" variant="h6">
					{dateLocal}
				</Typography>

				{details && (
					<Typography component="div" variant="h5">
						{details}
					</Typography>
				)}

				<Typography
					component="div"
					variant="h6"
					sx={{
						display: 'flex',
						justifyContent: 'center',
						alignItems: 'center',
					}}
				>
					<Box
						sx={(theme) => ({
							display: 'inline-block',
							height: '0.75em',
							width: '0.75em',
							borderRadius: '50%',
							bgcolor: upcoming
								? theme.palette.grey[500]
								: success
								? theme.palette.success.main
								: theme.palette.error.main,
							mr: 1,
						})}
					/>
					{upcoming ? 'Upcoming' : success ? 'Successful' : 'Failed'}
				</Typography>
			</CardContent>
		</Card>
	);
}
