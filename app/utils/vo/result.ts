export class Result {
    set data(v: any) {
        this.data = v;
    }
    set code(code: number) {
        this.code = code;
    }
    set message(message: string) {
        this.message = message;
    }
    get code(): number {
        return this.code;
    }
    get data(): any {
        return this.data;
    }
    get message(): string {
        return this.message;
    }
    constructor(code: number, data: any) {
        this.code = code;
        this.data = data;
    }
}