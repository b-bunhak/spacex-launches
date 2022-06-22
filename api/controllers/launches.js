const launches = require('../db/launches');

exports.launchesAll = async () => {
	return await launches.launchesAll();
};

exports.launchesLatest = async () => {
	return await launches.launchesLatest();
};

exports.launchesNext = async () => {
	return await launches.launchesNext();
};

exports.launchesPast = async () => {
	return await launches.launchesPast();
};

exports.launchesUpcoming = async () => {
	return await launches.launchesUpcoming();
};
