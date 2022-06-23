import { Box } from '@mui/material';

import LaunchCard from '../components/LaunchCard';

export default function LaunchesList({ launches }) {
	return (
		<Box
			component="ul"
			sx={{
				listStyle: 'none',
				p: 0,
				m: 0,
				'& > li': {
					m: 2,
				},
			}}
		>
			{launches.map((launch) => (
				<li key={launch.id}>
					<LaunchCard
						name={launch.name}
						date={launch.date_utc}
						details={launch.details}
						success={launch.success}
						upcoming={launch.upcoming}
						badgeSrc={launch.links?.patch?.small}
						sx={{ mb: 2 }}
					/>
				</li>
			))}
		</Box>
	);
}
