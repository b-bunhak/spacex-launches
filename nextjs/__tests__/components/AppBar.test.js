import '@testing-library/jest-dom';

import { render, screen } from '@testing-library/react';

import AppBar from '../../components/AppBar';

describe('AppBar', () => {
	it('renders title text', () => {
		render(<AppBar />);

		const text = screen.getByText('SpaceX Launches');

		expect(text).toBeInTheDocument();
	});

	it('renders links', () => {
		render(<AppBar />);

		const HomeLink = screen.getByRole('link', { name: 'Home' });
		const PastLink = screen.getByRole('link', { name: 'Past' });
		const UpcomingLink = screen.getByRole('link', { name: 'Upcoming' });

		expect(HomeLink).toBeInTheDocument();
		expect(PastLink).toBeInTheDocument();
		expect(UpcomingLink).toBeInTheDocument();
	});
});
