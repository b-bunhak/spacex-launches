export default async function fetchLaunchesRocketName(launches) {
	const rocketIds = new Set();

	for (const launch of launches) {
		rocketIds.add(launch.rocket);
	}

	const rocketsArray = await Promise.all(
		Array.from(rocketIds).map(async (rocketId) => {
			if (!rocketId) {
				return null;
			}

			return await (
				await fetch(`${process.env.NEXT_PUBLIC_API_URL}/rockets/${rocketId}`)
			).json();
		})
	);

	const rocketsMap = new Map();

	for (const rocket of rocketsArray) {
		if (rocket) {
			rocketsMap.set(rocket.id, rocket);
		}
	}

	return launches.map((launch) => ({
		...launch,
		rocket: rocketsMap.get(launch.rocket).name,
	}));
}
