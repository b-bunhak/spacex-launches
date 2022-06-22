const launchesController = require('../controllers/launches');

async function routes(fastify) {
	fastify.get('/', launchesController.launchesAll);

	fastify.get('/latest', launchesController.launchesLatest);

	fastify.get('/next', launchesController.launchesNext);

	fastify.get('/past', launchesController.launchesPast);

	fastify.get('/upcoming', launchesController.launchesUpcoming);
}

module.exports = async function (fastify) {
	fastify.register(routes, { prefix: '/launches' });
};
