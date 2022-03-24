import { ICommonResult } from '../contract';
import { ErrorCode } from './enum';
import { Result } from './vo';

export default class Common implements ICommonResult {

    public success(code: ErrorCode, data: any): Result {
        const result = new Result(code, data);
        return result;
    }
    public error(code: any, message: string): Result {
        const result = new Result(code, message);
        return result;
    }


}