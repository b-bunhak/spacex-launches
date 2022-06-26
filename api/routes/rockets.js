const rocketsController = require('../controllers/rockets');

const rocketReturnProperties = {
	id: {
		type: 'string',
	},
	active: {
		type: 'boolean',
	},
	stages: {
		type: 'number',
	},
	boosters: {
		type: 'number',
	},
	cost_per_launch: {
		type: 'number',
	},
	success_rate_pct: {
		type: 'number',
	},
	first_flight: {
		type: 'string',
	},
	country: {
		type: 'string',
	},
	company: {
		type: 'string',
	},
	height: {
		type: 'object',
		properties: {
			meters: {
				type: 'number',
			},
			feet: {
				type: 'number',
			},
		},
	},
	diameter: {
		type: 'object',
		properties: {
			meters: {
				type: 'number',
			},
			feet: {
				type: 'number',
			},
		},
	},
	mass: {
		type: 'object',
		properties: {
			kg: {
				type: 'number',
			},
			lb: {
				type: 'number',
			},
		},
	},
	payload_weights: {
		type: 'array',
		items: {
			type: 'object',
			properties: {
				id: {
					type: 'string',
				},
				name: {
					type: 'string',
				},
				kg: {
					type: 'number',
				},
				lb: {
					type: 'number',
				},
			},
		},
	},
	first_stage: {
		type: 'object',
		properties: {
			reusable: {
				type: 'boolean',
			},
			engines: {
				type: 'number',
			},
			fuel_amount_tons: {
				type: 'number',
			},
			burn_time_sec: {
				type: 'number',
			},
			thrust_sea_level: {
				type: 'object',
				properties: {
					kN: {
						type: 'number',
					},
					lbf: {
						type: 'number',
					},
				},
			},
			thrust_vacuum: {
				type: 'object',
				properties: {
					kN: {
						type: 'number',
					},
					lbf: {
						type: 'number',
					},
				},
			},
		},
	},
	second_stage: {
		type: 'object',
		properties: {
			engines: {
				type: 'number',
			},
			fuel_amount_tons: {
				type: 'number',
			},
			burn_time_sec: {
				type: 'number',
			},
			thrust: {
				type: 'object',
				properties: {
					kN: {
						type: 'number',
					},
					lbf: {
						type: 'number',
					},
				},
			},
			payloads: {
				type: 'object',
				properties: {
					option_1: {
						type: 'string',
					},
					option_2: {
						type: 'string',
					},
					composite_fairing: {
						type: 'object',
						properties: {
							height: {
								type: 'object',
								properties: {
									meters: {
										type: 'number',
									},
									feet: {
										type: 'number',
									},
								},
							},
							diameter: {
								type: 'object',
								properties: {
									meters: {
										type: 'number',
									},
									feet: {
										type: 'number',
									},
								},
							},
						},
					},
				},
			},
		},
	},
	engines: {
		type: 'object',
		properties: {
			number: {
				type: 'number',
			},
			type: {
				type: 'string',
			},
			version: {
				type: 'string',
			},
			layout: {
				type: 'string',
			},
			engine_loss_max: {
				type: 'number',
			},
			propellant_1: {
				type: 'string',
			},
			propellant_2: {
				type: 'string',
			},
			thrust_sea_level: {
				type: 'object',
				properties: {
					kN: {
						type: 'number',
					},
					lbf: {
						type: 'number',
					},
				},
			},
			thrust_vacuum: {
				type: 'object',
				properties: {
					kN: {
						type: 'number',
					},
					lbf: {
						type: 'number',
					},
				},
			},
			thrust_to_weight: {
				type: 'number',
			},
		},
	},
	landing_legs: {
		type: 'object',
		properties: {
			number: {
				type: 'number',
			},
			material: {
				type: 'string',
				nullable: true,
			},
		},
	},
	wikipedia: {
		type: 'string',
	},
	description: {
		type: 'string',
	},
	name: {
		type: 'string',
	},
	type: {
		type: 'string',
	},
};

const rocket200Return = {
	type: 'object',
	properties: rocketReturnProperties,
};

const rocketList200Return = {
	type: 'array',
	items: { type: 'object', properties: rocketReturnProperties },
};

async function routes(fastify) {
	fastify.get(
		'/',
		{ schema: { response: { 200: rocketList200Return } } },
		rocketsController.rocketsAll
	);

	fastify.get(
		'/:rocketId',
		{
			schema: { response: { 200: rocket200Return, 404: { type: 'string' } } },
		},
		rocketsController.rocketsOne
	);
}

module.exports = async function (fastify) {
	fastify.register(routes, { prefix: '/rockets' });
};
