import Head from 'next/head';

function MyApp({ Component, pageProps }) {
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
