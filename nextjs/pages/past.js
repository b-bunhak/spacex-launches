import LaunchesList from '../components/LaunchesList';

export default function Past({ launches }) {
	return <LaunchesList launches={launches} />;
}

export async function getStaticProps() {
	const launches = await (
		await fetch('http://localhost:3000/launches/past')
	).json();

	launches.sort((a, b) => b.date_unix - a.date_unix);

	return { props: { launches } };
}
