import { Result } from "../utils/vo";

export interface ICommentService {
    find(gid: number): Promise<Result>;
    add(gid: number, uid: number, content: string): Promise<Result>;
    delete(id: number): Promise<Result>;
}