import Head from 'next/head';

import {
	createTheme,
	ThemeProvider,
	CssBaseline,
	alpha,
	GlobalStyles,
	Box,
	AppBar,
	Toolbar,
	Typography,
	Container,
} from '@mui/material';

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
				<GlobalStyles
					styles={{
						html: {
							minHeight: '100%',
						},
						body: {
							minHeight: '100%',
						},
					}}
				/>

				<Box height="100%" display="flex" flexDirection="column">
					<AppBar
						position="sticky"
						sx={(theme) => ({
							transition: theme.transitions.create('top'),
							zIndex: theme.zIndex.appBar,
							backdropFilter: 'blur(20px)',
							backgroundColor: alpha(theme.palette.background.paper, 0.65),
						})}
					>
						<Toolbar>
							<Container>
								<Typography variant="h6">SpaceX Launches</Typography>
							</Container>
						</Toolbar>
					</AppBar>
					<Container component="main" minHeight="100">
						<Component {...pageProps} />
					</Container>
				</Box>
			</ThemeProvider>
		</>
	);
}

export default MyApp;
