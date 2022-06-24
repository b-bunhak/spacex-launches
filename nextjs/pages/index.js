import Link from 'next/link';

import { Box, Typography, Button } from '@mui/material';

import LaunchCard from '../components/LaunchCard';

export default function Home({ latest, next }) {
	return (
		<Box height="100%" display="flex">
			<Box
				my="auto"
				flex={1}
				display="flex"
				flexWrap="wrap-reverse"
				sx={{ '& > *': { m: 2, flex: '1 1 320px' } }}
			>
				<Box sx={{ textAlign: 'center' }}>
					<Typography color="primary" variant="h4" textAlign="center">
						Last
					</Typography>
					<LaunchCard
						name={latest.name}
						date={latest.date_utc}
						details={latest.details}
						success={latest.success}
						upcoming={latest.upcoming}
						badgeSrc={latest.links?.patch?.small}
					/>
					<Link passHref href="/past">
						<Button variant="outlined" sx={{ mt: 2 }}>
							All past launches
						</Button>
					</Link>
				</Box>
				<Box sx={{ textAlign: 'center' }}>
					<Typography color="primary" variant="h4" textAlign="center">
						Next
					</Typography>
					<LaunchCard
						name={next.name}
						date={next.date_utc}
						details={next.details}
						success={next.success}
						upcoming={next.upcoming}
						badgeSrc={next.links?.patch?.small}
					/>

					<Link passHref href="/past">
						<Button variant="outlined" sx={{ mt: 2 }}>
							All upcoming launches
						</Button>
					</Link>
				</Box>
			</Box>
		</Box>
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
