import '@testing-library/jest-dom';

import { render, screen, within } from '@testing-library/react';

import Past from '../../pages/past';

describe('Upcoming', () => {
	const mockLaunches = [
		{
			id: '62a9f08b20413d2695d88711',
			name: 'Globalstar FM15',
			date_utc: '2022-06-19T04:27:00.000Z',
			details: null,
			success: true,
			upcoming: false,
			links: {
				patch: {
					small: 'https://i.imgur.com/5rTHM0M.png',
					large: 'https://i.imgur.com/S60M8Nx.png',
				},
			},
			rocket: 'Falcon 9',
		},
		{
			id: '5fe3af43b3467846b324215e',
			name: 'SARah 1',
			date_utc: '2022-06-18T14:19:00.000Z',
			details: null,
			success: true,
			upcoming: false,
			links: {
				patch: {
					small: 'https://i.imgur.com/l9g82V0.png',
					large: 'https://i.imgur.com/hsVdIVT.png',
				},
			},
			rocket: 'Falcon 9',
		},
		{
			id: '6243ae0aaf52800c6e919257',
			name: 'Nilesat-301',
			date_utc: '2022-06-08T21:04:00.000Z',
			details: null,
			success: true,
			upcoming: false,
			links: {
				patch: {
					small: 'https://i.imgur.com/G5Q4UGg.png',
					large: 'https://i.imgur.com/yN5JioT.png',
				},
			},
			rocket: 'Falcon 9',
		},
		{
			id: '6278481757b51b752c5c5a5f',
			name: 'Starlink 4-19 (v1.5)',
			date_utc: '2022-06-01T17:08:50.000Z',
			details: null,
			success: true,
			upcoming: false,
			links: {
				patch: {
					small: 'https://imgur.com/BrW201S.png',
					large: 'https://imgur.com/573IfGk.png',
				},
			},
			rocket: 'Falcon 9',
		},
		{
			id: '6243ae24af52800c6e919258',
			name: 'Transporter-5',
			date_utc: '2022-05-25T18:27:00.000Z',
			details: null,
			success: true,
			upcoming: false,
			links: {
				patch: {
					small: 'https://imgur.com/IJWn9pK.png',
					large: 'https://imgur.com/u49XVx4.png',
				},
			},
			rocket: 'Falcon 9',
		},
	];

	it('renders Heading', () => {
		render(<Past launches={mockLaunches} />);

		expect(screen.getByRole('heading', { name: 'Past' })).toBeInTheDocument();
	});

	it('renders list of launch cards', () => {
		render(<Past launches={mockLaunches} />);

		const list = screen.getByRole('list', {
			name: /Past Launches/i,
		});

		const items = within(list).getAllByRole('listitem');

		expect(items.length).toBe(mockLaunches.length);

		for (const item of items) {
			const launchCard = within(item).getByTestId('launch-card');

			expect(launchCard).toBeInTheDocument();
		}
	});
});
