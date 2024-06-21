import type { Application, Request, Response } from 'express';
import { FilesRoutes } from './files';
import { GitHubRoutes } from './github';
import { join } from 'path';
import { findUp } from 'find-up';

export /*bundle*/ class Routes {
	static setup(app: Application) {
		app.get('/', (req: Request, res: Response) => res.send('BeyonsJS AI API HTTP Server'));

		FilesRoutes.setup(app);
		GitHubRoutes.setup(app);
	}
}

export /*bundle*/ async function specs() {
	const root = await findUp('ai-tools', { cwd: __dirname, type: 'directory' });
	return join(root, 'openapi/merged.yaml');
}
