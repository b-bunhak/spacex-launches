import Head from 'next/head';

import { createTheme, ThemeProvider, CssBaseline } from '@mui/material';

const theme = createTheme({
	palette: { mode: 'dark' },
});

function MyApp({ Component, pageProps }) {
	return (
		<>
			<Head>
				<title>SpaceX Launches</title>
				<meta name="description" content="Future and past spacex launches." />
			</Head>
			<ThemeProvider theme={theme}>
				<CssBaseline />
				<Component {...pageProps} />
			</ThemeProvider>
		</>
	);
}

export default MyApp;
