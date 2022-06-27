import { Box } from '@mui/material';

import LaunchCard from '../components/LaunchCard';

export default function LaunchesList({ launches, sx, ...props }) {
	return (
		<Box
			component="ol"
			sx={{
				listStyle: 'none',
				p: 0,
				m: 0,
				'& > li': {
					m: 2,
				},
				...sx,
			}}
			{...props}
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
						rocket={launch.rocket}
					/>
				</li>
			))}
		</Box>
	);
}
