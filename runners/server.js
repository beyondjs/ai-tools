const BEE = require('@beyond-js/bee');

BEE('http://localhost:4002', { inspect: 4000 });

bimport('@beyond-js/api-server/main')
	.then(async ({ Server }) => {
		const server = new Server();
		server.start('@beyond-js/ai-tools/routes');
	})
	.catch(exc => console.error(exc.stack));
