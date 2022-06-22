import LaunchCard from '../components/LaunchCard';

export default function Past({ launches }) {
	return (
		<main>
			{launches.map((launch) => (
				<LaunchCard
					key={launch.id}
					name={launch.name}
					date={launch.date_utc}
					details={launch.details}
					sx={{ mb: 2 }}
				/>
			))}
		</main>
	);
}

export async function getStaticProps() {
	const launches = await (
		await fetch('http://localhost:3000/launches/past')
	).json();

	launches.sort((a, b) => b.date_unix - a.date_unix);

	return { props: { launches } };
}
