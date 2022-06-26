import { Typography } from '@mui/material';
import LaunchesList from '../components/LaunchesList';

import { pick } from 'lodash-es';

import fetchLaunchesRocketName from '../util/fetchLaunchesRocketName';

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

	// Fetch upcoming launches list
	let launches = await (
		await fetch(`${process.env.NEXT_PUBLIC_API_URL}/launches/upcoming`)
	).json();

	// Sort and pick properties
	launches = launches
		.sort((a, b) => a.date_unix - b.date_unix)
		.map((launch) => pick(launch, launchProperties));

	// Fetch rocket name
	launches = await fetchLaunchesRocketName(launches);

	return { props: { launches }, revalidate: 60 };
}
