import { Result } from "../utils/vo";

export interface IMessageService {
    findLimit(sid: number, rid: number): Promise<Result>;
    add(sid: number, rid: number, content: string): Promise<Result>;
    delete(id: number): Promise<Result>;
}