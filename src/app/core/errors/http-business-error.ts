export class HttpBusinessError extends Error {
    constructor(
        message: string
    ) {
        super(message);
        this.name = 'HttpBusinessError';
    }
}