const { test } = require('tap');
const { build } = require('../helper');

test('/rockets route', async (t) => {
	t.test('GET /', async (t) => {
		const app = await build(t);

		const res = await app.inject({
			url: '/rockets',
		});

		t.equal(res.statusCode, 200);
		t.type(res.json(), 'Array');
	});

	t.test('GET /:rocketId', async (t) => {
		const app = await build(t);

		const res = await app.inject({
			url: '/rockets/5e9d0d95eda69955f709d1eb',
		});

		t.equal(res.statusCode, 200);
		t.type(res.json(), 'object');
	});

	t.test('GET /:rocketId Not Found', async (t) => {
		const app = await build(t);

		const res = await app.inject({
			url: '/rockets/notFound',
		});

		t.equal(res.statusCode, 404);
		t.equal(res.body, 'Not Found');
	});
});
