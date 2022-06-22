import LaunchCard from '../components/LaunchCard';

export default function Home({ latest, next }) {
	return (
		<main>
			<LaunchCard
				name={next.name}
				date={next.date_utc}
				details={next.details}
				linkLabel="All future launches"
				linkHref={'/upcoming'}
				sx={{ mb: 2 }}
			/>

			<LaunchCard
				name={latest.name}
				date={latest.date_utc}
				details={latest.details}
				linkLabel="All past launches"
				linkHref={'/past'}
			/>
		</main>
	);
}

export async function getStaticProps() {
	const latest = await (
		await fetch('http://localhost:3000/launches/latest')
	).json();

	const next = await (
		await fetch('http://localhost:3000/launches/next')
	).json();

	return { props: { latest, next } };
}
