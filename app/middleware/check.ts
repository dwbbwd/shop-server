import { Context } from "egg";
import { enum_ } from "../utils";
import { Auth } from "../utils/auth";
import Common from "../utils/common";

export default () => {
    return async function auth(ctx: Context, next: any) {
        const common = new Common();
        const auth = new Auth();
        if (ctx.request.url.indexOf('/login') > -1 || ctx.request.url.indexOf('/register') > -1) {
            await next();
        } else {
            const token = ctx.request.header[enum_.Header.token] as string;

            if (!token) {
                ctx.body = common.error(enum_.ErrorCode.auth, '请先登录');
                return;
            }
            let data: any = null;
            try {
                data = auth.decode(token);
            } catch (error) {
                ctx.body = common.error(enum_.ErrorCode.auth, '登录已过期');
                return;
            }

            if (!data) {
                ctx.body = common.error(enum_.ErrorCode.auth, 'token错误,请重新登录');
                return;
            }
            const user = await ctx.repo.User.findOne({ id: data.id });
            if (!user) {
                ctx.body = common.error(enum_.ErrorCode.auth, '用户不存在,请重新登录');
                return;
            } else {
                await next();
            }
        }
    }
}

