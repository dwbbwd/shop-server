import { Context } from 'egg-di';
import { ICommonResult } from '../contract';
import { ErrorCode } from './enum';
import { Result } from './vo';

@Context
export default class Common implements ICommonResult {
    success(code: ErrorCode, data: any): Result {
        return new Result(code, data);
    }
    error(code: any, message: string): Result {
        const result = new Result(code, {});
        result.message = message;
        return result;
    }


}