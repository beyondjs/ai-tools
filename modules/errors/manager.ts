import { ErrorManager } from '@beyond-js/response/main';

export /*bundle*/ class HTTPErrorManager extends ErrorManager {
	static get is() {
		return 'beyond-js-ai-tools-http-error';
	}

	get is() {
		return HTTPErrorManager.is;
	}
}
