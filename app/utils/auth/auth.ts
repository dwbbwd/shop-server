import { sign, verify } from 'jsonwebtoken';
import { ErrorCode } from '../enum';
import { GlobalError } from '../error';

/**
 * 秘钥
 */
const screteKey: string = 'U2FsdGVkX1/q6TqfzW7GVNbQRz4TuYcCPUGJ17FnJss='


export class Auth {
    public encode(params: any): string {
        return sign(params, screteKey, {
            expiresIn: '2h',
        });
    }
    public decode(token: string): any {
        let res: any = null;
        try {
            res = verify(
                token,
                screteKey)
            return res;
        } catch (error) {
            throw new GlobalError(ErrorCode.auth, 'token校验失败');
        }
    }
}