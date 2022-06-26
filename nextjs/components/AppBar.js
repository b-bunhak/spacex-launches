import Link from 'next/link';

import { useState, useCallback } from 'react';

import {
	alpha,
	Box,
	AppBar as MuiAppBar,
	Toolbar,
	Typography,
	Container,
	Button,
	IconButton,
	SwipeableDrawer,
	List,
	ListItem,
	ListItemButton,
	ListItemText,
	Divider,
} from '@mui/material';

import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';

const links = [
	{
		name: 'Home',
		href: '/',
	},
	{
		name: 'Past',
		href: '/past',
	},
	{
		name: 'Upcoming',
		href: '/upcoming',
	},
];

export default function AppBar({ sx, ...props }) {
	const [menuOpen, setMenuOpen] = useState(false);

	const handleDrawerToggle = useCallback(() => {
		setMenuOpen((value) => !value);
	}, []);

	return (
		<MuiAppBar
			position="sticky"
			sx={(theme) => ({
				transition: theme.transitions.create('top'),
				zIndex: theme.zIndex.appBar,
				backdropFilter: 'blur(20px)',
				backgroundColor: alpha(theme.palette.background.paper, 0.65),
				...sx,
			})}
			{...props}
		>
			<Container>
				<Toolbar>
					<Typography variant="h6">SpaceX Launches</Typography>

					<IconButton
						size="large"
						onClick={handleDrawerToggle}
						sx={{ ml: 'auto', display: { sm: 'none' } }}
					>
						<MenuIcon />
					</IconButton>

					<SwipeableDrawer
						anchor="top"
						open={menuOpen}
						onOpen={handleDrawerToggle}
						onClose={handleDrawerToggle}
						ModalProps={{
							keepMounted: true,
						}}
						sx={{
							'& .MuiDrawer-paper': (theme) => ({
								borderBottomRightRadius: theme.shape.borderRadius,
								borderBottomLeftRadius: theme.shape.borderRadius,
							}),
						}}
					>
						<Box sx={{ textAlign: 'center', borderBottomRightRadius: 1 }}>
							<ListItemButton component="div" onClick={handleDrawerToggle}>
								<CloseIcon sx={{ mx: 'auto', my: 1 }} />
							</ListItemButton>

							<Divider />
							<List>
								{links.map((link) => (
									<ListItem key={link.name} disablePadding>
										<Link passHref href={link.href}>
											<ListItemButton
												component="a"
												onClick={handleDrawerToggle}
												sx={{ textAlign: 'center' }}
											>
												<ListItemText primary={link.name} />
											</ListItemButton>
										</Link>
									</ListItem>
								))}
							</List>
						</Box>
					</SwipeableDrawer>

					<Box
						component="nav"
						sx={{ ml: 'auto', display: { xs: 'none', sm: 'flex' } }}
					>
						{links.map((link) => (
							<Link passHref key={link.name} href={link.href}>
								<Button component="a">{link.name}</Button>
							</Link>
						))}
					</Box>
				</Toolbar>
			</Container>
		</MuiAppBar>
	);
}
