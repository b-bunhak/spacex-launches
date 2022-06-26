import '@testing-library/jest-dom';

import { render, screen } from '@testing-library/react';

import Home from '../../pages/index';

describe('Home', () => {
	const mockLatest = {
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
	};

	const mockNext = {
		name: 'SES-22',
		date_utc: '2022-06-29T21:04:00.000Z',
		details: null,
		success: null,
		upcoming: true,
		links: {
			patch: { small: null, large: null },
		},
	};

	it('renders labels', () => {
		render(<Home latest={mockLatest} next={mockNext} />);

		const lastLabel = screen.getByText('Last');
		const nextLabel = screen.getByText('Next');

		expect(lastLabel).toBeInTheDocument();
		expect(nextLabel).toBeInTheDocument();
	});

	it('renders links', () => {
		render(<Home latest={mockLatest} next={mockNext} />);

		const lastLink = screen.getByRole('link', { name: 'All past launches' });
		const nextLink = screen.getByRole('link', {
			name: 'All upcoming launches',
		});

		expect(lastLink).toBeInTheDocument();
		expect(nextLink).toBeInTheDocument();
	});
});
