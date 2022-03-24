export class Result {
    private code: number;
    private data?: any;
    private message?: string;

    set setCode(code: number) {
        this.code = code;
    }
    set setData(data: any | undefined) {
        this.data = data;
    }
    set setMessage(message: string | undefined) {
        this.message = message;
    }
    get getCode(): number {
        return this.code;
    }

    get getData(): any {
        return this.data;
    }
    get getMessage(): string | undefined {
        return this.message;
    }

    constructor(code: number, data?: any, message?: string) {
        this.code = code;
        this.data = data;
        this.message = message;
    }


}