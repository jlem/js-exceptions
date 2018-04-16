/**
 * This class may be thrown as an exception, and instantiated with useful information about why the error occured.
 * You may provide a detailed error message, what a valid value is considered to be, and what invalid value was given
 */
export class InvalidArgumentException {
	/**
	 * @param {string} error
	 * @param {*} expectedValue
	 * @param {*} givenValue
	 */
	constructor(error, expectedValue, givenValue) {
		this.error = error;
		this.expectedValue = expectedValue;
		this.givenValue = givenValue;
	}
}