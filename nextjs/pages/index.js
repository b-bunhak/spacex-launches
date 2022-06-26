import Link from 'next/link';

import { Box, Typography, Button } from '@mui/material';

import LaunchCard from '../components/LaunchCard';

import useExperiment from '../hooks/useOptimizeExperiment';

import { pick } from 'lodash-es';

export default function Home({ latest, next }) {
	const variant = useExperiment(
		process.env.NEXT_PUBLIC_OPTIMIZE_EXPERIMENT_ID_HOME_BUTTON_TYPE
	);

	const launches = [
		{
			text: 'Last',
			launch: latest,
			link: { href: '/past', text: 'All past launches' },
		},
		{
			text: 'Next',
			launch: next,
			link: { href: '/upcoming', text: 'All upcoming launches' },
		},
	];

	return (
		<Box height="100%" display="flex">
			<Box
				my="auto"
				flex={1}
				display="flex"
				flexWrap="wrap-reverse"
				sx={{ '& > *': { m: 2, flex: '1 1 320px' } }}
			>
				{launches.map(({ text, link, launch }) => (
					<Box key={text} display="flex" flexDirection="column">
						<Typography color="primary" variant="h4" textAlign="center">
							{text}
						</Typography>
						<LaunchCard
							name={launch.name}
							date={launch.date_utc}
							details={launch.details}
							success={launch.success}
							upcoming={launch.upcoming}
							badgeSrc={launch.links?.patch?.small}
						/>
						<Link passHref href={link.href}>
							<Button
								variant={variant == 1 ? 'contained' : 'outlined'}
								sx={{ mt: 2, alignSelf: 'center' }}
							>
								{link.text}
							</Button>
						</Link>
					</Box>
				))}
			</Box>
		</Box>
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

	const latest = pick(
		await (
			await fetch(`${process.env.NEXT_PUBLIC_API_URL}/launches/latest`)
		).json(),
		launchProperties
	);

	const next = pick(
		await (
			await fetch(`${process.env.NEXT_PUBLIC_API_URL}/launches/next`)
		).json(),
		launchProperties
	);

	return { props: { latest, next }, revalidate: 60 };
}
