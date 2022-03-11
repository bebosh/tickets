import { ValidationError } from 'express-validator';

export class RequestValidationError extends Error {
  constructor(public errors: ValidationError[]) {
    super();
    // Because we are extending a built in class the following code is needed
    Object.setPrototypeOf(this, RequestValidationError.prototype);
  }
}

//throw new RequestValidationError(errors);
