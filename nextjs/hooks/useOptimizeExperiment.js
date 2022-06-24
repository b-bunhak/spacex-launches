import { useState, useEffect } from 'react';

export default function useExperiment(experimentId) {
	const [variant, setVariant] = useState();
	useEffect(() => {
		const intervalId = setInterval(() => {
			if (window.google_optimize !== undefined) {
				setVariant(window.google_optimize.get(experimentId));
				clearInterval(intervalId);
			}
		}, 100);

		return () => clearInterval(intervalId);
	}, []);
	return variant;
}
