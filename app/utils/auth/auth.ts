import jwt from 'jsonwebtoken';
import { ErrorCode } from '../enum';
import { GlobalError } from '../error';

/**
 * 秘钥
 */
const screteKey: string = 'U2FsdGVkX1/q6TqfzW7GVNbQRz4TuYcCPUGJ17FnJss='
/**
 * 过期时间
 */
const expires: number = 12 * 60 * 60;

export class Auth {
    public encode(params: any): string {
        return jwt.sign(params, screteKey, {
            expiresIn: expires,
        })
    }
    public decode(token: string): any {
        let res: any = null;
        try {
            res = jwt.verify(
                token,
                screteKey)
            return res
        } catch (error) {
            throw new GlobalError(ErrorCode.auth, 'token校验失败');
        }
    }
}