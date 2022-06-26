const rockets = require('../db/rockets');

exports.rocketsAll = async () => {
	return await rockets.rocketsAll();
};

exports.rocketsOne = async (request, reply) => {
	const { rocketId } = request.params;

	try {
		return await rockets.rocketsOne(rocketId);
	} catch (e) {
		if (e.cause.status === 404) {
			reply.status = 404;
			return 'Not Found';
		} else {
			throw e;
		}
	}
};
