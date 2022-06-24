import { Typography } from '@mui/material';
import LaunchesList from '../components/LaunchesList';

export default function Upcoming({ launches }) {
	return (
		<>
			<Typography variant="h2" color="primary" textAlign="center" my={2}>
				Upcoming
			</Typography>
			<LaunchesList launches={launches} />
		</>
	);
}

export async function getStaticProps() {
	const launches = await (
		await fetch(`${process.env.NEXT_PUBLIC_API_URL}/launches/upcoming`)
	).json();

	launches.sort((a, b) => a.date_unix - b.date_unix);

	return { props: { launches } };
}
