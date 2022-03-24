export class GlobalError extends Error {
    constructor(public code: number, public msg: string) {
        super('');
    }
}