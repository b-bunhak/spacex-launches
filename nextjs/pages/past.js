import { Typography } from '@mui/material';
import LaunchesList from '../components/LaunchesList';

import { pick } from 'lodash-es';

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
	const launchProperties = [
		'name',
		'date_utc',
		'details',
		'success',
		'upcoming',
		'links.patch',
	];

	const launches = await (
		await fetch(`${process.env.NEXT_PUBLIC_API_URL}/launches/past`)
	).json();

	launches
		.sort((a, b) => b.date_unix - a.date_unix)
		.map((launch) => pick(launch, launchProperties));

	return { props: { launches }, revalidate: 60 };
}
