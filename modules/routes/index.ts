import type { Application, Request, Response } from 'express';
import { FilesRoutes } from './files';
import { GitHubRoutes } from './github';
import { resolve, join } from 'path';

export /*bundle*/ class Routes {
	static setup(app: Application) {
		app.get('/', (req: Request, res: Response) => res.send('BeyonsJS AI API HTTP Server'));

		FilesRoutes.setup(app);
		GitHubRoutes.setup(app);
	}
}

const packageJsonPath = resolve(__dirname, 'package.json');
export /*bundle*/ const specs = join(packageJsonPath, '..', 'openapi/merged.yaml');
