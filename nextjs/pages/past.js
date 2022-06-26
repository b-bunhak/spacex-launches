import { Typography } from '@mui/material';
import LaunchesList from '../components/LaunchesList';

import { pick } from 'lodash-es';

import fetchLaunchesRocketName from '../util/fetchLaunchesRocketName';

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
		'id',
		'name',
		'date_utc',
		'details',
		'success',
		'upcoming',
		'links.patch',
		'rocket',
	];

	// Fetch past launches list
	let launches = await (
		await fetch(`${process.env.NEXT_PUBLIC_API_URL}/launches/past`)
	).json();

	// Sort and pick properties
	launches = launches
		.sort((a, b) => b.date_unix - a.date_unix)
		.map((launch) => pick(launch, launchProperties));

	// Fetch rocket name
	launches = await fetchLaunchesRocketName(launches);

	return { props: { launches }, revalidate: 60 };
}
