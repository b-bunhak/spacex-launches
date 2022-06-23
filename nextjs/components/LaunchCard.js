import Link from 'next/link';

import {
	Box,
	Card,
	CardContent,
	CardActions,
	Typography,
	Button,
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
	...props
}) {
	return (
		<Card
			{...props}
			sx={{
				backgroundColor: (theme) => alpha(theme.palette.background.paper, 0.65),
				textAlign: 'center',
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

				<Typography variant="h6">{new Date(date).toLocaleString()}</Typography>

				{details && <Typography variant="h5">{details}</Typography>}

				<Typography
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

			{linkHref && linkLabel && (
				<CardActions sx={{ justifyContent: 'center' }}>
					<Link passHref href={linkHref}>
						<Button variant="outlined">{linkLabel}</Button>
					</Link>
				</CardActions>
			)}
		</Card>
	);
}
