const fetch = require('node-fetch');

const rootApi = 'https://api.spacexdata.com/v4/rockets';

exports.rocketsAll = async () => {
	const req = await fetch(rootApi);

	return await req.json();
};

exports.rocketsOne = async (id) => {
	const req = await fetch(`${rootApi}/${id}`);

	if (req.status !== 200) {
		throw new Error(req.statusText, { cause: { status: req.status } });
	}

	return await req.json();
};
