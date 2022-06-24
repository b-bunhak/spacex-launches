import { Typography } from '@mui/material';
import LaunchesList from '../components/LaunchesList';

export default function Past({ launches }) {
	return (
		<>
			<Typography variant="h2" color="primary" textAlign="center" my={2}>
				Past
			</Typography>
			<LaunchesList launches={launches} />
		</>
	);
}

export async function getStaticProps() {
	const launches = await (
		await fetch(`${process.env.NEXT_PUBLIC_API_URL}/launches/past`)
	).json();

	launches.sort((a, b) => b.date_unix - a.date_unix);

	return { props: { launches } };
}
