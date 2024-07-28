import { HTTPErrorManager } from './manager';

export /*bundle*/ enum ErrorCodes {
	internalServerError = 1,
	fileUploadError,
}

export /*bundle*/ class InternalServerError extends HTTPErrorManager {
	constructor(exc: Error) {
		const message = `Internal server error`;
		console.log(message);
		console.log(exc);
		super(ErrorCodes.internalServerError, message);
	}
}

export /*bundle*/ class FileUploadError extends HTTPErrorManager {
	constructor(file: string, exc: Error) {
		const message = `Error uploading file "${file}"`;
		console.log(message);
		console.log(exc);
		super(ErrorCodes.fileUploadError, message);
	}
}
