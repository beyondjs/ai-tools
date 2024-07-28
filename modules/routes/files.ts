import type { Application, Request, Response as IResponse } from 'express';
import { validateBearerToken } from '@beyond-js/ai-tools/middleware';
import { uploadFile } from '@beyond-js/ai-tools/files/upload';

export class FilesRoutes {
	static setup(app: Application) {
		app.post('/files/upload', validateBearerToken, this.post);
	}

	static async post(req: Request, res: IResponse) {
		const { fileName, content } = req.body;
		if (!fileName || !content) {
			return res.status(400).json({ message: 'Parameters filename and content are required' });
		}

		const response = await uploadFile({});
		res.json(response);
	}
}
