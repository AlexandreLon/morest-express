export class NotRouteException extends Error {
    constructor(str: string) {
        super(str)
    }
}