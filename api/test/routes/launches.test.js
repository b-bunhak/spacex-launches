const { test } = require('tap');
const { build } = require('../helper');

test('/launches route', async (t) => {
	t.test('GET /', async (t) => {
		const app = await build(t);

		const res = await app.inject({
			url: '/launches',
		});

		t.equal(res.statusCode, 200);
		t.type(res.json(), 'Array');
	});

	t.test('GET /latest', async (t) => {
		const app = await build(t);

		const res = await app.inject({
			url: '/launches/latest',
		});

		t.equal(res.statusCode, 200);
		t.type(res.json(), 'object');
	});

	t.test('GET /next', async (t) => {
		const app = await build(t);

		const res = await app.inject({
			url: '/launches/next',
		});

		t.equal(res.statusCode, 200);
		t.type(res.json(), 'object');
	});

	t.test('GET /past', async (t) => {
		const app = await build(t);

		const res = await app.inject({
			url: '/launches/past',
		});

		t.equal(res.statusCode, 200);
		t.type(res.json(), 'Array');
	});

	t.test('GET /upcoming', async (t) => {
		const app = await build(t);

		const res = await app.inject({
			url: '/launches/upcoming',
		});

		t.equal(res.statusCode, 200);
		t.type(res.json(), 'Array');
	});
});
