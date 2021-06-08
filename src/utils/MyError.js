class MyError {
    constructor(message, code) {
        this.name = 'MyError';
        this.code = code || '500';
        this.message = message || 'Default Message';
        this.stack = (new Error()).stack;
    }
}
MyError.prototype = Object.create(Error.prototype);
MyError.prototype.constructor = MyError;

export default MyError;

