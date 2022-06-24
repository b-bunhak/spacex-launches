import { Box } from '@mui/material';

export default function SpaceBackground() {
	return (
		<Box
			sx={{
				zIndex: -1,
				'&, & > div': {
					overflow: 'hidden',
					position: 'absolute',
					top: '0',
					bottom: '0',
					left: '0',
					right: '0',
				},

				'@keyframes zoom': {
					'0%': {
						opacity: '0',
						transform: 'scale(0.5)',
						animationTimingFunction: 'ease-in',
					},
					'85%': {
						opacity: '1',
						transform: 'scale(2.8)',
						animationTimingFunction: 'linear',
					},
					'100%': { opacity: '0', transform: 'scale(3.5)' },
				},

				'& > div': {
					backgroundImage:
						'radial-gradient(2px 2px at 20px 30px, #eee, rgba(0,0,0,0)),\nradial-gradient(2px 2px at 40px 70px, #fff, rgba(0,0,0,0)),\nradial-gradient(2px 2px at 50px 160px, #ddd, rgba(0,0,0,0)),\nradial-gradient(2px 2px at 90px 40px, #fff, rgba(0,0,0,0)),\nradial-gradient(2px 2px at 130px 80px, #fff, rgba(0,0,0,0)),\nradial-gradient(2px 2px at 160px 120px, #ddd, rgba(0,0,0,0))',
					backgroundRepeat: 'repeat',
					backgroundSize: '200px 200px',
					animation: 'zoom 40s infinite',
					opacity: '0',
					'&:nth-of-type(1)': {
						backgroundPosition: '50% 50%',
						animationDelay: '0s',
					},
					'&:nth-of-type(2)': {
						backgroundPosition: '20% 60%',
						animationDelay: '10s',
					},
					'&:nth-of-type(3)': {
						backgroundPosition: '-20% -30%',
						animationDelay: '20s',
					},
					'&:nth-of-type(4)': {
						backgroundPosition: '40% -80%',
						animationDelay: '30s',
					},
				},
			}}
		>
			<div />
			<div />
			<div />
			<div />
		</Box>
	);
}
