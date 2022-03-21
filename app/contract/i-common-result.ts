import { Result } from '../utils/vo';
export interface ICommonResult {
    success(): Result;
    error(): Result;
}