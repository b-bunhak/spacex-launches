import { useEffect } from 'react';

import Head from 'next/head';
import { useRouter } from 'next/router';

import * as gtag from '../lib/gtag';

function MyApp({ Component, pageProps }) {
	const router = useRouter();
	useEffect(() => {
		const handleRouteChange = (url) => {
			gtag.pageView(url);
		};
		router.events.on('routeChangeComplete', handleRouteChange);
		router.events.on('hashChangeComplete', handleRouteChange);
		return () => {
			router.events.off('routeChangeComplete', handleRouteChange);
			router.events.off('hashChangeComplete', handleRouteChange);
		};
	}, [router.events]);

	return (
		<>
			<Head>
				<title>SpaceX Launches</title>
				<meta name="description" content="Future and past spacex launches." />
			</Head>
			<Component {...pageProps} />
		</>
	);
}

export default MyApp;
