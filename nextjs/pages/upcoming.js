import LaunchCard from '../components/LaunchCard';

export default function Upcoming({ launches }) {
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
		await fetch('http://localhost:3000/launches/upcoming')
	).json();

	launches.sort((a, b) => a.date_unix - b.date_unix);

	return { props: { launches } };
}
