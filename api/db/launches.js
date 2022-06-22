const fetch = require('node-fetch');

const rootApi = 'https://api.spacexdata.com/v5/launches';

exports.launchesAll = async () => {
	const req = await fetch(rootApi);

	return await req.json();
};

exports.launchesLatest = async () => {
	const req = await fetch(`${rootApi}/latest`);

	return await req.json();
};

exports.launchesNext = async () => {
	const req = await fetch(`${rootApi}/next`);

	return await req.json();
};

exports.launchesPast = async () => {
	const req = await fetch(`${rootApi}/Past`);

	return await req.json();
};

exports.launchesUpcoming = async () => {
	const req = await fetch(`${rootApi}/upcoming`);

	return await req.json();
};
