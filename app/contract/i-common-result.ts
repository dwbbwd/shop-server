import { enum_ } from '../utils';
import { Result } from '../utils/vo';
export interface ICommonResult {
    success(code: enum_.ErrorCode, data: any, message?: string): Result;
    error(data: any, message: string): Result;
}