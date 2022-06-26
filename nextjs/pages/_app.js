import Head from 'next/head';

import {
	createTheme,
	ThemeProvider,
	CssBaseline,
	GlobalStyles,
	Box,
	Container,
} from '@mui/material';

import AppBar from '../components/AppBar';
import SpaceBackground from '../components/SpaceBackground';

const theme = createTheme({
	palette: { mode: 'dark' },
	typography: {
		fontFamily: 'Mukta',
	},
});

function MyApp({ Component, pageProps }) {
	return (
		<>
			<Head>
				<title>SpaceX Launches</title>
				<meta name="description" content="Future and past SpaceX launches." />
			</Head>
			<ThemeProvider theme={theme}>
				<CssBaseline />
				<GlobalStyles
					styles={{
						'html, body, #__next': {
							minHeight: '100%',
							display: 'flex',
							flex: 1,
						},
						body: {
							flex: 1,
							minHeight: '100%',
						},
					}}
				/>

				<SpaceBackground />

				<Box flex={1} display="flex" flexDirection="column">
					<AppBar />
					<Container component="main" sx={{ flex: 1 }}>
						<Component {...pageProps} />
					</Container>
				</Box>
			</ThemeProvider>
		</>
	);
}

export default MyApp;
