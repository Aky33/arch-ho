import { HttpError } from "./http-error.js";

export class ValidaceError extends HttpError {
    constructor(message = 'Špatné vstupní parametry!') {
        super(400, message);
        this.name = 'ValidaceError';
    }
}