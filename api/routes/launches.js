const launchesController = require('../controllers/launches');

const launchReturnProperties = {
	fairings: {
		type: 'object',
		nullable: true,
		properties: {
			reused: {
				type: 'boolean',
				nullable: true,
			},
			recovery_attempt: {
				type: 'boolean',
				nullable: true,
			},
			recovered: {
				type: 'boolean',
				nullable: true,
			},
			ships: {
				type: 'array',
				nullable: true,
				items: { type: 'string' },
			},
		},
	},
	links: {
		type: 'object',
		properties: {
			patch: {
				type: 'object',
				properties: {
					small: {
						type: 'string',
						nullable: true,
					},
					large: {
						type: 'string',
						nullable: true,
					},
				},
			},
			reddit: {
				type: 'object',
				properties: {
					campaign: {
						type: 'string',
						nullable: true,
					},
					launch: {
						type: 'string',
						nullable: true,
					},
					media: {
						type: 'string',
						nullable: true,
					},
					recovery: {
						type: 'string',
						nullable: true,
					},
				},
			},
			flickr: {
				type: 'object',
				properties: {
					small: {
						type: 'array',
						items: { type: 'string' },
					},
					original: {
						type: 'array',
						items: { type: 'string' },
					},
				},
			},
			presskit: {
				type: 'string',
				nullable: true,
			},
			webcast: {
				type: 'string',
				nullable: true,
			},
			youtube_id: {
				type: 'string',
				nullable: true,
			},
			article: {
				type: 'string',
				nullable: true,
			},
			wikipedia: {
				type: 'string',
				nullable: true,
			},
		},
	},
	static_fire_date_utc: {
		type: 'string',
		nullable: true,
	},
	static_fire_date_unix: {
		type: 'number',
		nullable: true,
	},
	net: {
		type: 'boolean',
	},
	window: {
		type: 'number',
		nullable: true,
	},
	rocket: {
		type: 'string',
	},
	success: {
		type: 'boolean',
		nullable: true,
	},
	failures: {
		type: 'array',
		items: {
			type: 'object',
			properties: {
				time: { type: 'number', nullable: true },
				altitude: { type: 'number', nullable: true },
				reason: { type: 'string', nullable: true },
			},
		},
	},
	details: {
		type: 'string',
		nullable: true,
	},
	crew: {
		type: 'array',
		items: {
			type: 'object',
			properties: {
				crew: { type: 'string' },
				role: { type: 'string' },
			},
		},
	},
	ships: {
		type: 'array',
		items: { type: 'string' },
	},
	capsules: {
		type: 'array',
		items: { type: 'string' },
	},
	payloads: {
		type: 'array',
		items: {
			type: 'string',
		},
	},
	launchpad: {
		type: 'string',
	},
	flight_number: {
		type: 'number',
	},
	name: {
		type: 'string',
	},
	date_utc: {
		type: 'string',
	},
	date_unix: {
		type: 'number',
	},
	date_local: {
		type: 'string',
	},
	date_precision: {
		type: 'string',
	},
	upcoming: {
		type: 'boolean',
	},
	cores: {
		type: 'array',
		items: {
			type: 'object',
			properties: {
				core: {
					type: 'string',
				},
				flight: {
					type: 'integer',
				},
				gridfins: {
					type: 'boolean',
				},
				legs: {
					type: 'boolean',
				},
				reused: {
					type: 'boolean',
					nullable: true,
				},
				landing_attempt: {
					type: 'boolean',
				},
				landing_success: {
					type: 'boolean',
				},
				landing_type: {
					type: 'string',
				},
				landpad: {
					type: 'string',
				},
			},
		},
	},
	auto_update: {
		type: 'boolean',
	},
	tbd: {
		type: 'boolean',
	},
	launch_library_id: {
		type: 'string',
		nullable: true,
	},
	id: {
		type: 'string',
	},
};

const launch200Return = {
	type: 'object',
	properties: launchReturnProperties,
};

const launchList200Return = {
	type: 'array',
	items: { type: 'object', properties: launchReturnProperties },
};

async function routes(fastify) {
	fastify.get(
		'/',
		{ schema: { response: { 200: launchList200Return } } },
		launchesController.launchesAll
	);

	fastify.get(
		'/latest',
		{ schema: { response: { 200: launch200Return } } },
		launchesController.launchesLatest
	);

	fastify.get(
		'/next',
		{ schema: { response: { 200: launch200Return } } },
		launchesController.launchesNext
	);

	fastify.get(
		'/past',
		{ schema: { response: { 200: launchList200Return } } },
		launchesController.launchesPast
	);

	fastify.get(
		'/upcoming',
		{ schema: { response: { 200: launchList200Return } } },
		launchesController.launchesUpcoming
	);
}

module.exports = async function (fastify) {
	fastify.register(routes, { prefix: '/launches' });
};
