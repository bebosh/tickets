import { CustomError } from './custom-error';

export class BadReqestError extends CustomError {
  statusCode = 400;

  constructor(public message: string) {
    super(message);
    Object.setPrototypeOf(this, BadReqestError.prototype);
  }
  serializeErrors() {
    return [{ message: this.message }];
  }
}
