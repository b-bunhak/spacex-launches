const fp = require('fastify-plugin');

module.exports = fp(async function (fastify) {
	fastify.register(require('@fastify/swagger'), {
		routePrefix: '/swagger',
		swagger: {
			info: {
				title: 'SpaceX Launches API',
				version: 1,
			},
		},
		exposeRoute: true,
	});
});
