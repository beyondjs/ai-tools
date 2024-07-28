import { promises as fs } from 'fs';
import { join, dirname } from 'path';
import { FileUploadError } from '@beyond-js/ai-tools/errors';
import { HTTPResponse } from '@beyond-js/ai-tools/response';

export /*bundle*/ interface IUploadFileParams {
	fileName: string;
	content: Blob;
}

type UploadFileResponse = HTTPResponse<void>;

export /*bundle*/ async function uploadFile({ fileName, content }: IUploadFileParams): Promise<UploadFileResponse> {
	try {
		const fileDestination = join(process.cwd(), 'uploads', fileName);
		const dir = dirname(fileDestination);

		// Check if the directory exists, if not create it
		if (!(await fs.stat(dir).catch(() => false))) {
			await fs.mkdir(dir, { recursive: true });
		}

		let response: UploadFileResponse;

		// Convert Blob to ArrayBuffer
		const arrayBuffer = await content.arrayBuffer();
		const buffer = Buffer.from(arrayBuffer);

		await fs.writeFile(fileDestination, buffer);
		response = new HTTPResponse({});

		return response;
	} catch (exc) {
		const error = new FileUploadError(fileName, exc);
		return new HTTPResponse({ error });
	}
}
