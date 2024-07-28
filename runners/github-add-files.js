const BEE = require('@beyond-js/bee');

BEE('http://localhost:4002', { inspect: 4000 });

bimport('@beyond-js/ai-server/github/add-files')
	.then(async ({ addFiles }) => {
		await addFiles({
			repo: { owner: 'henrybox', name: 'testing-ai-server-github-upload' },
			branch: 'test-upload',
			message: 'feat: test-upload',
			folder: 'test-upload',
		});
	})
	.catch(exc => console.error(exc.stack));
