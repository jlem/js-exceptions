import { InvalidArgumentException } from '../src';

describe('Invalid Argument Exception', () => {
    let error;
    let expectedValue;
    let givenValue;
    let exception;

    beforeEach(() => {
        error = 'something went wrong';
        expectedValue = 'any positive number';
        givenValue = -5;
        exception = new InvalidArgumentException(error, expectedValue, givenValue);
    });

    it('should be instantiatable', () => {
        expect(exception).toBeInstanceOf(InvalidArgumentException);
    });

    it('should contain the error message', () => {
        expect(exception.error).toBe(error);
    });
    
    it('should contain the expected value', () => {
        expect(exception.expectedValue).toBe(expectedValue);
    });
    
    it('should contain the given value', () => {
        expect(exception.givenValue).toBe(givenValue);
    });
});