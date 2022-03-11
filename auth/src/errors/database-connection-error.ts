export class DatabaseConnectionError extends Error {
  reason = 'Error connecting to Database';
  constructor() {
    super();
    // Because we are extending a built in class the following code is needed
    Object.setPrototypeOf(this, DatabaseConnectionError.prototype);
  }
}
