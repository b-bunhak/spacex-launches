import Link from 'next/link';

import {
	Card,
	CardContent,
	CardActions,
	Typography,
	Button,
} from '@mui/material';

export default function LaunchCard({
	name,
	date,
	details,
	linkLabel,
	linkHref,
	...props
}) {
	return (
		<Card {...props}>
			<CardContent>
				<Typography variant="h4">{name}</Typography>

				<Typography variant="h6">{new Date(date).toLocaleString()}</Typography>

				{details && <Typography variant="h5">{details}</Typography>}
			</CardContent>

			{linkHref && linkLabel && (
				<CardActions>
					<Link passHref href={linkHref}>
						<Button variant="outlined">{linkLabel}</Button>
					</Link>
				</CardActions>
			)}
		</Card>
	);
}
