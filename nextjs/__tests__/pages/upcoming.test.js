import '@testing-library/jest-dom';

import { render, screen, within } from '@testing-library/react';

import Upcoming from '../../pages/upcoming';

describe('Upcoming', () => {
	const mockLaunches = [
		{
			id: '6243aea5af52800c6e91925c',
			name: 'SES-22',
			date_utc: '2022-06-29T21:04:00.000Z',
			details: null,
			success: null,
			upcoming: true,
			links: { patch: { small: null, large: null } },
			rocket: 'Falcon 9',
		},
		{
			id: '6243ae40af52800c6e919259',
			name: 'CRS-25',
			date_utc: '2022-07-01T00:00:00.000Z',
			details: null,
			success: null,
			upcoming: true,
			links: { patch: { small: null, large: null } },
			rocket: 'Falcon 9',
		},
		{
			id: '62a9f10b20413d2695d88715',
			name: 'Starlink 3-2 (v1.5)',
			date_utc: '2022-07-01T00:00:00.000Z',
			details: null,
			success: null,
			upcoming: true,
			links: {
				patch: {
					small: 'https://imgur.com/BrW201S.png',
					large: 'https://imgur.com/573IfGk.png',
				},
			},
			rocket: 'Falcon 9',
		},
		{
			id: '62a9f12820413d2695d88716',
			name: 'Starlink 4-25 (v1.5)',
			date_utc: '2022-07-01T00:00:00.000Z',
			details: null,
			success: null,
			upcoming: true,
			links: {
				patch: {
					small: 'https://imgur.com/BrW201S.png',
					large: 'https://imgur.com/573IfGk.png',
				},
			},
			rocket: 'Falcon 9',
		},
		{
			id: '6243ba08af52800c6e919270',
			name: 'O3b mPower 1,2',
			date_utc: '2022-07-01T00:00:00.000Z',
			details: null,
			success: null,
			upcoming: true,
			links: { patch: { small: null, large: null } },
			rocket: 'Falcon 9',
		},
	];

	it('renders Heading', () => {
		render(<Upcoming launches={mockLaunches} />);

		expect(
			screen.getByRole('heading', { name: 'Upcoming' })
		).toBeInTheDocument();
	});

	it('renders list of launch cards', () => {
		render(<Upcoming launches={mockLaunches} />);

		const list = screen.getByRole('list', {
			name: /Upcoming Launches/i,
		});

		const items = within(list).getAllByRole('listitem');

		expect(items.length).toBe(mockLaunches.length);

		for (const item of items) {
			const launchCard = within(item).getByTestId('launch-card');

			expect(launchCard).toBeInTheDocument();
		}
	});
});
